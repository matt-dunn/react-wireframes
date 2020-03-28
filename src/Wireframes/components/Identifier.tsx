/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */

import React from "react";
import styled from "@emotion/styled";

import { WireframeAnnotation } from "../api";

type IdentifierProps = {
  annotation: WireframeAnnotation;
  className?: string;
}

export const IdentifierContainer = styled.cite`
  border-radius: 2em;
  background-color: yellow;
  border-color: #caca00;
  white-space: nowrap;
  min-width: 2em;
  height: 2em;
  padding: 0.25em 0.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: normal;
`;

export const Identifier = ({ annotation, className }: IdentifierProps) => (
  <IdentifierContainer data-annotation-identifier className={className}>{annotation.id.toLocaleString()}</IdentifierContainer>
);

export default Identifier;
