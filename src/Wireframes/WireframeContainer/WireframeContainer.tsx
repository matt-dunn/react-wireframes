/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */

import React, {
  ReactNode, useEffect, useState, useCallback, useMemo, useRef, useContext, createContext,
} from "react";
import css from "@emotion/css";
import styled from "@emotion/styled";

import { useScrollElementIntoView } from "../../useScrollElementIntoView";
import {
  API, WireframeAnnotation, WireframeAnnotationAPI, WireframeAnnotations,
} from "../api";
import { WireframeAnnotationNotes } from "../WireframeAnnotationNotes";
import { useIsomorphicLayoutEffect } from "../utils";
import { WireframeAnnotationComponentContext, WireframeAnnotationContext, WireframeProvider } from "../WireframeProvider";

type WireframeContainerProps = {
  children: ReactNode;
  className?: string;

  /**
   * Set the default annotation open state
   */
  defaultOpen?: boolean;

  /**
   * Fix the WireframeContainer to the viewport
   */
  fixed?: boolean;

  /**
   * Make the container open state controlled. ```onToggleOpen``` must be implemented to set external state.
   */
  open?: boolean;

  /**
   * Called when open state is changed
   * @param {boolean}             isOpen                Open state
   */
  onToggleOpen?: (isOpen: boolean) => void;

  /**
   * @param {WireframeAnnotation} wireframeAnnotation   Highlighted annotation
   * @param {Element}             element               Attached DOM element
   */
  onHighlightAnnotation?: (wireframeAnnotation: WireframeAnnotation, element: Element) => void;
}

const transitionDuration = 250;
const transition = `${transitionDuration}ms ease-in-out`;

const WireframeMainContainer = styled.div<{fixed: boolean}>`
  display: flex;

  ${({ fixed }) => fixed === false && css`
    overflow: hidden;
  `}

  > [data-annotations-container] {
    width: 0;
    min-width: 0;

    [data-annotations] {
      transform: translateX(100%);
    }
  }

  &.open {
    > [data-annotations-container] {
      width: 25%;
      min-width: 250px;

      > [data-annotations] {
        transform: translateX(0);
      }
    }
  }
`;

const WireframeBody = styled.main`
  flex-grow: 1;
`;

const WireframeAnnotationsContainer = styled.section`
  all: initial;
  font-family: inherit;
  line-height: 1.5;
  flex-grow: 0;
  flex-shrink: 0;
  max-width: 400px;
  padding: 0;
  transition: width ${transition}, min-width ${transition};
  position: relative;
  
  &:hover {
    [data-annotations-toggle] {
      transform: translate(-100%, -50%);
    }
  }
  
`;

const WireframeAnnotationsWrapper = styled.div<{fixed: boolean}>`
  flex-grow: 0;
  flex-shrink: 0;
  border-left: 2px solid #555;
  padding: 0;
  width: 25%;
  max-width: 400px;
  min-width: 250px;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  transition: transform ${transition};
  z-index: 6000;
  position: absolute;

  ${({ fixed }) => fixed !== false && css`
    position: fixed;
  `}
  
  header.annotations {
    padding: 0.1em 0.75em;
    background-color: #555;
    color: #fff;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    
    h1 {
      flex-grow: 1;
      font-size: 1.5em;
      margin: 0;
      line-height: 1.5;
      font-weight: lighter;
    }
  }
`;

export const WireframeAnnotationsToggle = styled.button<{open: boolean}>`
  margin: 0;
  padding: 0;
  position: absolute;
  left: 0;
  top: 50%;
  background-color: #555;
  color: #fff;
  border: none;
  border-radius: 0.5rem 0 0 0.5rem;
  transform: ${({ open }) => (open && css`translate(0, -50%)`) || css`translate(-100%, -50%)`};
  transition: opacity 100ms, transform 100ms;
  display: flex;
  flex-direction: row;
  align-items: center;
  opacity: ${({ open }) => (open && 1) || 0.25};
  font-size: 1rem;
  min-height: 3.5em;
  cursor: pointer;
  
  &:active,
  &:focus,
  &:hover {
    outline: none;
    opacity: 1;
  }

  span {
    all: initial;
    cursor: inherit;
    color: inherit;
    padding: 0.25em;
    font-size: 1.25em;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    font-weight: bold;
    transition: transform ${transitionDuration}ms;
    display: block;
    ${({ open }) => !open && css`transform: rotate(180deg);`};
  }
`;

export const WireframeAnnotationsClose = styled.button`
  flex-grow: 0;
  align-self: flex-start;
  cursor: pointer;
  line-height: 1;
  font-size: 1.5em;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0 0 0 0.25em;
  color: inherit;
`;

const WireframeAnnotationNotesContainer = styled.div`
  overflow: hidden;
  z-index: 1;
  position: relative;
  background-color: inherit;
  display: flex;
  flex-grow: 1;
  
  > * {
    overflow-x: hidden;
    overflow-y: auto;
  }
`;

export const ActiveWireframeAnnotationContext = createContext<WireframeAnnotationAPI | undefined>(undefined);

/**
 * Use the WireframeContainer at the top of your component tree
 * */
export const WireframeContainer = ({
  children, open, onToggleOpen, className, defaultOpen = true, onHighlightAnnotation, fixed = true,
}: WireframeContainerProps) => {
  if (open !== undefined && !onToggleOpen) {
    throw new TypeError("Controlled container must implement 'onToggleOpen'");
  }

  const [isClient, setIsClient] = useState(false);

  useIsomorphicLayoutEffect(() => {
    setIsClient(true);
  }, []);

  const activeAPI = useContext(ActiveWireframeAnnotationContext);

  const parentAPI = useContext(WireframeAnnotationContext);
  const parentAnnotation = useContext(WireframeAnnotationComponentContext);

  const [annotations, setAnnotations] = useState<WireframeAnnotations>();
  const [highlightedNote, setHighlightedNote] = useState<WireframeAnnotation | undefined>(undefined);

  const [isOpened, setIsOpened] = useState(false);
  const [isOpen, setIsOpen] = useState(open !== undefined ? open : defaultOpen);

  const opening = useRef<number>();
  const container = useRef<HTMLDivElement>(null);
  const annotationsContainer = useRef<HTMLDivElement>(null);

  const api = useMemo(() => {
    if (activeAPI) {
      activeAPI.setOptions({
        updater: setAnnotations,
        highlightNote: wireFrameAnnotation => setHighlightedNote(wireFrameAnnotation),
      });
      return activeAPI;
    }

    return API({
      updater: setAnnotations,
      highlightNote: wireFrameAnnotation => setHighlightedNote(wireFrameAnnotation),
    });
  }, [activeAPI]);

  useMemo(() => {
    if (parentAPI && parentAnnotation) {
      api.setParentReference({ api: parentAPI, id: parentAnnotation.id });
    }
  }, [api, parentAPI, parentAnnotation]);

  useEffect(() => {
    const opener = api.onOpen(setIsOpen);

    return () => {
      opener.unregister();
    };
  }, [api]);

  useEffect(() => {
    api.setOpen(isOpen);
    if (!isOpen) {
      api.highlightNote(undefined);
    }
  }, [api, isOpen]);

  useEffect(() => {
    if (open !== undefined) {
      api.setOpen(open);
    }
  }, [api, open]);

  useEffect(() => {
    clearTimeout(opening.current);

    if (isOpen) {
      setIsOpened(true);
    } else {
      opening.current = setTimeout(() => {
        setIsOpened(false);
      }, transitionDuration) as unknown as number;
    }
  }, [isOpen]);

  useScrollElementIntoView({
    element: ((highlightedNote && container.current && isOpen) && container.current.querySelector(`[data-annotation-id='${highlightedNote.id}']`)) || null,
    boundary: annotationsContainer.current,
    onScrollIntoView: useCallback(el => (onHighlightAnnotation && highlightedNote) && onHighlightAnnotation(highlightedNote, el), [onHighlightAnnotation, highlightedNote]),
  });

  const handleToggle = useCallback(() => {
    if (open === undefined) {
      setIsOpen(value => !value);
    }

    if (onToggleOpen) {
      onToggleOpen(!open);
    }
  }, [setIsOpen, open, onToggleOpen]);

  const handleClose = useCallback(() => {
    if (open === undefined) {
      setIsOpen(false);
    }

    if (onToggleOpen) {
      onToggleOpen(!open);
    }
  }, [setIsOpen, open, onToggleOpen]);

  return (
    <WireframeProvider
      api={api}
    >
      <WireframeMainContainer data-test="container" className={(isOpen && "open") || ""} fixed={fixed}>
        <WireframeBody className={className}>
          {children}
        </WireframeBody>

        {isClient && (
        <WireframeAnnotationsContainer data-annotations-container ref={container}>
          <WireframeAnnotationsWrapper data-annotations fixed={fixed}>
            <WireframeAnnotationsToggle open={isOpen} data-test="toggle" data-annotations-toggle title="Toggle annotations" onClick={handleToggle}>
              <span>→</span>
            </WireframeAnnotationsToggle>

            {isOpened && (
              <header className="annotations">
                <h1>Annotations</h1>
                <WireframeAnnotationsClose
                  aria-label="Close annotations"
                  onClick={handleClose}
                >
                  ×
                </WireframeAnnotationsClose>
              </header>
            )}

            {isOpened && (
            <WireframeAnnotationNotesContainer
              ref={annotationsContainer}
            >
              <WireframeAnnotationNotes
                annotations={annotations}
                parentReference={api.getParentReference()}
                highlightedNote={highlightedNote}
              />
            </WireframeAnnotationNotesContainer>
            )}
          </WireframeAnnotationsWrapper>
        </WireframeAnnotationsContainer>
        )}
      </WireframeMainContainer>
    </WireframeProvider>
  );
};
