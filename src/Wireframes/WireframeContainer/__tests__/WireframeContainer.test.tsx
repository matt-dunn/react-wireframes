/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */

import React, { FC, ReactElement } from "react";
import { mount, shallow } from "enzyme";
import { act } from "react-dom/test-utils";

import { WireframeProvider } from "../../context";
import { API, WireframeAnnotationAPI } from "../../api";

import {
  WireframeContainer as Component, WireframeAnnotationsToggle, WireframeAnnotationsClose,
} from "../WireframeContainer";

jest.useFakeTimers();

describe("Wireframe: WireframeContainer", () => {
  let api: WireframeAnnotationAPI;
  let MockedComponent1: FC<any>;
  let MockedComponent2: FC<any>;
  let Fragment: ReactElement;
  let ComponentTree: ReactElement;
  let onHighlightAnnotation: any;

  beforeEach(() => {
    api = API();

    MockedComponent1 = jest.fn(() => <div>Mock component 1</div>);
    MockedComponent2 = jest.fn();

    onHighlightAnnotation = jest.fn();

    ComponentTree = (
      <Component
        defaultOpen={false}
        onHighlightAnnotation={onHighlightAnnotation}
      >
        <div>Child component 1</div>
        <div>Child component 2</div>
      </Component>
    );

    Fragment = (
      <WireframeProvider api={api}>
        {ComponentTree}
      </WireframeProvider>
    );
  });

  it("should render children with no wireframe components", () => {
    const wrapper = mount(Fragment);

    expect(wrapper).toMatchSnapshot();
  });

  it("should default to open", () => {
    const wrapper = mount(
      <WireframeProvider api={api}>
        <Component>
          <div>Child component 1</div>
          <div>Child component 2</div>
        </Component>
      </WireframeProvider>,
    );

    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find(Component).find("div").at(0).hasClass("open")).toEqual(true);
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

    wrapper.find(WireframeAnnotationsToggle).simulate("click");

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
    wrapper.find(WireframeAnnotationsToggle).simulate("click");

    // Toggle close
    wrapper.find(WireframeAnnotationsToggle).simulate("click");

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    wrapper.update();

    expect(wrapper).toMatchSnapshot();
  });

  it("should render children with annotation options but no wireframe components when close option is used", () => {
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
    wrapper.find(WireframeAnnotationsToggle).simulate("click");

    wrapper.find(WireframeAnnotationsClose).simulate("click");

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
    wrapper.find(WireframeAnnotationsToggle).simulate("click");

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

  it("should throw exception if api is not provided", () => {
    expect(() => {
      shallow(ComponentTree);
    }).toThrow(TypeError);
  });

  it("should highlight on hover", () => {
    const app = document.createElement("div");
    document.body.appendChild(app);
    const wrapper = mount(Fragment, { attachTo: app });

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

    // Toggle open
    wrapper.find(WireframeAnnotationsToggle).simulate("click");

    act(() => {
      api.highlightNote(MockedComponent1);
    });

    expect(onHighlightAnnotation).toBeCalledWith(
      api.getAnnotations()[0],
      document.querySelectorAll("[data-annotation-id]")[0],
    );

    act(() => {
      api.highlightNote(MockedComponent2);
    });

    expect(onHighlightAnnotation).toBeCalledWith(
      api.getAnnotations()[1],
      document.querySelectorAll("[data-annotation-id]")[1],
    );

    wrapper.unmount();
  });
});
