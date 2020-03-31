import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { Preview } from "@storybook/addon-docs/blocks";

import {
  API, withWireframeAnnotation, WireframeProvider, WireframeContainer,
} from "src/Wireframes";

export const Main = styled.div`
  padding: 2em 4em;
  min-height: 30em;
`;

const Section = styled.div`
  border-radius: 0.5rem;
  padding: 2rem;
  margin: 0 0 1.4rem 0;
  background-color: #f0f0f0;
`;

const SectionLarge = styled(Section)`
  min-height: 14rem;
`;

export const WAHeader = withWireframeAnnotation(Section, {
  title: "Header",
  description: "Header description. Morbi tempor libero id accumsan sodales. Etiam maximus convallis faucibus. Nunc hendrerit sit amet ante in lobortis. Aliquam feugiat nibh sit amet nunc varius laoreet. Aliquam pharetra odio mi, sed convallis massa sagittis at. Nullam nibh tortor, commodo ac risus vitae, venenatis lobortis libero.",
});

export const WAFooter = withWireframeAnnotation(Section, {
  title: "Footer",
  description: "Footer description. Morbi tempor libero id accumsan sodales. Etiam maximus convallis faucibus. Nunc hendrerit sit amet ante in lobortis. Aliquam feugiat nibh sit amet nunc varius laoreet. Aliquam pharetra odio mi, sed convallis massa sagittis at. Nullam nibh tortor, commodo ac risus vitae, venenatis lobortis libero.",
});

export const WASection1 = withWireframeAnnotation(SectionLarge, {
  title: "Component 1",
  description: "Component 1 description. Morbi tempor libero id accumsan sodales. Etiam maximus convallis faucibus. Nunc hendrerit sit amet ante in lobortis. Aliquam feugiat nibh sit amet nunc varius laoreet. Aliquam pharetra odio mi, sed convallis massa sagittis at. Nullam nibh tortor, commodo ac risus vitae, venenatis lobortis libero.",
});

export const WASection2 = withWireframeAnnotation(SectionLarge, {
  title: "Component 2",
  description: "Component 2 description. Morbi tempor libero id accumsan sodales. Etiam maximus convallis faucibus. Nunc hendrerit sit amet ante in lobortis. Aliquam feugiat nibh sit amet nunc varius laoreet. Aliquam pharetra odio mi, sed convallis massa sagittis at. Nullam nibh tortor, commodo ac risus vitae, venenatis lobortis libero.",
});

export const WASection3 = withWireframeAnnotation(Section, {
  title: "Component 3",
  description: "Component 3 description. Morbi tempor libero id accumsan sodales. Etiam maximus convallis faucibus. Nunc hendrerit sit amet ante in lobortis. Aliquam feugiat nibh sit amet nunc varius laoreet. Aliquam pharetra odio mi, sed convallis massa sagittis at. Nullam nibh tortor, commodo ac risus vitae, venenatis lobortis libero.",
});

export const WASection4 = withWireframeAnnotation(Section, {
  title: "Component 4",
  description: "Component 4 description. Morbi tempor libero id accumsan sodales. Etiam maximus convallis faucibus. Nunc hendrerit sit amet ante in lobortis. Aliquam feugiat nibh sit amet nunc varius laoreet. Aliquam pharetra odio mi, sed convallis massa sagittis at. Nullam nibh tortor, commodo ac risus vitae, venenatis lobortis libero.",
});

export const WASection5 = withWireframeAnnotation(Section, {
  title: "Component 5",
  description: "Component 5 description. Morbi tempor libero id accumsan sodales. Etiam maximus convallis faucibus. Nunc hendrerit sit amet ante in lobortis. Aliquam feugiat nibh sit amet nunc varius laoreet. Aliquam pharetra odio mi, sed convallis massa sagittis at. Nullam nibh tortor, commodo ac risus vitae, venenatis lobortis libero.",
});

export const wireframeAPIGrid = API();

export const wireframeAPISimple = API();

export const wireframeAPIEmpty = API();

export const WireframeProviderWithKnobs = ({ children, open = false }) => { // eslint-disable-line react/prop-types
  useEffect(() => {
    wireframeAPISimple.setOpen(open);
  }, [open]);

  return (
    <WireframeProvider api={wireframeAPISimple}>
      <WireframeContainer
        className="container"
        defaultOpen={open}
      >
        {children}
      </WireframeContainer>
    </WireframeProvider>
  );
};

export const PreviewContainer = styled(Preview)`
  [scale] {
    overflow: hidden;
    border: 1px solid #f5f5f5;
  }
`;
