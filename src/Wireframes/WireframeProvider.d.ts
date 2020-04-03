/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */
import React, { ReactNode } from "react";
import { WireframeAnnotationAPI, withWireframeAnnotationProps } from "./api";
export declare const WireframeAnnotationContext: React.Context<WireframeAnnotationAPI | undefined>;
declare type WireframeProviderProps = {
    children: ReactNode;
    api: WireframeAnnotationAPI;
};
export declare const WireframeProvider: {
    ({ children, api, annotationId }: WireframeProviderProps & withWireframeAnnotationProps): JSX.Element;
    displayName: string;
    __docgenInfo: {
        description: string;
        displayName: string;
        props: {
            api: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            annotationId: {
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
