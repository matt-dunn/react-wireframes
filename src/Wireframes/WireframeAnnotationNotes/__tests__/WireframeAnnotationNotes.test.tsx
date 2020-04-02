/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */

import React from "react";
import { shallow } from "enzyme";

import { WireframeAnnotations } from "../../api";

import { WireframeAnnotationNotes as Component, NoAnnotations } from "../WireframeAnnotationNotes";

describe("Wireframe: WireframeAnnotationsNotes", () => {
  let MockedComponent;
  let annotations: WireframeAnnotations;

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


  it("should display message when there are no annotations", () => {
    const wrapper = shallow(
      <Component />,
    );

    expect(wrapper.find(NoAnnotations).length).toBe(1);

    wrapper.setProps({
      annotations,
    });

    expect(wrapper.find(NoAnnotations).length).toBe(0);

    wrapper.setProps({
      annotations: [],
    });

    expect(wrapper.find(NoAnnotations).length).toBe(1);
  });
});
