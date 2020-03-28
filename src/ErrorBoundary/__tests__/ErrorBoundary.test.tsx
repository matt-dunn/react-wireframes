/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */

import React from "react";
import { shallow } from "enzyme";

import { ErrorBoundary as Component } from "../ErrorBoundary";

const SimpleError = ({ error }: {error: Error}) => (
  <>
    <h1>An error occurred</h1>
    <p>
      DEBUG:
      {error.message}
    </p>
  </>
);

describe("ErrorBoundary", () => {
  it("should render correctly", () => {
    const wrapper = shallow(
      <Component
        ErrorComponent={SimpleError}
      >
        Simple
      </Component>,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("should correctly show error", () => {
    const MockComponent = () => null;

    const wrapper = shallow(
      <Component
        ErrorComponent={SimpleError}
      >
        <MockComponent />
      </Component>,
    );

    const error = new Error("Mock error");

    wrapper.find(MockComponent).simulateError(error);

    expect(wrapper).toMatchSnapshot();
  });
});
