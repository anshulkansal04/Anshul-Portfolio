import React from "react";
import styled, { ThemeProvider } from 'styled-components';
import {darkTheme} from './utils/Themes';
import Navbar from "./components/Navbar";
import './index.css';
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Education from "./components/sections/Education";
import Project from "./components/sections/Project";
import Experience from "./components/sections/Experience";
import StarCanvas from "./components/canvas/Stars";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  width: 100%;
  // height:90vh;
  overflow-x: hidden;
  position: relative;
`;

function App() {
  return <ThemeProvider theme={darkTheme}>
    <BrowserRouter>
      <Navbar />
      <Body>
        <StarCanvas />
        <div>
          <Hero />
          <Skills />
          <Education />
          <Project />
          <Experience />
        </div>
      </Body>
    </BrowserRouter>
  </ThemeProvider>
}

export default App;