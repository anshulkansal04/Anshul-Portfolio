import React from 'react';
import '../../index.css';
import { skil } from "../../data/constants";
import StarCanvas from "../canvas/Stars";
import { motion } from "framer-motion";


const Skills = () => {
    return (
        <div className="Skills" id="Skills">
            <div className="hero-bg">
                <StarCanvas />
            </div>
            <h1 className='skills-h1'>Skills</h1>
            <p className='desc'>Here are some of my skills on which I have been working on for the
                past 2 years.</p>
            <motion.div
                className="box"
                initial={{ opacity: 0.5, scale: 0.5 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, scale: 1 }} >
            <div className="skills-grid">
                {skil.map(skill => (
                    <div key={skill.name} className="skill-card">
                        <img src={skill.icon} alt={skill.name} className="skill-icon" />
                        <p className='skills-p'>{skill.name}</p>
                    </div>
                ))}

            </div>
            </motion.div>
        </div >
    );
};

export default Skills;
