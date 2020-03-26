/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */

import { useContext } from "react";

import { WireFrameAnnotationContext } from "./context";

export const useApi = () => {
  const api = useContext(WireFrameAnnotationContext);

  if (!api) {
    throw new TypeError("WireFrameProvider must be used to configure the api. Make sure it's defined at the top of the component tree.");
  }

  return api;
};
