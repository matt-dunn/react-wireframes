/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */

import React from "react";
import { mount } from "enzyme";

import { WireframeAnnotationAPI } from "../api";

import { WireframeProvider } from "../WireframeProvider";

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
});
