/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */

import { ComponentType, ReactNode } from "react";
import { getWireframeComponent, updateWireframeComponent } from "./utils";

type APIOptions = {
  updater: (components: WireFrameComponents) => void;
  highlightNote?: (component?: WireFrameComponent) => void;
}

export type WireFrameComponentOptions = {
  title: ReactNode;
  description: ReactNode;
}

export type WireFrameComponent = {
  id: number;
  Component: ComponentType<any>;
  count: number;
  options: WireFrameComponentOptions;
}

export type WireFrameComponents = WireFrameComponent[];

type OpenCallback = (isOpen: boolean) => void;

export type WireFrameAnnotationAPI = {
  setOptions: (options: APIOptions) => APIOptions;
  getComponents: () => WireFrameComponents;
  register: (Component: ComponentType<any>, options: WireFrameComponentOptions) => WireFrameComponent;
  unregister: (Component: ComponentType<any>) => void;
  highlightNote: (Component: ComponentType<any> | undefined) => void;
  setOpen: (isOpen: boolean) => boolean;
  onOpen: (cb: OpenCallback) => {unregister: () => void};
  isOpen: () => boolean;
}

export function API(defaultOptions?: APIOptions): WireFrameAnnotationAPI {
  let components: WireFrameComponents = [];
  let apiOptions: APIOptions = defaultOptions || {} as APIOptions;

  let openCallbacks: OpenCallback[] = [];
  let isOpen = false;

  return {
    setOptions: (options) => {
      apiOptions = options;
      return apiOptions;
    },
    getComponents: () => components,
    register: (Component, options) => {
      const component = getWireframeComponent(components, Component);

      if (component) {
        const updatedComponent = {
          ...component,
          count: component.count + 1,
        };

        components = updateWireframeComponent(components, component, updatedComponent);

        /* istanbul ignore else */
        if (apiOptions.updater) {
          apiOptions.updater(components);
        }

        return updatedComponent;
      }

      const newComponent = {
        id: components.length + 1,
        Component,
        count: 1,
        options,
      };

      components = [...components, newComponent];

      if (apiOptions.updater) {
        apiOptions.updater(components);
      }

      return newComponent;
    },
    unregister: (Component) => {
      const component = getWireframeComponent(components, Component);

      if (component) {
        if (component.count > 1) {
          const updatedComponent = {
            ...component,
            count: component.count - 1,
          };

          components = updateWireframeComponent(components, component, updatedComponent);
        } else {
          components = components.filter(c => c !== component);
        }

        if (apiOptions.updater) {
          apiOptions.updater(components);
        }
      }
    },
    highlightNote: Component => apiOptions && apiOptions.highlightNote && apiOptions.highlightNote(getWireframeComponent(components, Component)),
    setOpen: (open) => {
      if (open !== isOpen) {
        isOpen = open;

        openCallbacks.forEach(cb => cb(isOpen));
      }

      return isOpen;
    },
    onOpen: (cb) => {
      openCallbacks = [...openCallbacks, cb];

      return {
        unregister: () => {
          openCallbacks = openCallbacks.filter(c => c !== cb);
        },
      };
    },
    isOpen: () => isOpen,
  };
}
