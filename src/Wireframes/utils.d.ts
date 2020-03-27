/// <reference types="@emotion/core" />
import { useLayoutEffect } from "react";
import { WireFrameComponent, WireFrameComponents } from "./api";
export declare const getWireframeComponent: (components: WireFrameComponents, Component: import("react").ComponentClass<any, any> | import("react").FunctionComponent<any> | undefined) => WireFrameComponent | undefined;
export declare const updateWireframeComponent: (components: WireFrameComponents, wireFrameComponent: WireFrameComponent, updatedWireFrameComponent: WireFrameComponent) => WireFrameComponents;
export declare const useIsomorphicLayoutEffect: typeof useLayoutEffect;
