import React from "react";
import ReactDOM from "react-dom";

import ErrorBoundary from "src/ErrorBoundary/ErrorBoundary";
import { GridExample } from "src/Wireframes/WireFrame.stories";

const AppError = ({ error }: {error: Error}) => (
  <>
    <h1>An error occured</h1>
    <p>
      DEBUG:
      {error.message}
    </p>
  </>
)

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
