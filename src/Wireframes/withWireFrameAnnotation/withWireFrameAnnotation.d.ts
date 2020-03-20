/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */
import React, { ComponentType, ReactNode } from "react";
import { WireFrameComponentOptions } from "../api";
declare type WireFrameAnnotationProps = {
    className?: string;
    children?: ReactNode;
};
export declare function withWireFrameAnnotation<P extends object>(WrappedComponent: ComponentType<P> | string, options: WireFrameComponentOptions): {
    ({ className, ...props }: P & WireFrameAnnotationProps): JSX.Element;
    Component: React.NamedExoticComponent<P>;
};
export {};
