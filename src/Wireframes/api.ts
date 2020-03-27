/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */

import { ComponentType, ReactNode } from "react";

import { getWireframeAnnotation, updateWireframeAnnotation } from "./utils";

type APIOptions = {
  updater: (annotations: WireFrameAnnotations) => void;
  highlightNote?: (annotation?: WireFrameAnnotation) => void;
}

export type WireFrameAnnotationOptions = {
  title: ReactNode;
  description: ReactNode;
}

export type WireFrameAnnotation = {
  id: number;
  Component: ComponentType<any>;
  count: number;
  options: WireFrameAnnotationOptions;
}

export type WireFrameAnnotations = WireFrameAnnotation[];

type OpenCallback = (isOpen: boolean) => void;

export type WireFrameAnnotationAPI = {
  setOptions: (options: APIOptions) => APIOptions;
  getAnnotations: () => WireFrameAnnotations;
  register: (Component: ComponentType<any>, options: WireFrameAnnotationOptions) => WireFrameAnnotation;
  unregister: (Component: ComponentType<any>) => void;
  highlightNote: (Component: ComponentType<any> | undefined) => void;
  setOpen: (isOpen: boolean) => boolean;
  onOpen: (cb: OpenCallback) => {unregister: () => void};
  isOpen: () => boolean;
}

export function API(defaultOptions?: APIOptions): WireFrameAnnotationAPI {
  let annotations: WireFrameAnnotations = [];
  let apiOptions: APIOptions = defaultOptions || {} as APIOptions;

  let openCallbacks: OpenCallback[] = [];
  let isOpen = false;

  return {
    setOptions: (options) => {
      apiOptions = options;
      return apiOptions;
    },
    getAnnotations: () => annotations,
    register: (Component, options) => {
      const annotation = getWireframeAnnotation(annotations, Component);

      if (annotation) {
        const updatedAnnotation = {
          ...annotation,
          count: annotation.count + 1,
        };

        annotations = updateWireframeAnnotation(annotations, annotation, updatedAnnotation);

        /* istanbul ignore else */
        if (apiOptions.updater) {
          apiOptions.updater(annotations);
        }

        return updatedAnnotation;
      }

      const newAnnotation = {
        id: annotations.length + 1,
        Component,
        count: 1,
        options,
      };

      annotations = [...annotations, newAnnotation];

      if (apiOptions.updater) {
        apiOptions.updater(annotations);
      }

      return newAnnotation;
    },
    unregister: (Component) => {
      const annotation = getWireframeAnnotation(annotations, Component);

      if (annotation) {
        if (annotation.count > 1) {
          annotations = updateWireframeAnnotation(annotations, annotation, {
            ...annotation,
            count: annotation.count - 1,
          });
        } else {
          annotations = annotations.filter(c => c !== annotation);
        }

        if (apiOptions.updater) {
          apiOptions.updater(annotations);
        }
      }
    },
    highlightNote: Component => apiOptions && apiOptions.highlightNote && apiOptions.highlightNote(getWireframeAnnotation(annotations, Component)),
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
