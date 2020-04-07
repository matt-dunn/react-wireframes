import React, { useEffect } from "react";
import { mount } from "enzyme";
import { act } from "react-dom/test-utils";

import { useLocalStorage } from "../useLocalStorage";

describe("useLocalStorage", () => {
  let getItem: any;
  let setItem: any;
  let updaterMock: any;
  let Mock: React.FC<any>;

  beforeEach(() => {
    getItem = jest.spyOn(Storage.prototype, "getItem");
    setItem = jest.spyOn(Storage.prototype, "setItem");
    updaterMock = jest.fn();

    // eslint-disable-next-line react/display-name
    Mock = ({ updateValue, updater }: any) => {
      const [value, setValue] = useLocalStorage("test", updateValue);

      useEffect(() => {
        setValue(updateValue);
      }, [setValue, updateValue]);

      useEffect(() => {
        updater(value);
      }, [updater, value]);

      return <div>{value}</div>;
    };
  });

  it("should get initial value if no storage value", () => {
    const wrapper = mount(<Mock updateValue={1} updater={updaterMock} />);

    expect(updaterMock).nthCalledWith(1, 1);

    expect(getItem).lastCalledWith("test");
    expect(updaterMock).lastCalledWith(1);

    act(() => {
      wrapper.setProps({
        updateValue: 123,
      });
    });

    expect(setItem).lastCalledWith("test", "123");
    expect(updaterMock).lastCalledWith(123);
  });

  it("should get storage value", () => {
    localStorage.setItem("test", JSON.stringify(55));

    const wrapper = mount(<Mock updateValue={1} updater={updaterMock} />);

    expect(updaterMock).nthCalledWith(1, 55);

    expect(getItem).lastCalledWith("test");
    expect(updaterMock).lastCalledWith(1);

    act(() => {
      wrapper.setProps({
        updateValue: 123,
      });
    });

    expect(setItem).lastCalledWith("test", "123");
    expect(updaterMock).lastCalledWith(123);
  });

  it("should remove storage value when undefined", () => {
    localStorage.setItem("test", JSON.stringify(55));

    const wrapper = mount(<Mock updateValue={1} updater={updaterMock} />);

    expect(updaterMock).nthCalledWith(1, 55);

    expect(getItem).lastCalledWith("test");
    expect(updaterMock).lastCalledWith(1);

    act(() => {
      wrapper.setProps({
        updateValue: undefined,
      });
    });

    expect(setItem).lastCalledWith("test", "1");
    expect(updaterMock).lastCalledWith(undefined);
  });
});
