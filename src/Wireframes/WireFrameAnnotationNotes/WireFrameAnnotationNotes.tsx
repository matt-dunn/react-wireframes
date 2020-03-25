/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */

import React from "react";
import styled from "@emotion/styled";

import { WireFrameComponent, WireFrameComponents } from "../api";
import { WireFrameAnnotationsNote } from "./WireFrameAnnotationNote";

type WireFrameAnnotationsNotesProps = {
  components: WireFrameComponents;
  highlightedNote?: WireFrameComponent;
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

export const WireFrameAnnotationsNotes = ({ components, highlightedNote, className }: WireFrameAnnotationsNotesProps) => (
  <WireFrameAnnotationsNotesContainer id="wf-annotations" tabIndex={0} className={className}>
    {components.map(component => (
      <li
        key={component.id}
        id={`wf-annotation-${component.id}`}
        className={(highlightedNote === component && "highlight") || ""}
      >
        <WireFrameAnnotationsNote component={component} />
      </li>
    ))}
  </WireFrameAnnotationsNotesContainer>
);
