import React, { Component, ElementType } from "react";

type ErrorComponentProps = {
  error: Error;
}

type ErrorBoundaryProps = {
  ErrorComponent: ElementType<ErrorComponentProps>;
}

type ErrorBoundaryState = {
  error?: Error;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = { error: undefined };
  }

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error(errorInfo);
  }

  render() {
    const { error } = this.state;
    const { children, ErrorComponent } = this.props;

    return (error && <ErrorComponent error={error} />) || children;
  }
}

export default ErrorBoundary;
