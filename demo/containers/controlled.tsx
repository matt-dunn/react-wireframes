import React from "react";
import styled from "@emotion/styled";

import {
  WireframeContainer, withWireframeAnnotation,
} from "src/Wireframes";

import { useLocalStorage } from "src/useLocalStorage";

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

export const WAHeader = withWireframeAnnotation({
  title: "Header",
  description: "Header description. Morbi tempor libero id accumsan sodales. Etiam maximus convallis faucibus. Nunc hendrerit sit amet ante in lobortis. Aliquam feugiat nibh sit amet nunc varius laoreet. Aliquam pharetra odio mi, sed convallis massa sagittis at. Nullam nibh tortor, commodo ac risus vitae, venenatis lobortis libero.",
})(Section);

export const WAFooter = withWireframeAnnotation({
  title: "Footer",
  description: "Footer description. Morbi tempor libero id accumsan sodales. Etiam maximus convallis faucibus. Nunc hendrerit sit amet ante in lobortis. Aliquam feugiat nibh sit amet nunc varius laoreet. Aliquam pharetra odio mi, sed convallis massa sagittis at. Nullam nibh tortor, commodo ac risus vitae, venenatis lobortis libero.",
})(Section);

export const WASection1 = withWireframeAnnotation({
  title: "Component 1",
  description: "Component 1 description. Morbi tempor libero id accumsan sodales. Etiam maximus convallis faucibus. Nunc hendrerit sit amet ante in lobortis. Aliquam feugiat nibh sit amet nunc varius laoreet. Aliquam pharetra odio mi, sed convallis massa sagittis at. Nullam nibh tortor, commodo ac risus vitae, venenatis lobortis libero.",
})(SectionLarge);

export const WASection2 = withWireframeAnnotation({
  title: "Component 2",
  description: "Component 2 description. Morbi tempor libero id accumsan sodales. Etiam maximus convallis faucibus. Nunc hendrerit sit amet ante in lobortis. Aliquam feugiat nibh sit amet nunc varius laoreet. Aliquam pharetra odio mi, sed convallis massa sagittis at. Nullam nibh tortor, commodo ac risus vitae, venenatis lobortis libero.",
})(SectionLarge);

export const WASection3 = withWireframeAnnotation({
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
})(Section);

export const WASection4 = withWireframeAnnotation({
  title: "Component 4",
  description: "Component 4 description. Morbi tempor libero id accumsan sodales. Etiam maximus convallis faucibus. Nunc hendrerit sit amet ante in lobortis. Aliquam feugiat nibh sit amet nunc varius laoreet. Aliquam pharetra odio mi, sed convallis massa sagittis at. Nullam nibh tortor, commodo ac risus vitae, venenatis lobortis libero.",
})(Section);

export const WASection5 = withWireframeAnnotation({
  title: "Component 5",
  description: "Component 5 description. Morbi tempor libero id accumsan sodales. Etiam maximus convallis faucibus. Nunc hendrerit sit amet ante in lobortis. Aliquam feugiat nibh sit amet nunc varius laoreet. Aliquam pharetra odio mi, sed convallis massa sagittis at. Nullam nibh tortor, commodo ac risus vitae, venenatis lobortis libero.",
})(Section);

const Options = styled.div`
  border-right: 2px solid #ccc;
  border-bottom: 2px solid #ccc;
  border-radius: 0 0 0.5rem 0;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.5);
  width: fit-content;
  
  button {
    border: 1px solid #ccc;
    background-color: #fafafa;
    margin-right: 0.5rem;
    border-radius: 0.35rem;
  }
`;

export const Controlled = () => {
  const [open, setOpen] = useLocalStorage("open", true);

  return (
    <div>
      <Options>
        <p>
          {open ? "Annotations open" : "Annotations closed"}
        </p>
        <button
          type="button"
          onClick={() => setOpen(true)}
          disabled={open}
        >
          Open
        </button>
        <button
          type="button"
          onClick={() => setOpen(false)}
          disabled={!open}
        >
          Close
        </button>
      </Options>
      <WireframeContainer
        className="container"
        onToggleOpen={setOpen}
        open={open}
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
    </div>
  );
};
