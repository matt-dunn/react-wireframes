/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */

import React from "react";
import { shallow } from "enzyme";

import { IdentifierComponent as Component } from "../Identifier";

describe("Wireframe: Identifier", () => {
  it("should render correctly", () => {
    const wrapper = shallow(
      <Component
        annotation={{
          id: "123",
        }}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
