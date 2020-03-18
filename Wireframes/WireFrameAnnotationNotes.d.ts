/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */
/// <reference types="react" />
import { WireFrameComponent, WireFrameComponents } from "./api";
declare type WireFrameAnnotationsNotesProps = {
    components: WireFrameComponents;
    highlightedNote?: WireFrameComponent;
};
export declare const WireFrameAnnotationsNotes: {
    ({ components, highlightedNote }: WireFrameAnnotationsNotesProps): JSX.Element;
    displayName: string;
    __docgenInfo: {
        description: string;
        displayName: string;
        props: {
            components: {
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
        };
    };
};
export {};
