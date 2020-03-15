/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */

import React, { createContext, ReactNode } from "react";

import { WireFrameAnnotationAPI } from "./api";

export const WireFrameAnnotationContext = createContext<WireFrameAnnotationAPI | undefined>(undefined);

type WireFrameProviderProps = {
  children: ReactNode;
  api: WireFrameAnnotationAPI;
}

export const WireFrameProvider = ({ children, api }: WireFrameProviderProps) => (
  <WireFrameAnnotationContext.Provider value={api}>
    {children}
  </WireFrameAnnotationContext.Provider>
);
