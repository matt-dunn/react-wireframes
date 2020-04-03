import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { ErrorBoundary } from "../src/ErrorBoundary/ErrorBoundary";

import { Nested } from "./containers/nested";
import { Simple } from "./containers/simple";

import "./bootstrap.scss";

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
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Simple} />
        <Route exact path="/nested/" component={Nested} />
        <Route component={Simple} />
      </Switch>
    </BrowserRouter>
  </ErrorBoundary>
);

ReactDOM.render(
  app,
  document.getElementById("app"),
);
