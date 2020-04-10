import { act } from "react-dom/test-utils";

import { mountHook } from "../../test/utils";

import { useLocalStorage } from "../useLocalStorage";

describe("useLocalStorage", () => {
  let getItem: any;
  let setItem: any;
  let removeItem: any;

  beforeEach(() => {
    localStorage.clear();

    getItem = jest.spyOn(Storage.prototype, "getItem");
    setItem = jest.spyOn(Storage.prototype, "setItem");
    removeItem = jest.spyOn(Storage.prototype, "removeItem");
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return undefined if no storage or initial value", () => {
    const { context } = mountHook(() => useLocalStorage("test"));

    const [value] = context.current;

    expect(getItem).toBeCalledWith("test");
    expect(setItem).not.toHaveBeenCalled();

    expect(value).toEqual(undefined);
  });

  it("should get initial number value if no storage value", () => {
    const { context } = mountHook(() => useLocalStorage("test", 123));

    const [value] = context.current;

    expect(getItem).toBeCalledWith("test");
    expect(setItem).not.toHaveBeenCalled();

    expect(value).toEqual(123);
  });

  it("should get initial boolean value if no storage value", () => {
    const { context } = mountHook(() => useLocalStorage("test", false));

    const [value] = context.current;

    expect(getItem).toBeCalledWith("test");
    expect(setItem).not.toHaveBeenCalled();

    expect(value).toEqual(false);
  });

  it("should not get initial value and get value from local storage", () => {
    localStorage.setItem("test", JSON.stringify(55));

    const { context } = mountHook(() => useLocalStorage("test", 123));

    const [value] = context.current;

    expect(getItem).toBeCalledWith("test");

    expect(value).toEqual(55);
  });

  it("should update number value", () => {
    const { context } = mountHook(() => useLocalStorage("test", 123));

    const [value, setValue] = context.current;

    expect(getItem).toBeCalledWith("test");

    expect(value).toEqual(123);

    act(() => {
      setValue(42);
    });

    const [updatedValue] = context.current;

    expect(setItem).toBeCalledWith("test", "42");
    expect(removeItem).not.toHaveBeenCalled();
    expect(updatedValue).toEqual(42);
  });

  it("should update boolean value", () => {
    const { context } = mountHook(() => useLocalStorage("test", false));

    const [value, setValue] = context.current;

    expect(getItem).toBeCalledWith("test");

    expect(value).toEqual(false);

    act(() => {
      setValue(true);
    });

    const [updatedValue] = context.current;

    expect(setItem).toBeCalledWith("test", "true");
    expect(removeItem).not.toHaveBeenCalled();
    expect(updatedValue).toEqual(true);
  });

  it("should remove value from local storage if undefined", () => {
    const { context } = mountHook(() => useLocalStorage("test", 42));

    const [value, setValue] = context.current;

    expect(getItem).toBeCalledWith("test");

    expect(value).toEqual(42);

    act(() => {
      setValue(undefined);
    });

    const [updatedValue] = context.current;

    expect(setItem).not.toHaveBeenCalled();
    expect(removeItem).toBeCalledWith("test");
    expect(updatedValue).toEqual(undefined);
  });
});
