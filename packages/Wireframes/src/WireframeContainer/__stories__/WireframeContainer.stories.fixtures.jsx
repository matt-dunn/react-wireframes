import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Preview } from "@storybook/addon-docs/blocks";

import {
  WireframeContainer,
  withWireframeAnnotation,
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
      <div className="container">
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

export const PreviewContainer = styled(Preview)`
  [scale] {
    overflow: hidden;
    border: 1px solid #f5f5f5;
  }
`;

const Options = styled.div`
  border-right: 2px solid #ccc;
  border-bottom: 2px solid #ccc;
  border-radius: 0 0 0.5rem 0;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.75);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10020;
  
  button {
    border: 1px solid #ccc;
    background-color: #fafafa;
    margin: 0.5rem;
    padding: 0.3rem 0.75rem;
    border-radius: 0.35rem;
    
    &[disabled] {
      opacity: 0.5;
    }
  }
  
  ul {
    margin: 0;
    display: flex;
  }
`;

export const Controlled = ({ className, isOpen, children }) => { // eslint-disable-line react/prop-types
  const [open, setOpen] = useState(isOpen);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen, setOpen]);

  return (
    <div>
      <Options>
        <p>
          Annotations
          {" "}
          <strong>
            {open ? "open" : "closed"}
          </strong>
        </p>
        <ul className="list-unstyled">
          <li>
            <button
              type="button"
              onClick={() => setOpen(true)}
              disabled={open}
            >
              Open
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => setOpen(false)}
              disabled={!open}
            >
              Close
            </button>
          </li>
        </ul>
      </Options>
      <WireframeContainer
        className={className}
        onToggleOpen={setOpen}
        open={open}
      >
        {children}
      </WireframeContainer>
    </div>
  );
};
