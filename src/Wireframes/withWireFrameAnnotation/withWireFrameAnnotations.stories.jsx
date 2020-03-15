import React from "react";
import styled from "@emotion/styled";

import { withWireFrameAnnotation, WireFrameProvider } from "../index";
import { API } from "../api";

export default {
  title: "@matt-dunn/react-wireframes/withWireFrameAnnotation",
  parameters: {
    component: withWireFrameAnnotation,
    componentSubtitle: "Annotate component",
  },
};

const Section = styled.div`
  border-radius: 0.5rem;
  padding: 2rem;
  margin: 0 0 1rem 0;
  background-color: #f0f0f0;
`;

const WASample = withWireFrameAnnotation(Section, {
  title: "Header",
  description: "Header description. Morbi tempor libero id accumsan sodales. Etiam maximus convallis faucibus. Nunc hendrerit sit amet ante in lobortis. Aliquam feugiat nibh sit amet nunc varius laoreet. Aliquam pharetra odio mi, sed convallis massa sagittis at. Nullam nibh tortor, commodo ac risus vitae, venenatis lobortis libero.",
});

const wireframeAPI = API();

export const AnnotatedComponent = () => (
  <WireFrameProvider api={wireframeAPI}>
    <WASample>Header</WASample>
  </WireFrameProvider>
);

const wireframeAPIOpen = API();

wireframeAPIOpen.setOpen(true);

export const AnnotatedComponentOpen = () => (
  <WireFrameProvider api={wireframeAPIOpen}>
    <WASample>Header</WASample>
  </WireFrameProvider>
);
