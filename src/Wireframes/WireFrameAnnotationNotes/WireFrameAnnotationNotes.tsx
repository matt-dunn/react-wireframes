/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */

import React from "react";
import styled from "@emotion/styled";

import { WireFrameAnnotation, WireFrameAnnotations } from "../api";

import { WireFrameAnnotationsNote } from "./WireFrameAnnotationNote";

type WireFrameAnnotationsNotesProps = {
  annotations: WireFrameAnnotations;
  highlightedNote?: WireFrameAnnotation;
  className?: string;
}

const WireFrameAnnotationsNotesContainer = styled.ul`
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

export const WireFrameAnnotationsNotes = ({ annotations, highlightedNote, className }: WireFrameAnnotationsNotesProps) => (
  <WireFrameAnnotationsNotesContainer tabIndex={0} className={className}>
    {annotations.map(annotation => (
      <li
        key={annotation.id}
        data-annotation-id={annotation.id}
        className={(highlightedNote === annotation && "highlight") || ""}
      >
        <WireFrameAnnotationsNote annotation={annotation} />
      </li>
    ))}
  </WireFrameAnnotationsNotesContainer>
);
