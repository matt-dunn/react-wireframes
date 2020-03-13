/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */

import React, { createContext, ReactNode } from "react";

import { API, WireFrameAnnotationAPI } from "./api";

const wireframeAPI = API();

export const WireFrameAnnotationContext = createContext<WireFrameAnnotationAPI>(wireframeAPI);

type WireFrameProviderProps = {
  children: ReactNode;
  api: WireFrameAnnotationAPI;
}

export const WireFrameProvider = ({ children, api }: WireFrameProviderProps) => (
  <WireFrameAnnotationContext.Provider value={api || wireframeAPI}>
    {children}
  </WireFrameAnnotationContext.Provider>
);
