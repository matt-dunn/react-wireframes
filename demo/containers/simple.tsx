import React from "react";
import styled from "@emotion/styled";

import {
  WireframeContainer, withWireframeAnnotation,
} from "src/Wireframes";

export const Main = styled.div`
  padding: 2em 4em;
  min-height: 30em;
`;

const SectionBase = styled.div`
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SectionSmall = styled(SectionBase)`
  padding: 1.5rem;
  margin: 0 0 1rem 0;
  background-color: #eee;
  border: 2px solid #ccc;
`;

const Section = styled(SectionBase)`
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
  description: (
    <div>
      <p>
        Component 3 description. Morbi tempor libero id accumsan sodales. Etiam maximus convallis faucibus. Nunc hendrerit sit amet ante in lobortis.
      </p>
      <div className="row">
        <div className="col-6">
          <SectionSmall>1</SectionSmall>
        </div>
        <div className="col-6">
          <SectionSmall>2</SectionSmall>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <SectionSmall>3</SectionSmall>
        </div>
      </div>
      <p>
        Aliquam feugiat nibh sit amet nunc varius laoreet. Aliquam pharetra odio mi, sed convallis massa sagittis at. Nullam nibh tortor, commodo ac risus vitae, venenatis lobortis libero.
      </p>
    </div>
  ),
});

export const WASection4 = withWireframeAnnotation(Section, {
  title: "Component 4",
  description: "Component 4 description. Morbi tempor libero id accumsan sodales. Etiam maximus convallis faucibus. Nunc hendrerit sit amet ante in lobortis. Aliquam feugiat nibh sit amet nunc varius laoreet. Aliquam pharetra odio mi, sed convallis massa sagittis at. Nullam nibh tortor, commodo ac risus vitae, venenatis lobortis libero.",
});

export const WASection5 = withWireframeAnnotation(Section, {
  title: "Component 5",
  description: "Component 5 description. Morbi tempor libero id accumsan sodales. Etiam maximus convallis faucibus. Nunc hendrerit sit amet ante in lobortis. Aliquam feugiat nibh sit amet nunc varius laoreet. Aliquam pharetra odio mi, sed convallis massa sagittis at. Nullam nibh tortor, commodo ac risus vitae, venenatis lobortis libero.",
});

export const Simple = () => (
  <WireframeContainer
    className="container"
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
        <div className="col">
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
  </WireframeContainer>
);
