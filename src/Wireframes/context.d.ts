/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */
import React, { ReactNode } from "react";
import { WireFrameAnnotationAPI } from "./api";
export declare const WireFrameAnnotationContext: React.Context<WireFrameAnnotationAPI | undefined>;
declare type WireFrameProviderProps = {
    children: ReactNode;
    api: WireFrameAnnotationAPI;
};
export declare const WireFrameProvider: {
    ({ children, api }: WireFrameProviderProps): JSX.Element;
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
        };
    };
};
export {};
