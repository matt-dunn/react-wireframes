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
  let annotations;

  beforeEach(() => {
    MockedComponent = jest.fn();

    annotations = [
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
        annotations={annotations}
        highlightedNote={highlightedNote}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("should render correctly with highlight", () => {
    const highlightedNote = annotations[0];

    const wrapper = shallow(
      <Component
        annotations={annotations}
        highlightedNote={highlightedNote}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
