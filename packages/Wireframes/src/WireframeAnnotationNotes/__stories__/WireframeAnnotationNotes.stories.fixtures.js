import styled from "@emotion/styled";

export const single = [
  {
    id: 1,
    count: 1,
    Component: () => {},
    options: {
      title: "Test component",
      description: "Test description",
    },
  },
];

export const multiple = [
  {
    id: 1,
    count: 1,
    Component: () => {},
    options: {
      title: "Test component",
      description: "Test description",
    },
  },
  {
    id: 2,
    count: 1,
    Component: () => {},
    options: {
      title: "Test component 2",
      description: "Test description 2",
    },
  },
];

export const Container = styled.article`
  max-width: 25em;
`;
