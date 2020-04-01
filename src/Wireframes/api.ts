/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */

import { ComponentType, ReactNode } from "react";

import { getWireframeAnnotation, updateWireframeAnnotation } from "./utils";

type APIOptions = {
  updater: (annotations: WireframeAnnotations) => void;
  highlightNote?: (annotation?: WireframeAnnotation) => void;
}

export type WireframeAnnotationOptions = {
  title: ReactNode;
  description: ReactNode;
}

export type WireframeAnnotation = {
  id: number;
  Component: ComponentType<any>;
  count: number;
  options: WireframeAnnotationOptions;
}

export type WireframeAnnotations = WireframeAnnotation[];

type OpenCallback = (isOpen: boolean) => void;

export type WireframeAnnotationAPI = {
  setOptions: (options: APIOptions) => APIOptions;
  getAnnotations: () => WireframeAnnotations;
  register: (Component: ComponentType<any>, options: WireframeAnnotationOptions) => WireframeAnnotation;
  unregister: (Component: ComponentType<any>) => void;
  highlightNote: (Component: ComponentType<any> | undefined) => void;
  setOpen: (isOpen: boolean) => boolean;
  onOpen: (cb: OpenCallback) => {unregister: () => void};
  isOpen: () => boolean;
  setParentReference: (id?: number) => void;
  getParentReference: () => number | undefined;
}

export type withWireframeAnnotationProps = {
  annotationId?: number;
}

export function API(defaultOptions?: APIOptions): WireframeAnnotationAPI {
  let annotations: WireframeAnnotations = [];
  let apiOptions: APIOptions = defaultOptions || {} as APIOptions;
  let parentReference: number | undefined;

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
    setParentReference: (id) => {
      parentReference = id;
    },
    getParentReference: () => parentReference,
  };
}
