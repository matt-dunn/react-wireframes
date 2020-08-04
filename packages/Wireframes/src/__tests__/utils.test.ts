import { getWireframeAnnotation, updateWireframeAnnotation } from "../utils";

const MockedComponent1 = jest.fn();
const MockedComponent2 = jest.fn();

const annotations = [
  {
    id: 1,
    count: 1,
    Component: MockedComponent1,
    options: {
      title: "Test component 1",
      description: "Test description 1",
    },
  },
  {
    id: 2,
    count: 1,
    Component: MockedComponent2,
    options: {
      title: "Test component 2",
      description: "Test description 2",
    },
  },
];

describe("Wireframe: Utils", () => {
  describe("getWireframeAnnotation", () => {
    it("should return a found annotation", () => {
      expect(getWireframeAnnotation(
        annotations,
        MockedComponent1,
      )).toEqual(annotations[0]);

      expect(getWireframeAnnotation(
        annotations,
        MockedComponent2,
      )).toEqual(annotations[1]);
    });

    it("should return undefined if annotation is not found", () => {
      expect(getWireframeAnnotation(
        annotations,
        MockedComponent1,
      )).toEqual(annotations[0]);

      expect(getWireframeAnnotation(
        annotations,
        MockedComponent2,
      )).toEqual(annotations[1]);
    });
  });

  describe("updateWireframeAnnotation", () => {
    it("should update an annotation and return a new collection when found", () => {
      const updatedAnnotations = updateWireframeAnnotation(
        annotations,
        annotations[0],
        {
          ...annotations[0],
          count: 2,
        },
      );

      expect(updatedAnnotations === annotations).not.toEqual(true);

      expect(updatedAnnotations).toEqual([{
        id: 1,
        count: 2,
        Component: MockedComponent1,
        options: {
          title: "Test component 1",
          description: "Test description 1",
        },
      }, annotations[1]]);
    });
  });

  it("should not update collection when not found", () => {
    const updatedAnnotations = updateWireframeAnnotation(
      annotations,
      {} as any,
      {
        ...annotations[0],
        count: 2,
      },
    );

    expect(updatedAnnotations === annotations).toEqual(true);
  });
});
