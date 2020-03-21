/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */

import React, {
  ReactNode, useContext, useEffect, useState, useCallback, useMemo, useRef,
} from "react";
import css from "@emotion/css";
import styled from "@emotion/styled";
import scrollIntoView from "scroll-into-view-if-needed";

import { WireFrameAnnotationContext } from "../context";
import { WireFrameComponent, WireFrameComponents } from "../api";
import { WireFrameAnnotationsNotes } from "../WireFrameAnnotationNotes";
import { useIsomorphicLayoutEffect } from "../utils";

type WireFrameProviderProps = {
  children: ReactNode;
  className?: string;
  defaultOpen?: boolean;
  onScrollIntoView?: (el: Element, wireFrameComponent: WireFrameComponent) => void;
}

const transitionDuration = 250;
const transition = `${transitionDuration}ms ease-in-out`;

const WireFrameMainContainer = styled.div`
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

const WireFrameBody = styled.div`
  flex-grow: 1;
`;

const WireFrameAnnotationsContainer = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  max-width: 400px;
  padding: 0;
  transition: width ${transition}, min-width ${transition};
`;

const WireFrameAnnotations = styled.div`
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

export const WireFrameAnnotationsToggle = styled.div<{open: boolean}>`
  font-size: 1.25em;
  position: absolute;
  left: 0;
  top: 50%;
  background-color: #555;
  color: #fff;
  padding: 0.25em;
  border-radius: 0.25em 0 0 0.25em;
  transform: translate(-100%, -50%);
  transition: opacity 100ms;
  min-height: 3em;
  display: flex;
  align-items: center;
  cursor: pointer;
  opacity: ${({ open }) => (open && 1) || 0.25};
  
  &:hover {
    opacity: 1;
  }

  span {
    font-weight: bold;
    transition: transform ${transitionDuration}ms;
    display: block;
    ${({ open }) => !open && css`transform: rotate(180deg);`};
  }
`;

export const WireFrameAnnotationsClose = styled.button`
  flex-grow: 0;
  cursor: pointer;
  line-height: 1;
  font-size: 1.5em;
  background-color: transparent;
  border: none;
  padding: 0 0 0 0.25em;
  color: inherit;
`;

/**
 * Use the WireFrameContainer at the top of your component tree
 * */
export const WireFrameContainer = ({
  children, className, defaultOpen = true, onScrollIntoView,
}: WireFrameProviderProps) => {
  const [isClient, setIsClient] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const opening = useRef<number | undefined>();

  useIsomorphicLayoutEffect(() => {
    setIsClient(true);
  }, []);

  const api = useContext(WireFrameAnnotationContext);

  if (!api) {
    throw new TypeError("WireframeContainer does not have the api configured via it's WireFrameProvider");
  }

  const [components, setComponents] = useState<WireFrameComponents>();
  const [highlightedNote, setHighlightedNote] = useState<WireFrameComponent | undefined>(undefined);
  const [open, setOpen] = useState(defaultOpen);

  useMemo(() => {
    api.setOptions({
      updater: setComponents,
      highlightNote: wireFrameComponent => open && setHighlightedNote(wireFrameComponent),
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

  useEffect(() => {
    if (highlightedNote) {
      const el = document.querySelector(`#wf-annotation-${highlightedNote.id}`);

      if (el) {
        scrollIntoView(el, {
          behavior: "smooth",
          scrollMode: "if-needed",
          boundary: document.getElementById("wf-annotations"),
        });

        /* istanbul ignore else */
        if (onScrollIntoView) {
          onScrollIntoView(el, highlightedNote);
        }
      }
    }
  }, [highlightedNote, onScrollIntoView]);

  const handleToggle = useCallback(() => {
    setOpen(value => !value);
  }, [setOpen]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <WireFrameMainContainer data-test="container" className={(open && "open") || ""}>
      <WireFrameBody className={className}>
        {children}
      </WireFrameBody>

      {isClient && (
        <WireFrameAnnotationsContainer data-annotations-container>
          <WireFrameAnnotations data-annotations>
            <WireFrameAnnotationsToggle open={open} data-test="toggle" aria-label="Toggle annotations" onClick={handleToggle}>
              <span>→</span>
            </WireFrameAnnotationsToggle>

            {isOpened && (
              <header className="annotations">
                <h1>Annotations</h1>
                <WireFrameAnnotationsClose
                  aria-label="Close annotations"
                  onClick={handleClose}
                >
                  ×
                </WireFrameAnnotationsClose>
              </header>
            )}

            {(isOpened && components) && (
              <WireFrameAnnotationsNotes
                components={components}
                highlightedNote={highlightedNote}
              />
            )}
          </WireFrameAnnotations>
        </WireFrameAnnotationsContainer>
      )}
    </WireFrameMainContainer>
  );
};
