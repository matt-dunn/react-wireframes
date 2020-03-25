/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */

import React from "react";
import styled from "@emotion/styled";

import { IdentifierBase } from "../styles";
import { WireFrameComponent } from "../api";

type WireFrameAnnotationsNoteProps = {
    component: WireFrameComponent;
}

const WireFrameAnnotationsNoteContainer = styled.article`
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

const IdentifierNote = styled(IdentifierBase)`
  margin-right: 0.5em;
  border-width: 1px;
  border-style: solid;
  font-size: 0.8em;
`;

export const WireFrameAnnotationsNote = ({ component }: WireFrameAnnotationsNoteProps) => (
  <WireFrameAnnotationsNoteContainer>
    <header>
      <IdentifierNote>
        {component.id}
      </IdentifierNote>
      <h2>
        {component.options.title}
      </h2>
    </header>
    <article>
      {component.options.description}
    </article>
  </WireFrameAnnotationsNoteContainer>
);
