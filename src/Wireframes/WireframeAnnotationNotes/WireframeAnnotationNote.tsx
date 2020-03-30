/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */

import React from "react";
import styled from "@emotion/styled";

import { Identifier } from "../components/Identifier";
import { WireframeAnnotation } from "../api";

type WireframeAnnotationsNoteProps = {
  annotation: WireframeAnnotation;
}

const WireframeAnnotationsNoteContainer = styled.article`
  font-size: 0.85rem;

  > header {
    display: flex;
    padding: 0 10px;
    margin-bottom: 5px;
    align-items: center;
    
    h2 {
      font-size: 1.2rem;
      margin: 0;
      font-weight: normal;
    }
  }
  
  > article {
    padding: 0 10px;
  }
`;

const IdentifierNote = styled(Identifier)`
  margin-right: 0.5em;
  border-width: 1px;
  border-style: solid;
  font-size: 0.75rem;
  align-self: flex-start;
`;

export const WireframeAnnotationNote = ({ annotation }: WireframeAnnotationsNoteProps) => (
  <WireframeAnnotationsNoteContainer>
    <header>
      <IdentifierNote annotation={annotation} />
      <h2>
        {annotation.options.title}
      </h2>
    </header>
    <article>
      {annotation.options.description}
    </article>
  </WireframeAnnotationsNoteContainer>
);
