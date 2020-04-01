import React from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";

import { ErrorBoundary } from "src/ErrorBoundary/ErrorBoundary";

import "./bootstrap.scss";

import {
  API, WireframeContainer, WireframeProvider, withWireframeAnnotation,
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

export const WAWireframeProvider = withWireframeAnnotation(WireframeProvider, {
  title: "Nested Annotations",
  description: "Morbi tempor libero id accumsan sodales. Etiam maximus convallis faucibus. Nunc hendrerit sit amet ante in lobortis. Aliquam feugiat nibh sit amet nunc varius laoreet. Aliquam pharetra odio mi, sed convallis massa sagittis at. Nullam nibh tortor, commodo ac risus vitae, venenatis lobortis libero.",
});

const WireframeContainerInner = styled(WireframeContainer)`
  margin: 25px 40px 0 40px;
`;

const wireframeAPI = API();
const wireframeAPI2 = API();

const AppError = ({ error }: {error: Error}) => (
  <>
    <h1>An error occurred</h1>
    <p>
      DEBUG:
      {error.message}
    </p>
  </>
);

const app = (
  <ErrorBoundary
    ErrorComponent={AppError}
  >
    <WireframeProvider
      api={wireframeAPI}
    >
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
              <WAWireframeProvider
                outline={false}
                api={wireframeAPI2}
              >
                <div style={{ border: "1px solid #eee", margin: "0 0 30px 0" }}>
                  <WireframeContainerInner
                    fixed={false}
                    defaultOpen={false}
                  >
                    <WAHeader>Header</WAHeader>
                    <div className="row">
                      <div className="col-6">
                        <WASection3>Component 1</WASection3>
                      </div>
                      <div className="col-6">
                        <WASection4>Component 2</WASection4>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <WAFooter>Footer</WAFooter>
                      </div>
                    </div>
                  </WireframeContainerInner>
                </div>
              </WAWireframeProvider>
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
    </WireframeProvider>
  </ErrorBoundary>
);

ReactDOM.render(
  app,
  document.getElementById("app"),
);
