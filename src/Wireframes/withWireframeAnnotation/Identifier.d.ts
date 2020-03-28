/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */
/// <reference types="react" />
import { WireframeAnnotation } from "../api";
declare type IdentifierProps = {
    annotation: WireframeAnnotation;
    show: boolean;
};
export declare const IdentifierComponent: {
    ({ annotation, show }: IdentifierProps): JSX.Element;
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
export default IdentifierComponent;
