import React from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";

import { WireFrameContainer, withWireFrameAnnotation } from "src/index";

import "bootstrap/dist/css/bootstrap.min.css";

const Test = styled.div`
  border: 2px solid red;
`;

const WATest = withWireFrameAnnotation(Test, {
  title: "Test component 1",
  description: "Test component 1 description.",
});

const WATest2 = withWireFrameAnnotation(Test, {
  title: "Test component 2",
  description: "Test component 2 description.",
});

const app = (
  <WireFrameContainer
    className="container"
    // defaultOpen={false}
  >
    <WATest>Hello!!</WATest>
    <WATest2>Hello!!</WATest2>
    <WATest2>Hello!!</WATest2>
  </WireFrameContainer>
);

ReactDOM.render(
  app,
  document.getElementById("app"),
);
