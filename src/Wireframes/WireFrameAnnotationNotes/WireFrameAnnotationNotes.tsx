/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */

import React from "react";
import styled from "@emotion/styled";
import { IdentifierBase } from "./styles";

import { WireFrameComponent, WireFrameComponents } from "./api";

type WireFrameAnnotationsNotesProps = {
    components: WireFrameComponents;
    highlightedNote?: WireFrameComponent;
}

const WireFrameAnnotationsNotesContainer = styled.ul`
  overflow: auto;
  font-size: 0.85rem;
  list-style: none;
  margin: 0;
  padding: 0;
  
  li {
    padding: 6px 0;
    border-bottom: 1px solid #ccc;
    
    &:last-child {
      border-bottom: none;
    }
    
    &.highlight {
      background-color: rgba(64, 134, 247, 0.25);
    }
    
    header {
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
    
    article {
      padding: 0 10px;
    }
  }
`;

const IdentifierNote = styled(IdentifierBase)`
  margin-right: 0.5em;
  border-width: 1px;
  border-style: solid;
  font-size: 0.8em;
`;

export const WireFrameAnnotationsNotes = ({ components, highlightedNote }: WireFrameAnnotationsNotesProps) => (
  <WireFrameAnnotationsNotesContainer id="wf-annotations">
    {components.map(component => (
      <li
        key={component.id}
        id={`wf-annotation-${component.id}`}
        className={(highlightedNote === component && "highlight") || ""}
      >
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
      </li>
    ))}
  </WireFrameAnnotationsNotesContainer>
);
