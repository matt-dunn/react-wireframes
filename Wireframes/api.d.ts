/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */
import { ComponentType, ReactNode } from "react";
declare type APIOptions = {
    updater: (components: WireFrameComponents) => void;
    highlightNote?: (component?: WireFrameComponent) => void;
};
export declare type WireFrameComponentOptions = {
    title: ReactNode;
    description: ReactNode;
};
export declare type WireFrameComponent = {
    id: number;
    Component: ComponentType<any>;
    count: number;
    options: WireFrameComponentOptions;
};
export declare type WireFrameComponents = WireFrameComponent[];
declare type OpenCallback = (isOpen: boolean) => void;
export declare type WireFrameAnnotationAPI = {
    setOptions: (options: APIOptions) => APIOptions;
    getComponents: () => WireFrameComponents;
    register: (Component: ComponentType<any>, options: WireFrameComponentOptions) => WireFrameComponent;
    unregister: (Component: ComponentType<any>) => void;
    highlightNote: (Component: ComponentType<any> | undefined) => void;
    setOpen: (isOpen: boolean) => boolean;
    onOpen: (cb: OpenCallback) => {
        unregister: () => void;
    };
    isOpen: () => boolean;
};
export declare function API(defaultOptions?: APIOptions): WireFrameAnnotationAPI;
export declare namespace API {
    var displayName: string;
    var __docgenInfo: {
        description: string;
        displayName: string;
        props: {
            updater: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            highlightNote: {
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
}
export {};
