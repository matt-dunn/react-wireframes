/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */

import React, {
  createContext, ReactNode, useContext, useMemo,
} from "react";

import { WireframeAnnotationAPI, withWireframeAnnotationProps } from "./api";

export const WireframeAnnotationContext = createContext<WireframeAnnotationAPI | undefined>(undefined);

type WireframeProviderProps = {
  children: ReactNode;
  api: WireframeAnnotationAPI;
}

export const WireframeProvider = ({ children, api, annotationId }: WireframeProviderProps & withWireframeAnnotationProps) => {
  const parentApi = useContext(WireframeAnnotationContext);

  useMemo(() => {
    if (parentApi && annotationId) {
      api.setParentReference({ api: parentApi, id: annotationId });
    }
  }, [api, parentApi, annotationId]);

  return (
    <WireframeAnnotationContext.Provider value={api}>
      {children}
    </WireframeAnnotationContext.Provider>
  );
};
