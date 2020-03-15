import React from "react";
import ReactDOM from "react-dom";

import ErrorBoundary from "src/ErrorBoundary/ErrorBoundary";
import { GridExample } from "src/Wireframes/WireFrameContainer/WireFrameContainer.stories";

import "bootstrap/dist/css/bootstrap.min.css";

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
    <GridExample />
  </ErrorBoundary>
);

ReactDOM.render(
  app,
  document.getElementById("app"),
);
