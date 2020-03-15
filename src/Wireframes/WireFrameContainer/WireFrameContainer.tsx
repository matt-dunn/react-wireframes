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

type WireFrameProviderProps = {
  children: ReactNode;
  className?: string;
  defaultOpen?: boolean;
}

const WireFrameMainContainer = styled.div`
  display: flex;
`;

const WireFrameBody = styled.div`
  flex-grow: 1;
`;

const transitionDuration = 250;
const transition = `${transitionDuration}ms ease-in-out`;

const WireFrameAnnotationsContainer = styled.div<{open: boolean}>`
  flex-grow: 0;
  flex-shrink: 0;
  max-width: 400px;
  padding: 0;
  transition: width ${transition}, min-width ${transition};

  ${({ open = true }) => {
    if (open) {
      return css`
            width: 25%;
            min-width: 250px;
        `;
    }
    return css`
            width: 0;
            min-width: 0;
            
            [data-annotations] {
              transform: translateX(100%);
            }
        `;
  }};
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
  
  > header {
    padding: 3px 10px;
    background-color: #555;
    color: #fff;
    display: flex;
    
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
  left: -1.6em;
  top: 50%;
  background-color: #555;
  color: #fff;
  padding: 0.25em;
  border-radius: 0.25em 0 0 0.25em;
  transform: translateY(-50%);
  transition: opacity 100ms;
  min-height: 3em;
  width: 1.6em;
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

const WireFrameAnnotationsClose = styled.button`
  flex-grow: 0;
  cursor: pointer;
  line-height: 1;
  font-size: 1.5em;
  background-color: transparent;
  border: none;
  padding: 0;
  color: inherit;
`;

/**
 * Use the WireFrameContainer at the top of your component tree...
 * */
export const WireFrameContainer = ({ children, className, defaultOpen = true }: WireFrameProviderProps) => {
  const [isClient, setIsClient] = useState((process as any).browser);
  const [isOpened, setIsOpened] = useState(false);
  const opening = useRef<number | undefined>();

  useEffect(() => {
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
      }
    }
  }, [highlightedNote]);

  const handleToggle = useCallback(() => {
    setOpen(value => !value);
  }, [setOpen]);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <WireFrameAnnotationContext.Provider value={api}>
      <WireFrameMainContainer>
        <WireFrameBody className={className}>
          {children}
        </WireFrameBody>

        {isClient && (
          <WireFrameAnnotationsContainer open={open}>
            <WireFrameAnnotations data-annotations>
              <WireFrameAnnotationsToggle open={open} aria-label="Toggle annotations" onClick={handleToggle}>
                <span>→</span>
              </WireFrameAnnotationsToggle>

              {isOpened && (
                <>
                  <header>
                    <h1>Annotations</h1>
                    <WireFrameAnnotationsClose
                      aria-label="Close annotations"
                      onClick={handleClose}
                    >
                      ×
                    </WireFrameAnnotationsClose>
                  </header>

                  {components && (
                  <WireFrameAnnotationsNotes
                    components={components}
                    highlightedNote={highlightedNote}
                  />
                  )}
                </>
              )}
            </WireFrameAnnotations>
          </WireFrameAnnotationsContainer>
        )}
      </WireFrameMainContainer>
    </WireFrameAnnotationContext.Provider>
  );
};
