import React from 'react';
import { addDecorator } from '@storybook/react';

import ErrorBoundary from "src/ErrorBoundary/ErrorBoundary";

import "bootstrap/dist/css/bootstrap.min.css";

const AppError = ({ error }: {error: Error}) => (
  <>
    <h1>An error occurred</h1>
    <p>
      DEBUG:
      {error.message}
    </p>
  </>
);

addDecorator(story => (
  <ErrorBoundary
    ErrorComponent={AppError}
  >
    {story()}
  </ErrorBoundary>
));
