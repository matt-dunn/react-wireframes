/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */

import React, {
  ComponentType, ReactElement, ReactNode, useCallback, useEffect, useState,
} from "react";
import styled from "@emotion/styled";
import css from "@emotion/css";
import classnames from "classnames";

import { WireframeAnnotation, WireframeAnnotationOptions } from "../api";
import { useApi } from "../useApi";
import { WireframeAnnotationComponentContext } from "../WireframeProvider";

import { Identifier } from "./Identifier";

type WireframeAnnotationProps = {
  className?: string;
  children?: ReactNode;
  outline?: boolean;
  isHighlighted?: boolean;
}

const Wrapper = styled.span<{show: boolean}>`
  position: relative;
  
  [disabled] {
    pointer-events: none;
  }
  
  &.outlined,
  &.outline:hover {
    ${({ show }) => show && css`
      z-index: 5000;
      
      > * {
        box-shadow: 0 0 0 1px #4086f7 !important;
      }
    `}
  }

  &.outlined,
  &:hover {
    > [data-annotation-identifier] {
        transition: opacity 0ms, visibility 0ms;
        opacity: 1;
    }
  }
`;

/* istanbul ignore next */
const getDisplayName = (WrappedComponent: ComponentType<any> | string) => (typeof WrappedComponent === "string" ? WrappedComponent : WrappedComponent.displayName || WrappedComponent.name || "Component");

export function withWireframeAnnotation(options: WireframeAnnotationOptions) {
  return function withWireframeAnnotationComponent<P extends object>(WrappedComponent: ComponentType<P> | keyof JSX.IntrinsicElements) {
    const Component = React.memo<P>((props: P) => <WrappedComponent {...props} />);
    Component.displayName = `withWireframeAnnotation(${getDisplayName(WrappedComponent)})`;

    // eslint-disable-next-line react/no-multi-comp
    function WrappedWireframeAnnotation({
      className, outline = true, isHighlighted = false, ...props
    }: P & WireframeAnnotationProps): ReactElement<P> {
      const {
        register, unregister, onOpen, isOpen, highlightNote, getParentReference,
      } = useApi();

      const [annotation, setAnnotation] = useState<WireframeAnnotation>();
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
        <WireframeAnnotationComponentContext.Provider value={annotation}>
          <Wrapper
            show={show}
            onMouseOver={handleHighlightNote}
            onFocus={handleHighlightNote}
            onMouseLeave={handleHighlightNoteReset}
            className={classnames({ "outline": outline, "outlined": isHighlighted && show }, className)}
          >
            {annotation && <Identifier annotation={annotation} parentReference={getParentReference()} show={show} />}

            <Component
              {...props as P}
            />
          </Wrapper>
        </WireframeAnnotationComponentContext.Provider>
      );
    }

    WrappedWireframeAnnotation.Component = Component;

    return WrappedWireframeAnnotation;
  };
}

/* istanbul ignore next */
export const withWireframeAnnotationInterfaceDefinition = (params: {withWireframeAnnotation: (options: WireframeAnnotationOptions) => // eslint-disable-line @typescript-eslint/no-unused-vars
    <P extends object>(WrappedComponent: ComponentType<P> | keyof JSX.IntrinsicElements) => ReactElement<WireframeAnnotationProps>;}) => null;

/* istanbul ignore next */
export const WireframeAnnotationPropsInterfaceDefinition = <P extends object>(
  {
    outline = true, isHighlighted = false, // eslint-disable-line @typescript-eslint/no-unused-vars
  }: WireframeAnnotationProps,
) => null;
