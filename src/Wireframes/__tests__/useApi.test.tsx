import React from "react";
import { mount, shallow } from "enzyme";

import { useApi } from "../useApi";
import { WireFrameProvider } from "../context";
import { WireFrameAnnotationAPI } from "../api";

const mockApi = {} as WireFrameAnnotationAPI;

type MockProps = {
  getApi?: (api: WireFrameAnnotationAPI) => void;
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
      <WireFrameProvider
        api={mockApi}
      >
        <Mock getApi={getApi} />
      </WireFrameProvider>,
    );

    expect(getApi).toBeCalledWith(mockApi);
  });

  it("should throw exception if api is not provided", () => {
    expect(() => {
      shallow(<Mock />);
    }).toThrow(TypeError);
  });
});
