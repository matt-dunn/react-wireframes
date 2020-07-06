/** !
 * Copyright (c) 2019, Matt Dunn
 *
 * @author Matt Dunn
 */

import { FC } from "react";

import { API, WireframeAnnotationAPI } from "../api";

describe("Wireframe: API", () => {
  let api: WireframeAnnotationAPI;
  let MockedComponent: FC<any>;
  let updater: any;
  let highlightNote: any;

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
    it("should call updater when a component is registered", () => {
      const annotation = api.register(MockedComponent, {
        title: "Test component",
        description: "Test description",
      });

      expect(updater).toHaveBeenCalledWith([annotation]);

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

      expect(api.getAnnotations().length).toEqual(1);

      expect(api.getAnnotations()[0]).toMatchObject({
        count: 1,
      });

      api.unregister(MockedComponent);

      expect(api.getAnnotations().length).toEqual(0);
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

      expect(api.getAnnotations().length).toEqual(1);

      expect(api.getAnnotations()[0]).toMatchObject({
        count: 2,
      });

      api.unregister(MockedComponent);

      expect(api.getAnnotations()[0]).toMatchObject({
        count: 1,
      });

      expect(api.getAnnotations().length).toEqual(1);

      api.unregister(MockedComponent);

      expect(api.getAnnotations().length).toEqual(0);
    });

    it("should not unregister an invalid component", () => {
      api.register(MockedComponent, {
        title: "Test component",
        description: "Test description",
      });

      expect(api.getAnnotations().length).toEqual(1);

      expect(api.getAnnotations()[0]).toMatchObject({
        count: 1,
      });

      api.unregister((() => null) as FC<any>);

      expect(api.getAnnotations().length).toEqual(1);

      expect(api.getAnnotations()[0]).toMatchObject({
        count: 1,
      });
    });

    it("should call updater when a component is unregistered", () => {
      const annotation = api.register(MockedComponent, {
        title: "Test component",
        description: "Test description",
      });

      api.unregister(MockedComponent);

      expect(updater).toHaveBeenCalledWith([annotation]);
    });
  });

  describe("highlightNote", () => {
    it("should call highlight callback with correct wireframe annotation", () => {
      const annotation = api.register(MockedComponent, {
        title: "Test component",
        description: "Test description",
      });

      api.highlightNote(MockedComponent);

      expect(highlightNote).toHaveBeenCalledWith(annotation);
    });

    it("should not call highlight callback with unregistered annotation", () => {
      api.register(MockedComponent, {
        title: "Test component",
        description: "Test description",
      });

      api.highlightNote((() => null) as FC<any>);

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

    it("should set parent reference", () => {
      api.setParentReference({
        id: 1,
        api,
      });

      expect(api.getParentReference()).toEqual({
        id: 1,
        api,
      });
    });
  });
});
