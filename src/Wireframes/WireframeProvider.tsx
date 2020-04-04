/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */

import React, {
  createContext, ReactNode,
} from "react";

import { WireframeAnnotation, WireframeAnnotationAPI } from "./api";

export const WireframeAnnotationContext = createContext<WireframeAnnotationAPI | undefined>(undefined);
export const WireframeAnnotationComponentContext = createContext<WireframeAnnotation | undefined>(undefined);

type WireframeProviderProps = {
  children: ReactNode;
  api: WireframeAnnotationAPI;
}

export const WireframeProvider = ({ children, api }: WireframeProviderProps) => (
  <WireframeAnnotationContext.Provider value={api}>
    {children}
  </WireframeAnnotationContext.Provider>
);
