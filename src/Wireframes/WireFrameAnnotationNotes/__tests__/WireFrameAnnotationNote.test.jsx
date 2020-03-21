/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */

import React from "react";
import { shallow } from "enzyme";

import { WireFrameAnnotationsNote as Component } from "../WireFrameAnnotationNote";

describe("Wireframe: WireFrameAnnotationsNote", () => {
  let MockedComponent;
  let component;

  beforeEach(() => {
    MockedComponent = jest.fn();

    component = {
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
        component={component}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
