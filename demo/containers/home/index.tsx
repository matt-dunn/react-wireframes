import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

import assetMJD from "../public/assets/mjd.png";

const Main = styled.main`
  max-width: 55rem;
  margin: 5rem auto;
  padding: 2rem;
  
  > header {
    h1 {
      display: flex;
      
      a:first-child {
        flex-grow: 1;
        text-decoration: none;
      }
    }
  }
`;

const List = styled.ul`
`;

const ListItem = styled.li`
  margin: 1rem 0;
  
  a {
    border-radius: 0.5rem;
    background-color: #f8f8f8;
    padding: 1rem;
    color: inherit;
    text-decoration: none;
    display: block;
    
    &:hover {
      background-color: #ccc;
    }
    
    h1 {
      font-size: 1.75rem
    }
  }
`;

const Footer = styled.footer`
  margin-top: 1rem;

  a {
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  
  aside {
    font-weight: 200;
  }

  h1 {
    display: flex;
    font-weight: lighter;
    margin: 0;

    &::before {
      content: " ";
      background-image: url(${assetMJD});
      background-size: cover;
      background-color: #fff;
      background-repeat: no-repeat;
      background-position: 50%;
      border-radius: 500px;
      border: 1px solid #ccc;
      overflow: hidden;
      width: 1em;
      height: 1em;
      align-self: center;
      flex-shrink: 0;
      flex-grow: 0;
      margin-right: 0.5rem;
      opacity: 0.8;
      display: block;
    }
  }
`;

export const Home = () => (
  <Main>
    <header>
      <h1>
        <a href="https://github.com/matt-dunn/react-wireframes" target="_blank" rel="noopener noreferrer">
          <code>@matt-dunn/react-wireframes</code>
        </a>
        <a href="https://badge.fury.io/js/%40matt-dunn%2Freact-wireframes" target="_blank" rel="noopener noreferrer"><img src="https://badge.fury.io/js/%40matt-dunn%2Freact-wireframes.svg" alt="npm version" height="18" /></a>
      </h1>
    </header>
    <List className="list-unstyled">
      <ListItem>
        <NavLink to="/simple/">
          <header>
            <h1>Simple</h1>
          </header>
          <p>
            Example with a single, uncontrolled container.
          </p>
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/controlled/">
          <header>
            <h1>Controlled container</h1>
          </header>
          <p>
            Example with controlled open / close annotations state and maintain active state in local storage.
          </p>
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/nested/">
          <header>
            <h1>Nested containers</h1>
          </header>
          <p>
            Example with nested containers and identifier hierarchy.
          </p>
        </NavLink>
      </ListItem>
    </List>
    <Footer>
      <a href="https://matt-dunn.github.io/" target="_blank" rel="noopener noreferrer">
        <h1>
          Matt Dunn
        </h1>

        <aside className="text-muted">
          <p>
            Senior User Interface Developer
          </p>
        </aside>
      </a>
    </Footer>
  </Main>
);
