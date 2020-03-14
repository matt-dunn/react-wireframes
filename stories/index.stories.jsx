import React from "react";
import styled from "@emotion/styled";

import "bootstrap/dist/css/bootstrap.min.css";

import { withWireFrameAnnotation, WireFrameContainer } from "../src/index";

import componentNotes from "./notes.md";

export default {
  title: "@matt-dunn/react-wireframes",
  parameters: { notes: componentNotes },
};

const Main = styled.div`
  margin: 10rem;
`;

const Test = styled.div`
  border-radius: 0.5rem;
  padding: 2rem;
  margin: 0 0 2rem 0;
  background-color: #f0f0f0;
`;

const WATest = withWireFrameAnnotation(Test, {
  title: "Test component 1",
  description: "Test component 1 description.",
});

const WATest2 = withWireFrameAnnotation(Test, {
  title: "Test component 2",
  description: "Test component 2 description. Etiam ut sagittis velit, quis hendrerit nisi. Praesent interdum lacinia varius. Phasellus id felis non ex accumsan tempor. Nunc sit amet lobortis enim. Pellentesque lectus nulla, hendrerit dapibus efficitur id, imperdiet sit amet turpis. Maecenas venenatis suscipit finibus. Sed lorem nulla, dictum vel sollicitudin id, posuere eget nulla. Duis accumsan ante eget neque tincidunt pellentesque.",
});

const WATest3 = withWireFrameAnnotation(Test, {
  title: "Test component 3",
  description: "Test component 3 description. Morbi tempor libero id accumsan sodales. Etiam maximus convallis faucibus. Nunc hendrerit sit amet ante in lobortis. Aliquam feugiat nibh sit amet nunc varius laoreet. Aliquam pharetra odio mi, sed convallis massa sagittis at. Nullam nibh tortor, commodo ac risus vitae, venenatis lobortis libero.",
});

export const simpleLayout = () => (
  <WireFrameContainer
    className="container"
    // defaultOpen={false}
  >
    <Main>
      <WATest>Hello</WATest>
      <WATest2>World</WATest2>
      <WATest2>World</WATest2>
      <WATest>Hello</WATest>
      <WATest3>Hello</WATest3>
    </Main>
  </WireFrameContainer>
);
