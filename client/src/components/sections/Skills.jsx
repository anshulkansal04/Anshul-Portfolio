import React from 'react';
import '../../index.css';
import { skil } from "../../data/constants";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const Skills = () => {
    return (
        <div className="Skills" id="Skills">
            <motion.h1 
                className='skills-h1'
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Skills
            </motion.h1>
            
            <motion.p 
                className='desc'
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                Here are some of my skills on which I have been working on for the
                past 2 years.
            </motion.p>

            <motion.div 
                className="skills-grid"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                {skil.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        className="skill-card"
                        variants={item}
                        whileHover={{ 
                            scale: 1.03,
                            transition: { duration: 0.2 }
                        }}
                    >
                        <motion.img 
                            src={skill.icon} 
                            alt={skill.name} 
                            className="skill-icon"
                        />
                        <motion.p className='skills-p'>
                            {skill.name}
                        </motion.p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Skills;
