import React from "react";
import { mount, shallow } from "enzyme";

import { useApi } from "../useApi";
import { WireframeProvider } from "../context";
import { WireframeAnnotationAPI } from "../api";

const mockApi = {
  setParentReference: () => {},
} as WireframeAnnotationAPI;

type MockProps = {
  getApi?: (api: WireframeAnnotationAPI) => void;
}

const Mock = ({ getApi }: MockProps) => {
  const api = useApi();

  if (getApi) {
    getApi(api);
  }

  return null;
};

describe("Wireframe: useApi", () => {
  it("should return api when provided", () => {
    const getApi = jest.fn();

    mount(
      <WireframeProvider
        api={mockApi}
      >
        <Mock getApi={getApi} />
      </WireframeProvider>,
    );

    expect(getApi).toBeCalledWith(mockApi);
  });

  it("should throw exception if api is not provided", () => {
    expect(() => {
      shallow(<Mock />);
    }).toThrow(TypeError);
  });
});
