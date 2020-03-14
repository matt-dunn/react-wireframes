import React from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";

import { WireFrameContainer, withWireFrameAnnotation } from "src/index";

import "bootstrap/dist/css/bootstrap.min.css";

const Main = styled.div`
  margin: 10rem;
`;

const Section = styled.div`
  border-radius: 0.5rem;
  padding: 2rem;
  margin: 0 0 2rem 0;
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
  title: "Section 1",
  description: "Section 1 description. Morbi tempor libero id accumsan sodales. Etiam maximus convallis faucibus. Nunc hendrerit sit amet ante in lobortis. Aliquam feugiat nibh sit amet nunc varius laoreet. Aliquam pharetra odio mi, sed convallis massa sagittis at. Nullam nibh tortor, commodo ac risus vitae, venenatis lobortis libero.",
});

const WASection2 = withWireFrameAnnotation(SectionLarge, {
  title: "Section 2",
  description: "Section 2 description. Morbi tempor libero id accumsan sodales. Etiam maximus convallis faucibus. Nunc hendrerit sit amet ante in lobortis. Aliquam feugiat nibh sit amet nunc varius laoreet. Aliquam pharetra odio mi, sed convallis massa sagittis at. Nullam nibh tortor, commodo ac risus vitae, venenatis lobortis libero.",
});

const WASection3 = withWireFrameAnnotation(Section, {
  title: "Section 3",
  description: "Section 3 description. Morbi tempor libero id accumsan sodales. Etiam maximus convallis faucibus. Nunc hendrerit sit amet ante in lobortis. Aliquam feugiat nibh sit amet nunc varius laoreet. Aliquam pharetra odio mi, sed convallis massa sagittis at. Nullam nibh tortor, commodo ac risus vitae, venenatis lobortis libero.",
});

const WASection4 = withWireFrameAnnotation(Section, {
  title: "Section 4",
  description: "Section 4 description. Morbi tempor libero id accumsan sodales. Etiam maximus convallis faucibus. Nunc hendrerit sit amet ante in lobortis. Aliquam feugiat nibh sit amet nunc varius laoreet. Aliquam pharetra odio mi, sed convallis massa sagittis at. Nullam nibh tortor, commodo ac risus vitae, venenatis lobortis libero.",
});

const WASection5 = withWireFrameAnnotation(Section, {
  title: "Section 5",
  description: "Section 5 description. Morbi tempor libero id accumsan sodales. Etiam maximus convallis faucibus. Nunc hendrerit sit amet ante in lobortis. Aliquam feugiat nibh sit amet nunc varius laoreet. Aliquam pharetra odio mi, sed convallis massa sagittis at. Nullam nibh tortor, commodo ac risus vitae, venenatis lobortis libero.",
});

const app = (
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
          <WASection1>Section 1</WASection1>
        </div>
        <div className="col-6">
          <WASection2>Section 2</WASection2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <WASection3>Section 3</WASection3>
        </div>
        <div className="col-6">
          <WASection4>Section 4</WASection4>
        </div>
        <div className="col">
          <WASection5>Section 5</WASection5>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <WAFooter>Footer</WAFooter>
        </div>
      </div>
    </Main>
  </WireFrameContainer>
);

ReactDOM.render(
  app,
  document.getElementById("app"),
);
