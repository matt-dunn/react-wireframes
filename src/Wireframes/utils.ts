import { ComponentType, useEffect, useLayoutEffect } from "react";

import { WireFrameComponent, WireFrameComponents } from ".";

export const getWireframeComponent = (
  components: WireFrameComponents,
  Component: ComponentType<any> | undefined,
): WireFrameComponent | undefined => Component && components.find(c => c.Component === Component);

export const updateWireframeComponent = (
  components: WireFrameComponents,
  wireFrameComponent: WireFrameComponent,
  updatedWireFrameComponent: WireFrameComponent,
) => {
  const currentComponent = getWireframeComponent(components, wireFrameComponent.Component);

  if (currentComponent) {
    return components.map(component => (component === wireFrameComponent ? updatedWireFrameComponent : component));
  }

  return components;
};

/* istanbul ignore next */
export const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;
