import React, { useState, useEffect, lazy, Suspense } from "react";
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './utils/Themes';
import Navbar from "./components/Navbar";
import './index.css';
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/sections/Hero";
import Loader from "./Siteload";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"

// Lazy load non-critical components
const Skills = lazy(() => import("./components/sections/Skills"));
const Education = lazy(() => import("./components/sections/Education"));
const Project = lazy(() => import("./components/sections/Project"));
const Experience = lazy(() => import("./components/sections/Experience"));
const StarCanvas = lazy(() => import("./components/canvas/Stars"));
const Contact = lazy(() => import("./components/sections/Contact"));

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

// Simple fallback component
const LoadingFallback = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '200px' 
  }}>
    <div>Loading...</div>
  </div>
);

// Error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong loading this section.</div>;
    }
    return this.props.children;
  }
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Preload critical resources
    const preloadResources = async () => {
      // Import critical CSS
      await import('./index.css');
      
      // Set a shorter loading time
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    };

    preloadResources();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar />
        <Body>
          <Analytics />
          <SpeedInsights/>
          <ErrorBoundary>
            <Suspense fallback={<LoadingFallback />}>
              <StarCanvas />
            </Suspense>
          </ErrorBoundary>
          <div>
            <Hero />
            
            <ErrorBoundary>
              <Suspense fallback={<LoadingFallback />}>
                <Skills />
              </Suspense>
            </ErrorBoundary>
            
            <ErrorBoundary>
              <Suspense fallback={<LoadingFallback />}>
                <Experience />
              </Suspense>
            </ErrorBoundary>
            
            <ErrorBoundary>
              <Suspense fallback={<LoadingFallback />}>
                <Project />
              </Suspense>
            </ErrorBoundary>
            
            <ErrorBoundary>
              <Suspense fallback={<LoadingFallback />}>
                <Education />
              </Suspense>
            </ErrorBoundary>
            
            <ErrorBoundary>
              <Suspense fallback={<LoadingFallback />}>
                <Contact />
              </Suspense>
            </ErrorBoundary>
          </div>
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
