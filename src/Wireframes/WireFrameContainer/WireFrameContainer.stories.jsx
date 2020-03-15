import React from "react";
import styled from "@emotion/styled";

import { withWireFrameAnnotation, WireFrameContainer, WireFrameProvider } from "./index";
import { API } from "./api";

export default {
  title: "@matt-dunn/react-wireframes/WireFrameContainer",
  parameters: {
    component: WireFrameContainer,
    componentSubtitle: "Annotate wireframe component",
  },
};

const Main = styled.div`
  margin: 10rem;
`;

const Section = styled.div`
  border-radius: 0.5rem;
  padding: 2rem;
  margin: 0 0 1rem 0;
  background-color: #f0f0f0;
`;

const SectionLarge = styled(Section)`
  min-height: 14rem;
`;

const WAHeader = withWireFrameAnnotation(Section, {
  title: "Header",
  description: "Header description. Morbi tempor libero id accumsan sodales. Etiam maximus convallis faucibus. Nunc hendrerit sit amet ante in lobortis. Aliquam feugiat nibh sit amet nunc varius laoreet. Aliquam pharetra odio mi, sed convallis massa sagittis at. Nullam nibh tortor, commodo ac risus vitae, venenatis lobortis libero.",
});

const WAFooter = withWireFrameAnnotation(Section, {
  title: "Footer",
  description: "Footer description. Morbi tempor libero id accumsan sodales. Etiam maximus convallis faucibus. Nunc hendrerit sit amet ante in lobortis. Aliquam feugiat nibh sit amet nunc varius laoreet. Aliquam pharetra odio mi, sed convallis massa sagittis at. Nullam nibh tortor, commodo ac risus vitae, venenatis lobortis libero.",
});

const WASection1 = withWireFrameAnnotation(SectionLarge, {
  title: "Component 1",
  description: "Component 1 description. Morbi tempor libero id accumsan sodales. Etiam maximus convallis faucibus. Nunc hendrerit sit amet ante in lobortis. Aliquam feugiat nibh sit amet nunc varius laoreet. Aliquam pharetra odio mi, sed convallis massa sagittis at. Nullam nibh tortor, commodo ac risus vitae, venenatis lobortis libero.",
});

const WASection2 = withWireFrameAnnotation(SectionLarge, {
  title: "Component 2",
  description: "Component 2 description. Morbi tempor libero id accumsan sodales. Etiam maximus convallis faucibus. Nunc hendrerit sit amet ante in lobortis. Aliquam feugiat nibh sit amet nunc varius laoreet. Aliquam pharetra odio mi, sed convallis massa sagittis at. Nullam nibh tortor, commodo ac risus vitae, venenatis lobortis libero.",
});

const WASection3 = withWireFrameAnnotation(Section, {
  title: "Component 3",
  description: "Component 3 description. Morbi tempor libero id accumsan sodales. Etiam maximus convallis faucibus. Nunc hendrerit sit amet ante in lobortis. Aliquam feugiat nibh sit amet nunc varius laoreet. Aliquam pharetra odio mi, sed convallis massa sagittis at. Nullam nibh tortor, commodo ac risus vitae, venenatis lobortis libero.",
});

const WASection4 = withWireFrameAnnotation(Section, {
  title: "Component 4",
  description: "Component 4 description. Morbi tempor libero id accumsan sodales. Etiam maximus convallis faucibus. Nunc hendrerit sit amet ante in lobortis. Aliquam feugiat nibh sit amet nunc varius laoreet. Aliquam pharetra odio mi, sed convallis massa sagittis at. Nullam nibh tortor, commodo ac risus vitae, venenatis lobortis libero.",
});

const WASection5 = withWireFrameAnnotation(Section, {
  title: "Component 5",
  description: "Component 5 description. Morbi tempor libero id accumsan sodales. Etiam maximus convallis faucibus. Nunc hendrerit sit amet ante in lobortis. Aliquam feugiat nibh sit amet nunc varius laoreet. Aliquam pharetra odio mi, sed convallis massa sagittis at. Nullam nibh tortor, commodo ac risus vitae, venenatis lobortis libero.",
});

const wireframeAPIGrid = API();

export const GridExample = () => (
  <WireFrameProvider api={wireframeAPIGrid}>
    <WireFrameContainer
      className="container"
      // defaultOpen={false}
    >
      <Main>
        <div className="row">
          <div className="col">
            <WAHeader>Header</WAHeader>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <WASection1>Component 1</WASection1>
          </div>
          <div className="col-6">
            <WASection2>Component 2</WASection2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <WASection3>Component 3</WASection3>
          </div>
          <div className="col-6">
            <WASection4>Component 4</WASection4>
          </div>
          <div className="col">
            <WASection5>Component 5</WASection5>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <WAFooter>Footer</WAFooter>
          </div>
        </div>
      </Main>
    </WireFrameContainer>
  </WireFrameProvider>
);

const wireframeAPISimple = API();

export const SimpleExample = () => (
  <WireFrameProvider api={wireframeAPISimple}>
    <WireFrameContainer
      className="container"
      // defaultOpen={false}
    >
      <Main>
        <div className="row">
          <div className="col">
            <WASection1>Component 1</WASection1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <WASection3>Component 3</WASection3>
          </div>
          <div className="col">
            <WASection5>Component 5</WASection5>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <WASection3>Component 3</WASection3>
          </div>
        </div>
      </Main>
    </WireFrameContainer>
  </WireFrameProvider>
);
