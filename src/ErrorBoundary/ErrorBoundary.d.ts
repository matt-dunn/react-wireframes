import { Component, ElementType } from "react";
declare type ErrorComponentProps = {
    error: Error;
};
declare type ErrorBoundaryProps = {
    ErrorComponent: ElementType<ErrorComponentProps>;
};
declare type ErrorBoundaryState = {
    error?: Error;
};
export declare class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps);
    static getDerivedStateFromError(error: Error): {
        error: Error;
    };
    componentDidCatch(error: Error, errorInfo: any): void;
    render(): {} | null | undefined;
}
export {};
