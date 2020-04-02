/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */

import React from "react";
import styled from "@emotion/styled";
import css from "@emotion/css";

import { Identifier } from "../components/Identifier";
import { WireframeAnnotation } from "../api";

type WireframeAnnotationsNoteProps = {
  annotation: WireframeAnnotation;
  isHighlighted?: boolean;
  parentId?: number;
}

const WireframeAnnotationsNoteContainer = styled.article<{isHighlighted: boolean}>`
  font-size: 0.85rem;
  word-break: break-word;
  padding: 6px 10px;

  > header {
    display: flex;
    margin-bottom: 5px;
    align-items: center;
    
    h2 {
      font-size: 1.2rem;
      margin: 0;
      font-weight: normal;
    }
  }
  
  ${({ isHighlighted }) => isHighlighted && css`
      background-color: rgba(64, 134, 247, 0.25);
  `}
`;

const IdentifierNote = styled(Identifier)`
  margin-right: 0.5em;
  border-width: 1px;
  border-style: solid;
  font-size: 0.75rem;
  align-self: flex-start;
`;

export const WireframeAnnotationNote = ({ annotation, parentId, isHighlighted = false }: WireframeAnnotationsNoteProps) => (
  <WireframeAnnotationsNoteContainer isHighlighted={isHighlighted}>
    <header>
      <IdentifierNote annotation={annotation} parentId={parentId} />
      <h2>
        {annotation.options.title}
      </h2>
    </header>
    <article>
      {annotation.options.description}
    </article>
  </WireframeAnnotationsNoteContainer>
);
