import { ComponentType, useEffect, useLayoutEffect } from "react";

import { WireFrameAnnotation, WireFrameAnnotations } from "./api";

export const getWireframeAnnotation = (
  annotations: WireFrameAnnotations,
  Component: ComponentType<any> | undefined,
): WireFrameAnnotation | undefined => Component && annotations.find(c => c.Component === Component);

export const updateWireframeAnnotation = (
  annotations: WireFrameAnnotations,
  wireFrameAnnotation: WireFrameAnnotation,
  updatedWireFrameAnnotation: WireFrameAnnotation,
) => {
  const currentAnnotation = getWireframeAnnotation(annotations, wireFrameAnnotation.Component);

  if (currentAnnotation) {
    return annotations.map(annotation => (annotation === wireFrameAnnotation ? updatedWireFrameAnnotation : annotation));
  }

  return annotations;
};

/* istanbul ignore next */
export const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;
