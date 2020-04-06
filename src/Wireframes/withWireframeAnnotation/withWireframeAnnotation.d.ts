/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */
import React, { ReactNode } from "react";
import { WireframeAnnotationOptions } from "../api";
declare type WireframeAnnotationProps = {
    className?: string;
    children?: ReactNode;
    outline?: boolean;
    isHighlighted?: boolean;
};
export declare function withWireframeAnnotation(options: WireframeAnnotationOptions): <P extends object>(WrappedComponent: "symbol" | "object" | "article" | "style" | "title" | "clipPath" | "filter" | "mask" | "marker" | "meter" | "textarea" | "button" | "progress" | "text" | "ruby" | "table" | "small" | "sub" | "circle" | "embed" | "pre" | "caption" | "menu" | "menuitem" | "a" | "abbr" | "address" | "area" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "canvas" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "div" | "dl" | "dt" | "em" | "fieldset" | "figcaption" | "figure" | "footer" | "form" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "keygen" | "label" | "legend" | "li" | "link" | "main" | "map" | "mark" | "meta" | "nav" | "noindex" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "q" | "rp" | "rt" | "s" | "samp" | "script" | "section" | "select" | "source" | "span" | "strong" | "summary" | "sup" | "template" | "tbody" | "td" | "tfoot" | "th" | "thead" | "time" | "tr" | "track" | "u" | "ul" | "var" | "video" | "wbr" | "webview" | "svg" | "animate" | "animateMotion" | "animateTransform" | "defs" | "desc" | "ellipse" | "feBlend" | "feColorMatrix" | "feComponentTransfer" | "feComposite" | "feConvolveMatrix" | "feDiffuseLighting" | "feDisplacementMap" | "feDistantLight" | "feDropShadow" | "feFlood" | "feFuncA" | "feFuncB" | "feFuncG" | "feFuncR" | "feGaussianBlur" | "feImage" | "feMerge" | "feMergeNode" | "feMorphology" | "feOffset" | "fePointLight" | "feSpecularLighting" | "feSpotLight" | "feTile" | "feTurbulence" | "foreignObject" | "g" | "image" | "line" | "linearGradient" | "metadata" | "mpath" | "path" | "pattern" | "polygon" | "polyline" | "radialGradient" | "rect" | "stop" | "switch" | "textPath" | "tspan" | "use" | "view" | React.ComponentClass<P, any> | React.FunctionComponent<P>) => {
    ({ className, outline, isHighlighted, ...props }: P & WireframeAnnotationProps): React.ReactElement<P, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
    Component: React.NamedExoticComponent<P>;
};
export declare namespace withWireframeAnnotation {
    var displayName: string;
    var __docgenInfo: {
        description: string;
        displayName: string;
        props: {
            title: {
                defaultValue: null;
                description: string;
                name: string;
                required: boolean;
                type: {
                    name: string;
                };
            };
            description: {
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
export declare const withWireframeAnnotationInterfaceDefinition: {
    (params: {
        withWireframeAnnotation: (options: WireframeAnnotationOptions) => <P extends object>(WrappedComponent: "symbol" | "object" | "article" | "style" | "title" | "clipPath" | "filter" | "mask" | "marker" | "meter" | "textarea" | "button" | "progress" | "text" | "ruby" | "table" | "small" | "sub" | "circle" | "embed" | "pre" | "caption" | "menu" | "menuitem" | "a" | "abbr" | "address" | "area" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "canvas" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "div" | "dl" | "dt" | "em" | "fieldset" | "figcaption" | "figure" | "footer" | "form" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "keygen" | "label" | "legend" | "li" | "link" | "main" | "map" | "mark" | "meta" | "nav" | "noindex" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "q" | "rp" | "rt" | "s" | "samp" | "script" | "section" | "select" | "source" | "span" | "strong" | "summary" | "sup" | "template" | "tbody" | "td" | "tfoot" | "th" | "thead" | "time" | "tr" | "track" | "u" | "ul" | "var" | "video" | "wbr" | "webview" | "svg" | "animate" | "animateMotion" | "animateTransform" | "defs" | "desc" | "ellipse" | "feBlend" | "feColorMatrix" | "feComponentTransfer" | "feComposite" | "feConvolveMatrix" | "feDiffuseLighting" | "feDisplacementMap" | "feDistantLight" | "feDropShadow" | "feFlood" | "feFuncA" | "feFuncB" | "feFuncG" | "feFuncR" | "feGaussianBlur" | "feImage" | "feMerge" | "feMergeNode" | "feMorphology" | "feOffset" | "fePointLight" | "feSpecularLighting" | "feSpotLight" | "feTile" | "feTurbulence" | "foreignObject" | "g" | "image" | "line" | "linearGradient" | "metadata" | "mpath" | "path" | "pattern" | "polygon" | "polyline" | "radialGradient" | "rect" | "stop" | "switch" | "textPath" | "tspan" | "use" | "view" | React.ComponentClass<P, any> | React.FunctionComponent<P>) => React.ReactElement<WireframeAnnotationProps, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
    }): null;
    displayName: string;
    __docgenInfo: {
        description: string;
        displayName: string;
        props: {
            withWireframeAnnotation: {
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
export declare const WireframeAnnotationPropsInterfaceDefinition: {
    <P extends object>({ outline, isHighlighted, }: WireframeAnnotationProps): null;
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
            outline: {
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
