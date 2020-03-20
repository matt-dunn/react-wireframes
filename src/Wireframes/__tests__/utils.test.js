import { getWireframeComponent, updateWireframeComponent } from "../utils";

const MockedComponent1 = jest.fn();
const MockedComponent2 = jest.fn();

const components = [
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
  describe("getWireframeComponent", () => {
    it("should return a found component", () => {
      expect(getWireframeComponent(
        components,
        MockedComponent1,
      )).toEqual(components[0]);

      expect(getWireframeComponent(
        components,
        MockedComponent2,
      )).toEqual(components[1]);
    });

    it("should return undefined if component is not found", () => {
      expect(getWireframeComponent(
        components,
        MockedComponent1,
      )).toEqual(components[0]);

      expect(getWireframeComponent(
        components,
        MockedComponent2,
      )).toEqual(components[1]);
    });
  });

  describe("updateWireframeComponent", () => {
    it("should update a component and return a new collection when found", () => {
      const updatedComponents = updateWireframeComponent(
        components,
        // {},
        components[0],
        {
          ...components[0],
          count: 2,
        },
      );

      expect(updatedComponents === components).not.toEqual(true);

      expect(updatedComponents).toEqual([{
        id: 1,
        count: 2,
        Component: MockedComponent1,
        options: {
          title: "Test component 1",
          description: "Test description 1",
        },
      }, components[1]]);
    });
  });

  it("should not update collection when not found", () => {
    const updatedComponents = updateWireframeComponent(
      components,
      {},
      {
        ...components[0],
        count: 2,
      },
    );

    expect(updatedComponents === components).toEqual(true);
  });
});
