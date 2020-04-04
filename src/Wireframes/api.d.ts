/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */
import { ComponentType, ReactNode } from "react";
declare type APIOptions = {
    updater: (annotations: WireframeAnnotations) => void;
    highlightNote?: (annotation?: WireframeAnnotation) => void;
};
export declare type WireframeAnnotationOptions = {
    title: ReactNode;
    description: ReactNode;
};
export declare type WireframeAnnotation = {
    id: number;
    Component: ComponentType<any>;
    count: number;
    options: WireframeAnnotationOptions;
};
export declare type WireframeAnnotations = WireframeAnnotation[];
declare type OpenCallback = (isOpen: boolean) => void;
export declare type ParentReference = {
    id: number;
    api: WireframeAnnotationAPI;
};
export declare type WireframeAnnotationAPI = {
    setOptions: (options: APIOptions) => APIOptions;
    getAnnotations: () => WireframeAnnotations;
    register: (Component: ComponentType<any>, options: WireframeAnnotationOptions) => WireframeAnnotation;
    unregister: (Component: ComponentType<any>) => void;
    highlightNote: (Component: ComponentType<any> | undefined) => void;
    setOpen: (isOpen: boolean) => boolean;
    onOpen: (cb: OpenCallback) => {
        unregister: () => void;
    };
    isOpen: () => boolean;
    setParentReference: (parentReference: ParentReference) => void;
    getParentReference: () => ParentReference | undefined;
};
export declare function API(defaultOptions?: APIOptions): WireframeAnnotationAPI;
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
