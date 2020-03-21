/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */
/// <reference types="react" />
import { WireFrameComponent } from "../api";
declare type WireFrameAnnotationsNoteProps = {
    component: WireFrameComponent;
};
export declare const WireFrameAnnotationsNote: {
    ({ component }: WireFrameAnnotationsNoteProps): JSX.Element;
    displayName: string;
    __docgenInfo: {
        description: string;
        displayName: string;
        props: {
            component: {
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
