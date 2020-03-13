/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */

import React from "react";
import { shallow } from "enzyme";

import { WireFrameAnnotationsNotes as Component } from "../WireFrameAnnotationNotes";

describe("Wireframe: WireFrameAnnotationsNotes", () => {
  let MockedComponent;
  let components;

  beforeEach(() => {
    MockedComponent = jest.fn();

    components = [
      {
        id: 1,
        count: 1,
        Component: MockedComponent,
        options: {
          title: "Test component",
          description: "Test description",
        },
      },
    ];
  });

  it("should render correctly", () => {
    const highlightedNote = undefined;

    const wrapper = shallow(
      <Component
        components={components}
        highlightedNote={highlightedNote}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("should render correctly with highlight", () => {
    const highlightedNote = components[0];

    const wrapper = shallow(
      <Component
        components={components}
        highlightedNote={highlightedNote}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
