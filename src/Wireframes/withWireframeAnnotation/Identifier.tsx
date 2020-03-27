/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */

import React from "react";
import styled from "@emotion/styled";
import { CSSTransition } from "react-transition-group";

import Identifier from "../components/Identifier";
import { WireframeAnnotation } from "../api";

type IdentifierProps = {
  annotation: WireframeAnnotation;
  show: boolean;
}

const IdentifierContainer = styled(Identifier)`
  position: absolute;
  top: -1em;
  left: -1em;
  z-index: 4000;
  cursor: default;
  transition: opacity 250ms, visibility 250ms;
  opacity: 0.75;
  visibility: visible;

  &.fade-Identifier.enter {
    opacity: 0;
    visibility: hidden;
  }
  &.fade-Identifier.enter-active {
    opacity: 0.75;
    visibility: visible;
  }
  &.fade-Identifier.exit {
    opacity: 0.75;
    visibility: visible;
  }
  &.fade-Identifier.exit-active {
    opacity: 0;
    visibility: hidden;
  }
`;

export const IdentifierComponent = ({ annotation, show = true }: IdentifierProps) => (
  <CSSTransition
    timeout={250}
    className="fade-Identifier"
    in={show}
    mountOnEnter
    unmountOnExit
  >
    <IdentifierContainer data-annotation-identifier annotation={annotation} />
  </CSSTransition>
);

export default IdentifierComponent;
