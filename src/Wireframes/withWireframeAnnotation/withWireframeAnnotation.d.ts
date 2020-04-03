/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */
import React, { ComponentType, ReactNode } from "react";
import { WireframeAnnotationOptions, withWireframeAnnotationProps } from "../api";
declare type WireframeAnnotationProps = {
    className?: string;
    children?: ReactNode;
    outline?: boolean;
    isHighlighted?: boolean;
};
export declare function withWireframeAnnotation<P extends object>(WrappedComponent: ComponentType<P> | string, options: WireframeAnnotationOptions): {
    ({ className, outline, isHighlighted, ...props }: P & WireframeAnnotationProps): React.ReactElement<P & withWireframeAnnotationProps, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
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
export declare const WireframeAnnotationPropsInterfaceDefinition: {
    <P extends object>({ className, outline, isHighlighted, children, }: WireframeAnnotationProps): null;
    displayName: string;
    __docgenInfo: {
        description: string;
        displayName: string;
        props: {
            className: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            outline: {
                defaultValue: {
                    value: boolean;
                };
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            isHighlighted: {
                defaultValue: {
                    value: boolean;
                };
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
