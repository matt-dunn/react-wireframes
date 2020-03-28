/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */

import React, {
  ReactNode, useEffect, useState, useCallback, useMemo, useRef,
} from "react";
import css from "@emotion/css";
import styled from "@emotion/styled";

import { useScrollElementIntoView } from "../../useScrollElementIntoView";

import { WireframeAnnotation, WireframeAnnotations } from "../api";
import { WireframeAnnotationNotes } from "../WireframeAnnotationNotes";
import { useIsomorphicLayoutEffect } from "../utils";
import { useApi } from "../useApi";

type WireframeProviderProps = {
  children: ReactNode;
  className?: string;
  defaultOpen?: boolean;
  onScrollIntoView?: (el: Element) => void;
}

const transitionDuration = 250;
const transition = `${transitionDuration}ms ease-in-out`;

const WireframeMainContainer = styled.div`
  display: flex;
  
  [data-annotations-container] {
    width: 0;
    min-width: 0;

    [data-annotations] {
      transform: translateX(100%);
    }
  }

  &.open {
    [data-annotations-container] {
      width: 25%;
      min-width: 250px;

      [data-annotations] {
        transform: translateX(0);
      }
    }
  }
`;

const WireframeBody = styled.main`
  flex-grow: 1;
`;

const WireframeAnnotationsContainer = styled.section`
  flex-grow: 0;
  flex-shrink: 0;
  max-width: 400px;
  padding: 0;
  transition: width ${transition}, min-width ${transition};
`;

const WireframeAnnotationsWrapper = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  border-left: 2px solid #555;
  padding: 0;
  width: 25%;
  max-width: 400px;
  min-width: 250px;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  transition: transform ${transition};
  z-index: 6000;
  
  header.annotations {
    padding: 0.1em 0.75em;
    background-color: #555;
    color: #fff;
    display: flex;
    flex-shrink: 0;
    align-items: flex-start;
    
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
  font-size: 1.25em;
  position: absolute;
  left: 0;
  top: 50%;
  background-color: #555;
  color: #fff;
  padding: 0.25em;
  border: none;
  border-radius: 0.25em 0 0 0.25em;
  transform: translate(-100%, -50%);
  transition: opacity 100ms;
  min-height: 3em;
  display: flex;
  align-items: center;
  cursor: pointer;
  opacity: ${({ open }) => (open && 1) || 0.25};
  
  &:active,
  &:focus,
  &:hover {
    outline: none;
    opacity: 1;
  }

  span {
    font-weight: bold;
    transition: transform ${transitionDuration}ms;
    display: block;
    ${({ open }) => !open && css`transform: rotate(180deg);`};
  }
`;

export const WireframeAnnotationsClose = styled.button`
  flex-grow: 0;
  cursor: pointer;
  line-height: 1;
  font-size: 1.5em;
  background-color: transparent;
  border: none;
  padding: 0 0 0 0.25em;
  color: inherit;
`;

const WireframeAnnotationNotesContainer = styled.div`
  overflow: auto;
  z-index: 1;
  position: relative;
  background-color: inherit;
`;

/**
 * Use the WireframeContainer at the top of your component tree
 * */
export const WireframeContainer = ({
  children, className, defaultOpen = true, onScrollIntoView,
}: WireframeProviderProps) => {
  const api = useApi();

  const [isClient, setIsClient] = useState(false);

  useIsomorphicLayoutEffect(() => {
    setIsClient(true);
  }, []);

  const opening = useRef<number>();
  const container = useRef<HTMLDivElement>(null);
  const annotationsContainer = useRef<HTMLDivElement>(null);

  const [isOpened, setIsOpened] = useState(false);
  const [annotations, setAnnotations] = useState<WireframeAnnotations>();
  const [highlightedNote, setHighlightedNote] = useState<WireframeAnnotation | undefined>(undefined);
  const [open, setOpen] = useState(defaultOpen);

  useMemo(() => {
    api.setOptions({
      updater: setAnnotations,
      highlightNote: wireFrameAnnotation => open && setHighlightedNote(wireFrameAnnotation),
    });
  }, [api, open]);

  useEffect(() => {
    const opener = api.onOpen(setOpen);

    return () => {
      opener.unregister();
    };
  }, [api]);

  useEffect(() => {
    api.setOpen(open);
  }, [api, open]);

  useEffect(() => {
    clearTimeout(opening.current);

    if (open) {
      setIsOpened(true);
    } else {
      opening.current = setTimeout(() => {
        setIsOpened(false);
      }, transitionDuration) as unknown as number;
    }
  }, [open]);

  useScrollElementIntoView({
    element: ((highlightedNote && container.current) && container.current.querySelector(`[data-annotation-id='${highlightedNote.id}']`)) || null,
    boundary: annotationsContainer.current,
    onScrollIntoView,
  });

  const handleToggle = useCallback(() => {
    setOpen(value => !value);
  }, [setOpen]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <WireframeMainContainer data-test="container" className={(open && "open") || ""} ref={container}>
      <WireframeBody className={className}>
        {children}
      </WireframeBody>

      {isClient && (
        <WireframeAnnotationsContainer data-annotations-container>
          <WireframeAnnotationsWrapper data-annotations>
            <WireframeAnnotationsToggle open={open} data-test="toggle" title="Toggle annotations" onClick={handleToggle}>
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

            {(isOpened && annotations) && (
              <WireframeAnnotationNotesContainer
                ref={annotationsContainer}
              >
                <WireframeAnnotationNotes
                  annotations={annotations}
                  highlightedNote={highlightedNote}
                />
              </WireframeAnnotationNotesContainer>
            )}
          </WireframeAnnotationsWrapper>
        </WireframeAnnotationsContainer>
      )}
    </WireframeMainContainer>
  );
};
