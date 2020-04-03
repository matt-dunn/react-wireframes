/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */

import React, { ComponentType, ReactElement } from "react";
import { mount, shallow } from "enzyme";
import { act } from "react-dom/test-utils";

import { WireframeProvider } from "../../WireframeProvider";
import { API, WireframeAnnotationAPI } from "../../api";

import { withWireframeAnnotation } from "../withWireframeAnnotation";

describe("Wireframe: withWireframeAnnotation", () => {
  let api: WireframeAnnotationAPI;
  let Fragment: ReactElement;
  let WrappedComponent: ComponentType<any>;
  let ComponentTree: ReactElement;
  let highlightNote: any;

  beforeEach(() => {
    highlightNote = jest.fn();

    api = API({
      highlightNote,
    } as any);

    WrappedComponent = withWireframeAnnotation(() => <div>MOCK COMPONENT</div> as any, {
      title: <div>Title</div>,
      description: <div>Description.</div>,
    });

    ComponentTree = <WrappedComponent />;

    Fragment = (
      <WireframeProvider api={api}>
        {ComponentTree}
      </WireframeProvider>
    );
  });

  it("should render without identifier when closed", () => {
    const wrapper = mount(Fragment);

    const annotation = api.getAnnotations()[0];

    expect(annotation).toEqual({
      id: 1,
      count: 1,
      Component: (WrappedComponent as any).Component,
      options: {
        title: <div>Title</div>,
        description: <div>Description.</div>,
      },
    });

    expect(wrapper).toMatchSnapshot();
  });

  it("should render annotation identifier when open", () => {
    const wrapper = mount(Fragment);

    act(() => {
      api.setOpen(true);
    });

    expect(highlightNote).not.toHaveBeenCalled();

    expect(wrapper).toMatchSnapshot();
  });

  it("should highlight annotation", () => {
    const wrapper = mount(Fragment);

    act(() => {
      api.setOpen(true);
    });

    expect(highlightNote).not.toHaveBeenCalled();

    wrapper.simulate("mouseover");

    expect(highlightNote).toHaveBeenCalledWith(api.getAnnotations()[0]);

    wrapper.update();

    expect(wrapper).toMatchSnapshot();

    wrapper.simulate("mouseleave");

    expect(highlightNote).toHaveBeenCalledWith(undefined);
  });

  it("should show annotation highlighted", () => {
    const wrapper = mount(
      <WireframeProvider api={api}>
        <WrappedComponent isHighlighted />
      </WireframeProvider>,
    );

    act(() => {
      api.setOpen(true);
    });

    wrapper.update();

    expect(wrapper).toMatchSnapshot();
  });

  it("should nest providers", () => {
    const WrappedFragment = withWireframeAnnotation(WireframeProvider, {
      title: <div>Title</div>,
      description: <div>Description.</div>,
    });

    const wrapper = mount(
      <WireframeProvider api={api}>
        <WrappedFragment api={API()}>
          children
        </WrappedFragment>
      </WireframeProvider>,
    );

    act(() => {
      api.setOpen(true);
    });

    wrapper.update();

    expect(wrapper).toMatchSnapshot();
  });

  it("should unregister when unmounted", () => {
    const wrapper = mount(Fragment);

    expect(api.getAnnotations().length).toEqual(1);

    wrapper.unmount();
    expect(api.getAnnotations().length).toEqual(0);
  });

  it("should throw exception if api is not provided", () => {
    expect(() => {
      shallow(ComponentTree);
    }).toThrow(TypeError);
  });
});
