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

const slideIn = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  },
};

const fadeIn = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
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

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
        >
          <div className="hero-inner-container">
            <motion.div className="hero-left-container" variants={slideIn}>
              <motion.div variants={fadeIn}>
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
                        delay: 50,
                        deleteSpeed: 30,
                      }}
                    />
                  </span>
                </div>
              </motion.div>

              <motion.div variants={fadeIn}>
                <div className="hero-subtitle">{Bio.description}</div>
              </motion.div>

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

            <motion.div 
              className="hero-right-container"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Tilt
                options={{
                  max: 25,
                  scale: 1.05,
                  speed: 1000,
                }}
              >
                <img className="hero-img" src={HeroImg} alt="Anshul Kansal" />
              </Tilt>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;