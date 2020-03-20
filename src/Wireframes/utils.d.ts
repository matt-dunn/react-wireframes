/// <reference types="react" />
/// <reference types="@emotion/core" />
import { WireFrameComponent, WireFrameComponents } from ".";
export declare const getWireframeComponent: (components: WireFrameComponents, Component: import("react").ComponentClass<any, any> | import("react").FunctionComponent<any> | undefined) => WireFrameComponent | undefined;
export declare const updateWireframeComponent: (components: WireFrameComponents, wireFrameComponent: WireFrameComponent, updatedWireFrameComponent: WireFrameComponent) => WireFrameComponents;
