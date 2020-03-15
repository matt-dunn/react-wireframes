/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */

import { API } from "../api";

describe("Wireframe: API", () => {
  let api;
  let MockedComponent;
  let updater;
  let highlightNote;

  beforeEach(() => {
    MockedComponent = jest.fn();

    updater = jest.fn();
    highlightNote = jest.fn();

    api = API({
      updater,
      highlightNote,
    });
  });

  describe("register", () => {
    it("should register a component as a single wireframe component", () => {
      const component = api.register(MockedComponent, {
        title: "Test component",
        description: "Test description",
      });

      expect(component).toEqual({
        id: 1,
        count: 1,
        Component: MockedComponent,
        options: {
          title: "Test component",
          description: "Test description",
        },
      });

      expect(api.getComponents().length).toEqual(1);

      expect(api.getComponents()[0]).toEqual({
        id: 1,
        count: 1,
        Component: MockedComponent,
        options: {
          title: "Test component",
          description: "Test description",
        },
      });

      api.register(MockedComponent, {
        title: "Test component with different title",
        description: "Test description with different title",
      });

      expect(api.getComponents().length).toEqual(1);

      expect(api.getComponents()[0]).toEqual({
        id: 1,
        count: 2,
        Component: MockedComponent,
        options: {
          title: "Test component",
          description: "Test description",
        },
      });
    });

    it("should call updater when a component is registered", () => {
      const component = api.register(MockedComponent, {
        title: "Test component",
        description: "Test description",
      });

      expect(updater).toHaveBeenCalledWith([component]);

      api.register(MockedComponent, {
        title: "Test component",
        description: "Test description",
      });

      expect(updater).toHaveBeenCalledTimes(2);
    });
  });

  describe("unregister", () => {
    it("should unregister a component", () => {
      api.register(MockedComponent, {
        title: "Test component",
        description: "Test description",
      });

      expect(api.getComponents().length).toEqual(1);

      expect(api.getComponents()[0]).toMatchObject({
        count: 1,
      });

      api.unregister(MockedComponent);

      expect(api.getComponents().length).toEqual(0);
    });

    it("should maintain multiple instances", () => {
      api.register(MockedComponent, {
        title: "Test component",
        description: "Test description",
      });

      api.register(MockedComponent, {
        title: "Test component",
        description: "Test description",
      });

      expect(api.getComponents().length).toEqual(1);

      expect(api.getComponents()[0]).toMatchObject({
        count: 2,
      });

      api.unregister(MockedComponent);

      expect(api.getComponents()[0]).toMatchObject({
        count: 1,
      });

      expect(api.getComponents().length).toEqual(1);

      api.unregister(MockedComponent);

      expect(api.getComponents().length).toEqual(0);
    });

    it("should not unregister an invalid component", () => {
      api.register(MockedComponent, {
        title: "Test component",
        description: "Test description",
      });

      expect(api.getComponents().length).toEqual(1);

      expect(api.getComponents()[0]).toMatchObject({
        count: 1,
      });

      api.unregister(() => {
      });

      expect(api.getComponents().length).toEqual(1);

      expect(api.getComponents()[0]).toMatchObject({
        count: 1,
      });
    });

    it("should call updater when a component is unregistered", () => {
      const component = api.register(MockedComponent, {
        title: "Test component",
        description: "Test description",
      });

      api.unregister(MockedComponent);

      expect(updater).toHaveBeenCalledWith([component]);
    });
  });

  describe("highlightNote", () => {
    it("should call highlight callback with correct wireframe component", () => {
      const component = api.register(MockedComponent, {
        title: "Test component",
        description: "Test description",
      });

      api.highlightNote(MockedComponent);

      expect(highlightNote).toHaveBeenCalledWith(component);
    });

    it("should not call highlight callback with unregistered component", () => {
      api.register(MockedComponent, {
        title: "Test component",
        description: "Test description",
      });

      api.highlightNote(() => {});

      expect(highlightNote).toHaveBeenCalledWith(undefined);
    });
  });

  describe("open", () => {
    it("should call registered callbacks when open state changes", () => {
      const onOpenRegistered1 = jest.fn();
      const onOpenRegistered2 = jest.fn();

      api.onOpen(onOpenRegistered1);
      api.onOpen(onOpenRegistered2);

      expect(api.isOpen()).toBe(false);

      expect(onOpenRegistered1).not.toHaveBeenCalled();
      expect(onOpenRegistered2).not.toHaveBeenCalled();

      api.setOpen(true);

      expect(api.isOpen()).toBe(true);

      expect(onOpenRegistered1).toHaveBeenCalledWith(true);
      expect(onOpenRegistered2).toHaveBeenCalledWith(true);

      api.setOpen(false);

      expect(api.isOpen()).toBe(false);

      expect(onOpenRegistered1).toHaveBeenCalledWith(false);
      expect(onOpenRegistered2).toHaveBeenCalledWith(false);
    });

    it("should unregister open callback", () => {
      const onOpenRegistered = jest.fn();

      const onOpen = api.onOpen(onOpenRegistered);

      api.setOpen(true);

      expect(onOpenRegistered).toHaveBeenCalledWith(true);

      onOpen.unregister();

      api.setOpen(true);

      expect(onOpenRegistered).toHaveBeenCalledTimes(1);
    });
  });
});
