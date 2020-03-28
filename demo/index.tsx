import React from "react";
import ReactDOM from "react-dom";

import ErrorBoundary from "src/ErrorBoundary/ErrorBoundary";

import "bootstrap/dist/css/bootstrap.min.css";

import { API, WireframeContainer, WireframeProvider } from "src/Wireframes";

import {
  Main, WAHeader, WASection1, WASection2, WASection3, WASection4, WASection5, WAFooter,
} from "src/Wireframes/WireframeContainer/WireframeContainer.stories.fixtures";

const wireframeAPI = API();

const AppError = ({ error }: {error: Error}) => (
  <>
    <h1>An error occurred</h1>
    <p>
      DEBUG:
      {error.message}
    </p>
  </>
);

const app = (
  <ErrorBoundary
    ErrorComponent={AppError}
  >
    <WireframeProvider
      api={wireframeAPI}
    >
      <WireframeContainer
        className="container"
      >
        <Main>
          <div className="row">
            <div className="col">
              <WAHeader>Header</WAHeader>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <WASection1>Component 1</WASection1>
            </div>
            <div className="col-6">
              <WASection2>Component 2</WASection2>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <WASection3>Component 3</WASection3>
            </div>
            <div className="col">
              <WASection4>Component 4</WASection4>
            </div>
            <div className="col">
              <WASection5>Component 5</WASection5>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <WAFooter>Footer</WAFooter>
            </div>
          </div>
        </Main>
      </WireframeContainer>
    </WireframeProvider>
  </ErrorBoundary>
);

ReactDOM.render(
  app,
  document.getElementById("app"),
);
