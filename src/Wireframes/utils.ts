import { ComponentType, useEffect, useLayoutEffect } from "react";

import { WireframeAnnotation, WireframeAnnotations } from "./api";

export const getWireframeAnnotation = (
  annotations: WireframeAnnotations,
  Component: ComponentType<any> | undefined,
): WireframeAnnotation | undefined => Component && annotations.find(c => c.Component === Component);

export const updateWireframeAnnotation = (
  annotations: WireframeAnnotations,
  wireFrameAnnotation: WireframeAnnotation,
  updatedWireframeAnnotation: WireframeAnnotation,
) => {
  const currentAnnotation = getWireframeAnnotation(annotations, wireFrameAnnotation.Component);

  if (currentAnnotation) {
    return annotations.map(annotation => (annotation === wireFrameAnnotation ? updatedWireframeAnnotation : annotation));
  }

  return annotations;
};

/* istanbul ignore next */
export const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;
