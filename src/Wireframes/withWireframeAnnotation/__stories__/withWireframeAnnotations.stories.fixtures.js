import styled from "@emotion/styled";

import { withWireframeAnnotation } from "src/Wireframes";
import { API } from "../../api";

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  padding: 2rem;
  margin: 0 0 1rem 0;
  background-color: #f0f0f0;
`;

export const WASample = withWireframeAnnotation(Section, {
  title: "Header",
  description: "Header description. Morbi tempor libero id accumsan sodales. Etiam maximus convallis faucibus. Nunc hendrerit sit amet ante in lobortis. Aliquam feugiat nibh sit amet nunc varius laoreet. Aliquam pharetra odio mi, sed convallis massa sagittis at. Nullam nibh tortor, commodo ac risus vitae, venenatis lobortis libero.",
});

export const wireframeAPI = API();

export const wireframeAPIOpen = API();

wireframeAPIOpen.setOpen(true);

export const Container = styled.article`
  max-width: 25em;
`;
