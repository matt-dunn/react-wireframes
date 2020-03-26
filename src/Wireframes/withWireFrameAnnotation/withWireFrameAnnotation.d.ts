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
export declare const withWireFrameAnnotationInterfaceDefinition: {
    <P extends object>({ WrappedComponent, options }: {
        WrappedComponent: React.ComponentType<P>;
        options: WireFrameComponentOptions;
    }): null;
    displayName: string;
    __docgenInfo: {
        description: string;
        displayName: string;
        props: {
            WrappedComponent: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            options: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
        };
    };
};
export {};
