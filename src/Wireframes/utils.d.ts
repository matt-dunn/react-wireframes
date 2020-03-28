/// <reference types="@emotion/core" />
import { useLayoutEffect } from "react";
import { WireframeAnnotation, WireframeAnnotations } from "./api";
export declare const getWireframeAnnotation: (annotations: WireframeAnnotations, Component: import("react").ComponentClass<any, any> | import("react").FunctionComponent<any> | undefined) => WireframeAnnotation | undefined;
export declare const updateWireframeAnnotation: (annotations: WireframeAnnotations, wireFrameAnnotation: WireframeAnnotation, updatedWireframeAnnotation: WireframeAnnotation) => WireframeAnnotations;
export declare const useIsomorphicLayoutEffect: typeof useLayoutEffect;
