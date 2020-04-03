/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */

import React from "react";
import { mount } from "enzyme";

import { WireframeAnnotationAPI } from "../api";

import { WireframeProvider } from "../context";

describe("Wireframe: WireframeProvider", () => {
  it("should render children", () => {
    const api = {} as WireframeAnnotationAPI;

    const wrapper = mount(
      <WireframeProvider api={api}>
        <div>Child</div>
      </WireframeProvider>,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("should render children", () => {
    const api = {
      setParentReference: jest.fn(),
    } as unknown as WireframeAnnotationAPI;

    const apiInner = {
      setParentReference: jest.fn(),
    } as unknown as WireframeAnnotationAPI;

    const wrapper = mount(
      <WireframeProvider api={api}>
        <WireframeProvider api={apiInner} annotationId={12}>
          <div>Child</div>
        </WireframeProvider>
      </WireframeProvider>,
    );

    expect(wrapper).toMatchSnapshot();

    expect(api.setParentReference).not.toHaveBeenCalled();

    expect(apiInner.setParentReference).toBeCalledWith({
      id: 12,
      api,
    });
  });
});
