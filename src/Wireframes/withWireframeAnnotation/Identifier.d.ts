/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */
/// <reference types="react" />
import { ParentReference, WireframeAnnotation } from "../api";
declare type IdentifierProps = {
    annotation: WireframeAnnotation;
    parentReference?: ParentReference;
    show?: boolean;
};
export declare const Identifier: {
    ({ annotation, parentReference, show }: IdentifierProps): JSX.Element;
    displayName: string;
    __docgenInfo: {
        description: string;
        displayName: string;
        props: {
            annotation: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            parentReference: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            show: {
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
