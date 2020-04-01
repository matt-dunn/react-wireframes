/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */

import React, { createContext, ReactNode, useEffect } from "react";

import { WireframeAnnotationAPI, withWireframeAnnotationProps } from "./api";

export const WireframeAnnotationContext = createContext<WireframeAnnotationAPI | undefined>(undefined);

type WireframeProviderProps = {
  children: ReactNode;
  api: WireframeAnnotationAPI;
}

export const WireframeProvider = ({ children, api, annotationId }: WireframeProviderProps & withWireframeAnnotationProps) => {
  useEffect(() => {
    api.setParentReference(annotationId);
  }, [api, annotationId]);

  return (
    <WireframeAnnotationContext.Provider value={api}>
      {children}
    </WireframeAnnotationContext.Provider>
  );
};
