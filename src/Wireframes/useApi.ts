/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */

import { useContext } from "react";

import { WireframeAnnotationContext } from "./context";

export const useApi = () => {
  const api = useContext(WireframeAnnotationContext);

  if (!api) {
    throw new TypeError("WireframeProvider must be used to configure the api. Make sure it's defined at the top of the component tree.");
  }

  return api;
};
