/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */

import React from "react";
import { shallow } from "enzyme";

import { WireframeAnnotationNote as Component } from "../WireframeAnnotationNote";

describe("Wireframe: WireframeAnnotationsNote", () => {
  let MockedComponent;
  let annotation;

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
});
