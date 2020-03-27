/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */

import React from "react";
import { shallow } from "enzyme";

import { Identifier as Component } from "../Identifier";
import { WireFrameAnnotation } from "../../api";

describe("Wireframe: WireFrameAnnotationsNote", () => {
  let MockedComponent;
  let annotation: WireFrameAnnotation;

  beforeEach(() => {
    MockedComponent = jest.fn();

    annotation = {
      id: 1,
      count: 1,
      Component: MockedComponent,
      options: {
        title: "Test component",
        description: "Test description",
      },
    };
  });

  it("should render correctly", () => {
    const wrapper = shallow(
      <Component
        annotation={annotation}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("should render ID as a locale string", () => {
    const wrapper = shallow(
      <Component
        annotation={{
          ...annotation,
          id: 12345678,
        }}
      />,
    );

    expect(wrapper.text()).toBe((12345678).toLocaleString());
  });
});
