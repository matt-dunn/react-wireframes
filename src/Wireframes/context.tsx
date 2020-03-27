/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */

import React, { createContext, ReactNode } from "react";

import { WireframeAnnotationAPI } from "./api";

export const WireframeAnnotationContext = createContext<WireframeAnnotationAPI | undefined>(undefined);

type WireframeProviderProps = {
  children: ReactNode;
  api: WireframeAnnotationAPI;
}

export const WireframeProvider = ({ children, api }: WireframeProviderProps) => (
  <WireframeAnnotationContext.Provider value={api}>
    {children}
  </WireframeAnnotationContext.Provider>
);
