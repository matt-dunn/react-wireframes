import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route } from "react-router-dom";

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
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Simple} />
        <Route exact path="/nested/" component={Nested} />
        <Route component={Simple} />
      </Switch>
    </HashRouter>
  </ErrorBoundary>
);

ReactDOM.render(
  app,
  document.getElementById("app"),
);
