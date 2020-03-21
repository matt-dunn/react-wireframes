import React from 'react';
import { addDecorator } from '@storybook/react';
import styled from "@emotion/styled";
import { withA11y } from '@storybook/addon-a11y';

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

const Main = styled.main`
  margin: 2rem;
`;

addDecorator(story => (
  <ErrorBoundary
    ErrorComponent={AppError}
  >
    <Main>
      {story()}
    </Main>
  </ErrorBoundary>
));

addDecorator(withA11y);
