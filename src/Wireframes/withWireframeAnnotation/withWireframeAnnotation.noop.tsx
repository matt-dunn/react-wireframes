/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */

/* istanbul ignore file */
import { ComponentType } from "react";

export const withWireframeAnnotation = function withWireframeAnnotation<P>(WrappedComponent: ComponentType<P> | string) {
  return WrappedComponent;
};
