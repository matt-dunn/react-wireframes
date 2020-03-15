import React from "react";
import { WireFrameAnnotationsNotes } from "./WireFrameAnnotationNotes";

export default {
  title: "@matt-dunn/react-wireframes/WireFrameAnnotationsNotes",
  parameters: {
    component: WireFrameAnnotationsNotes,
    componentSubtitle: "Wireframe annotations",
  },
};

const MockedComponent = () => {};

const componentsSingleNote = [
  {
    id: 1,
    count: 1,
    Component: MockedComponent,
    options: {
      title: "Test component",
      description: "Test description",
    },
  },
];

export const SingleNote = () => (
  <WireFrameAnnotationsNotes
    components={componentsSingleNote}
  />
);

const componentsMultipleNotes = [
  {
    id: 1,
    count: 1,
    Component: MockedComponent,
    options: {
      title: "Test component",
      description: "Test description",
    },
  },
  {
    id: 2,
    count: 1,
    Component: MockedComponent,
    options: {
      title: "Test component 2",
      description: "Test description 2",
    },
  },
];

export const MultipleNotes = () => (
  <WireFrameAnnotationsNotes
    components={componentsMultipleNotes}
  />
);

export const HighlightedNote = () => (
  <WireFrameAnnotationsNotes
    components={componentsMultipleNotes}
    highlightedNote={componentsMultipleNotes[0]}
  />
);
