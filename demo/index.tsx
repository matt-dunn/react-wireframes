import React from "react";
import ReactDOM from "react-dom";

import { GridExample } from "src/WireFrame.stories";

const app = (
  <GridExample />
);

ReactDOM.render(
  app,
  document.getElementById("app"),
);
