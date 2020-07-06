/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */

import React from "react";
import { shallow } from "enzyme";

import { WireframeAnnotation, WireframeAnnotationAPI } from "../../api";

import { Identifier as Component } from "../Identifier";

describe("Wireframe: WireframeAnnotationsNote", () => {
  let annotation: WireframeAnnotation;
  let MockedComponent;

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

  it("should render ID with nested parent ID", () => {
    const wrapper = shallow(
      <Component
        annotation={{
          ...annotation,
          id: 12,
        }}
        parentReference={{
          id: 1,
          api: {
            getParentReference: () => ({
              id: 2,
              api: {
                getParentReference: () => {},
              } as WireframeAnnotationAPI,
            }),
          } as WireframeAnnotationAPI,
        }}
      />,
    );

    expect(wrapper.text()).toBe("2.1.12");
  });
});
