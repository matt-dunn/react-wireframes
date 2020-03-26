declare type useScrollElementIntoViewProps<T> = {
    element: HTMLElement | null;
    boundary: HTMLElement | null;
    onScrollIntoView?: (el: HTMLElement) => void;
};
export declare function useScrollElementIntoView<T extends Element>({ element, boundary, onScrollIntoView }: useScrollElementIntoViewProps<T>): void;
export declare namespace useScrollElementIntoView {
    var displayName: string;
    var __docgenInfo: {
        description: string;
        displayName: string;
        props: {
            element: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            boundary: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            onScrollIntoView: {
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
