import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const Main = styled.main`
  max-width: 55rem;
  margin: 5rem auto;
  padding: 2rem;
  
  > header {
    h1 {
      display: flex;
      
      code {
        flex-grow: 1;
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
    background-color: #f5f5f5;
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

export const Home = () => (
  <Main>
    <header>
      <h1>
        <code>@matt-dunn/react-wireframes</code>
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
        <NavLink to="/nested/">
          <header>
            <h1>Nested containers</h1>
          </header>
          <p>
            Example with nested containers and identifier hierarchy.
          </p>
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/controlled/">
          <header>
            <h1>Controlled container</h1>
          </header>
          <p>
            Example with controlled open / close annotations state.
          </p>
        </NavLink>
      </ListItem>
    </List>
  </Main>
);
