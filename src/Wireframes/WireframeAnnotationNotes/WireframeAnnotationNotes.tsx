/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */

import React from "react";
import styled from "@emotion/styled";

import { WireframeAnnotation, WireframeAnnotations } from "../api";

import { WireframeAnnotationNote } from "./WireframeAnnotationNote";

type WireframeAnnotationsNotesProps = {
  annotations: WireframeAnnotations;
  highlightedNote?: WireframeAnnotation;
  className?: string;
}

const WireframeAnnotationNotesContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  outline: none;
  
  li {
    padding: 6px 0;
    border-bottom: 1px solid #ccc;
    
    &:last-child {
      border-bottom: none;
    }
    
    &.highlight {
      background-color: rgba(64, 134, 247, 0.25);
    }
  }
`;

export const WireframeAnnotationNotes = ({ annotations, highlightedNote, className }: WireframeAnnotationsNotesProps) => (
  <WireframeAnnotationNotesContainer tabIndex={0} className={className}>
    {annotations.map(annotation => (
      <li
        key={annotation.id}
        data-annotation-id={annotation.id}
        className={(highlightedNote === annotation && "highlight") || ""}
      >
        <WireframeAnnotationNote annotation={annotation} />
      </li>
    ))}
  </WireframeAnnotationNotesContainer>
);
