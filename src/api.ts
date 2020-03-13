/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */

import { ComponentType, ReactNode } from "react";
import { remove } from "lodash";

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

export const API = function API(defaultOptions?: APIOptions): WireFrameAnnotationAPI {
  let components: WireFrameComponents = [];
  let apiOptions: APIOptions = defaultOptions || {} as APIOptions;

  let openCallbacks: OpenCallback[] = [];
  let isOpen = false;

  const getComponent = (Component: ComponentType<any> | undefined): WireFrameComponent | undefined => Component && components.find(c => c.Component === Component);

  return {
    setOptions: (options) => {
      apiOptions = options;
      return apiOptions;
    },
    getComponents: () => components,
    register: (Component, options) => {
      const component = getComponent(Component);

      if (component) {
        component.count += 1;

        if (apiOptions.updater) {
          apiOptions.updater(components);
        }

        return component;
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
      const component = getComponent(Component);

      if (component) {
        component.count -= 1;

        if (component.count === 0) {
          components = remove(components, c => c.Component !== Component);
        }
      }

      if (apiOptions.updater) {
        apiOptions.updater(components);
      }
    },
    highlightNote: Component => apiOptions && apiOptions.highlightNote && apiOptions.highlightNote(getComponent(Component)),
    setOpen: (open) => {
      isOpen = open;
      openCallbacks.forEach(cb => cb(isOpen));
      return isOpen;
    },
    onOpen: (cb) => {
      openCallbacks = [...openCallbacks, cb];
      return {
        unregister: () => {
          openCallbacks = remove(openCallbacks, c => c !== cb);
        },
      };
    },
    isOpen: () => isOpen,
  };
};
