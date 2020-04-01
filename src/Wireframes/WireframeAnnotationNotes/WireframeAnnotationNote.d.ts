/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */
/// <reference types="react" />
import { WireframeAnnotation } from "../api";
declare type WireframeAnnotationsNoteProps = {
    annotation: WireframeAnnotation;
    isHighlighted?: boolean;
};
export declare const WireframeAnnotationNote: {
    ({ annotation, isHighlighted }: WireframeAnnotationsNoteProps): JSX.Element;
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