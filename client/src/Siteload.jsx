import React, { useEffect, useState } from "react";

const techPhrases = [
    "const developer = 'Anshul Kansal'",
    "npm install success",
  ];
export default function Loader() {
    const [isLoading, setIsLoading] = useState(true)
    const [currentPhrase, setCurrentPhrase] = useState('');
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
  
    // Handle typing animation
    useEffect(() => {
      if (!isLoading) return;
  
      if (charIndex < techPhrases[phraseIndex].length) {
        const typingTimer = setTimeout(() => {
          setCurrentPhrase(prev => prev + techPhrases[phraseIndex][charIndex]);
          setCharIndex(prev => prev + 1);
        }, 15);
  
        return () => clearTimeout(typingTimer);
      } else {
        const phraseTimer = setTimeout(() => {
          setCurrentPhrase('');
          setCharIndex(0);
          setPhraseIndex(prev => (prev + 1) % techPhrases.length);
        }, 1000);
  
        return () => clearTimeout(phraseTimer);
      }
    }, [charIndex, phraseIndex, isLoading]);

    useEffect(() => {
        // Simulate minimum loading time of 2.5 seconds
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2500)

        return () => clearTimeout(timer)
    }, [])

    if (!isLoading) return null

    return (
        <div className="loader-container">
            <div className="loader-wrapper">
                <svg
                    className="loader-initials"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* A Letter */}
                    <path
                        className="letter-stroke letter-a"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M30 80L45 20M45 20L60 80M35 55H55"
                    />
                    {/* K Letter */}
                    <path
                        className="letter-stroke letter-k"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M70 20L70 80M70 50L85 20M70 50L85 80"
                    />
                </svg>
                {/* Circular progress indicator */}
            </div>

            <div className="terminal">
                <div className="terminal-header">
                    <div className="circle red"></div>
                    <div className="circle yellow"></div>
                    <div className="circle green"></div>
                </div>
                <div className="terminal-content">
                    <span className="prompt">$ </span>
                    <span className="typing-text">{currentPhrase}</span>
                    <span className="cursor">_</span>
                </div>
            </div>
        </div>
    );
}

