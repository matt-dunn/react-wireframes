/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */

import React from "react";
import styled from "@emotion/styled";

import { ParentReference, WireframeAnnotation, WireframeAnnotations } from "../api";

import { WireframeAnnotationNote } from "./WireframeAnnotationNote";

type WireframeAnnotationsNotesProps = {
  annotations?: WireframeAnnotations;
  highlightedNote?: WireframeAnnotation;
  className?: string;
  parentReference?: ParentReference;
}

const WireframeAnnotationNotesContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  outline: none;
  
  > li:not(:last-child) {
    border-bottom: 1px solid #ccc;
  }
`;

export const NoAnnotations = styled.div`
  padding: 20px;
  text-align: center;
  color: #888;
  font-size: 2rem;
  font-weight: lighter;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  
  > p {
    max-width: 75%;
    margin: 0;
    padding: 0;
  }
`;

export const WireframeAnnotationNotes = ({
  annotations, parentReference, highlightedNote, className,
}: WireframeAnnotationsNotesProps) => {
  if (annotations && annotations.length > 0) {
    return (
      <WireframeAnnotationNotesContainer tabIndex={0} className={className}>
        {annotations.map(annotation => (
          <li
            key={annotation.id}
            data-annotation-id={annotation.id}
            data-highlighted={highlightedNote === annotation}
          >
            <WireframeAnnotationNote annotation={annotation} parentReference={parentReference} isHighlighted={highlightedNote === annotation} />
          </li>
        ))}
      </WireframeAnnotationNotesContainer>
    );
  }

  return (
    <NoAnnotations>
      <p>
        No annotations on this page
      </p>
    </NoAnnotations>
  );
};
