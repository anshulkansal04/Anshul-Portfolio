import React, { useRef, useState, Suspense, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import styled from "styled-components";

const StyledCanvasWrapper = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  inset: 0;
`;

// Create a fixed-size array for points - using the same size for mobile and desktop
// but will control what's visible via size property
const POINTS_COUNT = 1500;

const Stars = ({ isMobile }) => {
  const ref = useRef();
  
  // Memoize the sphere points calculation and ensure no NaN values
  const sphere = useMemo(() => {
    const array = random.inSphere(new Float32Array(POINTS_COUNT), { 
      radius: isMobile ? 0.5 : 1.0
    });
    
    // Validate data to prevent NaN values
    for (let i = 0; i < array.length; i++) {
      if (isNaN(array[i])) {
        array[i] = 0;
      }
    }
    
    return array;
  }, [isMobile]);

  // Use a reduced frame rate for animation
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 30;
      ref.current.rotation.y -= delta / 35;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#f272c8"
          size={isMobile ? 0.0005 : 0.0008}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

// Use a wrapper div with ref for visibility detection
const StyledStarsCanvas = () => {
  const wrapperRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Handle mobile detection separately
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Visibility detection
  useEffect(() => {
    const currentRef = wrapperRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    
    observer.observe(currentRef);
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <StyledCanvasWrapper ref={wrapperRef}>
      {isVisible && (
        <Canvas 
          camera={{ position: [0, 0, 1] }} 
          dpr={[1, 1.5]}
          gl={{ 
            powerPreference: "default",
            antialias: false,
            stencil: false,
            depth: false 
          }}
          performance={{ min: 0.1 }}
        >
          <Suspense fallback={null}>
            {/* Using key to force component remount when mobile state changes */}
            <Stars key={isMobile ? "mobile" : "desktop"} isMobile={isMobile} />
          </Suspense>
          <Preload all />
        </Canvas>
      )}
    </StyledCanvasWrapper>
  );
};

export default StyledStarsCanvas;
