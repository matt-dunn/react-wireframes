/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */

import React, {
  ComponentType, ReactNode, useCallback, useEffect, useState,
} from "react";
import styled from "@emotion/styled";
import css from "@emotion/css";

import { WireFrameComponent, WireFrameComponentOptions } from "../api";
import { useApi } from "../useApi";

import Identifier from "./Identifier";

type WireFrameAnnotationProps = {
  className?: string;
  children?: ReactNode;
}

const Wrapper = styled.span<{show: boolean}>`
  position: relative;
  
  [disabled] {
    pointer-events: none;
  }
  
  &:hover {
    ${({ show }) => show && css`
      z-index: 5000;
      
      > * {
        box-shadow: 0 0 0 1px #4086f7 !important;
      }
    `}

    > [data-annotation-identifier] {
        transition: opacity 0ms, visibility 0ms;
        opacity: 1;
    }
  }
`;

/* istanbul ignore next */
const getDisplayName = (WrappedComponent: ComponentType<any> | string) => (typeof WrappedComponent === "string" ? WrappedComponent : WrappedComponent.displayName || WrappedComponent.name || "Component");

export function withWireFrameAnnotation<P extends object>(WrappedComponent: ComponentType<P> | string, options: WireFrameComponentOptions) {
  const Component = React.memo<P>((props: P) => <WrappedComponent {...props} />);
  Component.displayName = `withWireFrameAnnotation(${getDisplayName(WrappedComponent)})`;

  function WireFrameAnnotation({ className, ...props }: P & WireFrameAnnotationProps) {
    const {
      register, unregister, onOpen, isOpen, highlightNote,
    } = useApi();

    const [annotation, setAnnotation] = useState<WireFrameComponent>();
    const [show, setShow] = useState(isOpen());

    useEffect(() => {
      const cb = onOpen(setShow);
      setAnnotation(register(Component, options));

      return () => {
        cb.unregister();
        unregister(Component);
      };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const handleHighlightNote = useCallback((e) => {
      e.stopPropagation();
      highlightNote(Component);
    }, [highlightNote]);

    const handleHighlightNoteReset = useCallback(() => {
      highlightNote(undefined);
    }, [highlightNote]);

    return (
      <Wrapper
        show={show}
        onMouseOver={handleHighlightNote}
        onFocus={handleHighlightNote}
        onMouseLeave={handleHighlightNoteReset}
        className={className}
      >
        {annotation && <Identifier annotation={annotation} show={show} />}

        <Component {...props as P} />
      </Wrapper>
    );
  }

  WireFrameAnnotation.Component = Component;

  return WireFrameAnnotation;
}

export const withWireFrameAnnotationInterfaceDefinition = <P extends object>(
  { WrappedComponent, options }: {WrappedComponent: ComponentType<P>; options: WireFrameComponentOptions}, // eslint-disable-line @typescript-eslint/no-unused-vars
) => null;
