import React from "react";
import '../../index.css';
import Typewriter from "typewriter-effect";
import HeroImg from "../../images/HeroImage.jpeg";
import HeroBgAnimation from "../HeroBgAnimation";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
} from "../../utils/motion";
import StarCanvas from "../canvas/Stars";
import { Bio } from "../../data/constants";
import {GitHubIcon,LinkedInIcon,InstagramIcon} from '@mui/icons-material';

const Hero = () => {
  return (
    <div id="About">
      <div className="hero-container">
        <div className="hero-bg">
          <StarCanvas />
          <HeroBgAnimation />
        </div>

        <motion.div {...headContainerAnimation}>
          <div className="hero-inner-container">
            <div className="hero-left-container">
              <motion.div {...headTextAnimation}>
                <div className="hero-title">
                  Hi, I am <br /> {Bio.name}
                </div>
                <div className="hero-text-loop">
                  I am a
                  <span className="hero-span">
                    <Typewriter
                      options={{
                        strings: Bio.roles,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </span>
                </div>
              </motion.div>

              <motion.div {...headContentAnimation}>
                <div className="hero-subtitle">{Bio.description}</div>
              </motion.div>

              <a
                className="hero-resume-button"
                href={Bio.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                Check Resume
              </a> 
            </div>
            <div className="hero-right-container">
              <motion.div {...headContentAnimation}>
                <Tilt>
                  <img className="hero-img" src={HeroImg} alt="Anshul Kansal" />
                </Tilt>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;