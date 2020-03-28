/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */
import React, { ComponentType, ReactNode } from "react";
import { WireframeAnnotationOptions } from "../api";
declare type WireframeAnnotationProps = {
    className?: string;
    children?: ReactNode;
};
export declare function withWireframeAnnotation<P extends object>(WrappedComponent: ComponentType<P> | string, options: WireframeAnnotationOptions): {
    ({ className, ...props }: P & WireframeAnnotationProps): JSX.Element;
    Component: React.NamedExoticComponent<P>;
};
export declare const withWireframeAnnotationInterfaceDefinition: {
    <P extends object>({ WrappedComponent, options }: {
        WrappedComponent: React.ComponentType<P>;
        options: WireframeAnnotationOptions;
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
