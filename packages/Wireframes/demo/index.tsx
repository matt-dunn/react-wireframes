import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route } from "react-router-dom";

import { ErrorBoundary } from "packages/ErrorBoundary/src";

import { Home } from "./containers/home";
import { Nested } from "./containers/nested";
import { Simple } from "./containers/simple";
import { Controlled } from "./containers/controlled";

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
        <Route exact path="/simple/" component={Simple} />
        <Route exact path="/nested/" component={Nested} />
        <Route exact path="/controlled/" component={Controlled} />
        <Route component={Home} />
      </Switch>
    </HashRouter>
  </ErrorBoundary>
);

ReactDOM.render(
  app,
  document.getElementById("app"),
);
