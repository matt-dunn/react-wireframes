/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */
/// <reference types="react" />
import { WireframeAnnotation, WireframeAnnotations } from "../api";
declare type WireframeAnnotationsNotesProps = {
    annotations: WireframeAnnotations;
    highlightedNote?: WireframeAnnotation;
    className?: string;
};
export declare const WireframeAnnotationsNotes: {
    ({ annotations, highlightedNote, className }: WireframeAnnotationsNotesProps): JSX.Element;
    displayName: string;
    __docgenInfo: {
        description: string;
        displayName: string;
        props: {
            annotations: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            highlightedNote: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            className: {
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
