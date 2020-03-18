/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */
import React, { ReactNode } from "react";
declare type WireFrameProviderProps = {
    children: ReactNode;
    className?: string;
    defaultOpen?: boolean;
};
export declare const WireFrameAnnotationsToggle: import("@emotion/styled-base").StyledComponent<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    open: boolean;
}, object>;
/**
 * Use the WireFrameContainer at the top of your component tree...
 * */
export declare const WireFrameContainer: {
    ({ children, className, defaultOpen }: WireFrameProviderProps): JSX.Element;
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
            defaultOpen: {
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
