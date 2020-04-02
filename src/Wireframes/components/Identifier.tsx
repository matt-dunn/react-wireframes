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
  parentId?: number;
}

export const IdentifierContainer = styled.cite`
  all: initial;
  box-sizing: border-box;
  line-height: 1;
  border-radius: 2em;
  color: #333;
  background-color: yellow;
  border-color: #caca00;
  white-space: nowrap;
  min-width: 2em;
  max-width: initial;
  min-height: auto;
  max-height: initial;
  height: 2em;
  padding: 0.25em 0.5em;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: initial;
  overflow: visible;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  text-align: center;
  text-decoration: none;
  text-transform: none;
  flex-grow: 0;
  flex-shrink: 0;
`;

const getId = (id: number, parentId?: number) => `${(parentId && `${parentId}.`) || ""}${id.toLocaleString()}`;

export const Identifier = ({ annotation, parentId, className }: IdentifierProps) => (
  <IdentifierContainer data-annotation-identifier className={className}>{getId(annotation.id, parentId)}</IdentifierContainer>
);
