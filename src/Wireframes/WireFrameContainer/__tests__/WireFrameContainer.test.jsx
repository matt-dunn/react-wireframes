/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */

import React from "react";
import { mount } from "enzyme";
import { act } from "react-dom/test-utils";

import { WireFrameProvider } from "../../context";
import { API } from "../../api";

import { WireFrameContainer as Component, WireFrameAnnotationsToggle } from "../WireFrameContainer";

jest.useFakeTimers();

describe("Wireframe: WireFrameContainer", () => {
  let api;
  let MockedComponent1;
  let MockedComponent2;
  let Fragment;

  beforeEach(() => {
    api = API();

    MockedComponent1 = jest.fn();
    MockedComponent2 = jest.fn();

    Fragment = (
      <WireFrameProvider api={api}>
        <Component defaultOpen={false}>
          <div>Child component 1</div>
          <div>Child component 2</div>
        </Component>
      </WireFrameProvider>
    );
  });

  it("should render children with no wireframe components", () => {
    const wrapper = mount(Fragment);

    expect(wrapper).toMatchSnapshot();
  });

  it("should render children with annotation options but no wireframe components when closed", () => {
    const wrapper = mount(Fragment);

    act(() => {
      api.register(MockedComponent1, {
        title: "Test component 1",
        description: "Test description 1",
      });

      api.register(MockedComponent2, {
        title: "Test component 2",
        description: "Test description 2",
      });
    });

    wrapper.update();

    expect(wrapper).toMatchSnapshot();
  });

  it("should render children with annotation options and wireframe components when open", () => {
    const wrapper = mount(Fragment);

    act(() => {
      api.register(MockedComponent1, {
        title: "Test component 1",
        description: "Test description 1",
      });

      api.register(MockedComponent2, {
        title: "Test component 2",
        description: "Test description 2",
      });
    });

    wrapper.update();

    wrapper.find(WireFrameAnnotationsToggle).simulate("click");

    expect(wrapper).toMatchSnapshot();
  });

  it("should render children with annotation options but no wireframe components when toggle closed", () => {
    const wrapper = mount(Fragment);

    act(() => {
      api.register(MockedComponent1, {
        title: "Test component 1",
        description: "Test description 1",
      });

      api.register(MockedComponent2, {
        title: "Test component 2",
        description: "Test description 2",
      });
    });

    wrapper.update();

    // Toggle open
    wrapper.find(WireFrameAnnotationsToggle).simulate("click");

    // Toggle close
    wrapper.find(WireFrameAnnotationsToggle).simulate("click");

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    wrapper.update();

    expect(wrapper).toMatchSnapshot();
  });

  it("should highlight annotation", () => {
    const wrapper = mount(Fragment);

    act(() => {
      api.register(MockedComponent1, {
        title: "Test component 1",
        description: "Test description 1",
      });

      api.register(MockedComponent2, {
        title: "Test component 2",
        description: "Test description 2",
      });
    });

    wrapper.update();

    // Toggle open
    wrapper.find(WireFrameAnnotationsToggle).simulate("click");

    act(() => {
      api.highlightNote(MockedComponent1);
    });

    wrapper.update();

    expect(wrapper).toMatchSnapshot();

    act(() => {
      api.highlightNote(MockedComponent2);
    });

    wrapper.update();

    expect(wrapper).toMatchSnapshot();
  });
});
