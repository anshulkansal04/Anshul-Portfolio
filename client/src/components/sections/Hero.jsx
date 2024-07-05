import React from "react";
import '../../index.css';
import Typewriter from "typewriter-effect";
import HeroImg from "../../images/HeroImage.jpeg";
import HeroBgAnimation from "../HeroBgAnimation";
import { Tilt } from "react-tilt";
import { animate, motion, stagger } from "framer-motion";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  transition,
} from "../../utils/motion";
import StarCanvas from "../canvas/Stars";
import { Bio } from "../../data/constants";
import { GitHub as GitHubIcon, LinkedIn as LinkedInIcon, Instagram as InstagramIcon ,X as XIcon, Email as EmailIcon} from '@mui/icons-material';

const textvar = {
    initial:{
      x: -500,
      opactiy:0
    },
    animate:{
      x:0,
      opacity:1,
      transition:{
        duration:1,
        staggerChildren:0.1,
      },
    },
};

const Hero = () => {
  return (
    <div id="About">
      <div className="hero-container">
        <div className="hero-bg">
          <StarCanvas />
          <HeroBgAnimation />
        </div>

        <motion.div variants={textvar} initial="initial" animate="animate">
          <motion.div variants={textvar} className="hero-inner-container">
            <motion.div variants={textvar} className="hero-left-container">
              <motion.div variants={textvar}>
                <motion.div variants={textvar} className="hero-title">
                  Hi, I am <br /> {Bio.name}
                </motion.div>
                <motion.div variants={textvar} className="hero-text-loop">
                  I am a
                  <motion.span variants={textvar} className="hero-span">
                    <Typewriter
                      options={{
                        strings: Bio.roles,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </motion.span>
                </motion.div>
              </motion.div>

              <motion.div variants={textvar}>
                <div className="hero-subtitle">{Bio.description}</div>
              </motion.div>
        {/* <motion.div {...headContainerAnimation}>
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
              </motion.div> */}

              <div className="hero-buttons">
                <a
                  className="hero-resume-button"
                  href={Bio.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check Resume
                </a>
                <a
                  className="hero-icon-button github"
                  style={{marginLeft:'20px',}}
                  href={Bio.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon />
                </a>
                <a
                  className="hero-icon-button linkedin"
                  href={Bio.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon />
                </a>
                <a
                  className="hero-icon-button insta"
                  href={Bio.insta}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon />
                </a>
                <a
                  className="hero-icon-button github"
                  href={Bio.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <XIcon />
                </a>
                <a
                  className="hero-icon-button mail"
                  href={Bio.mail}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <EmailIcon />
                </a>
              </div>
            </motion.div>
            <div className="hero-right-container">
              <motion.div {...headContentAnimation}>
                <Tilt>
                  <img className="hero-img" src={HeroImg} alt="Anshul Kansal" />
                </Tilt>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;