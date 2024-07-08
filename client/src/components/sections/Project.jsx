import React from 'react';
import ProjectCard from './Projectcard';
import projImg1 from "../../images/P1.png";
import projImg2 from "../../images/P2.png";
import projImg3 from "../../images/P3.png";
import projImg4 from "../../images/P4.png";
import projImg5 from "../../images/P5.png";
import projImg6 from "../../images/P6.png";
import colorSharp2 from "../../images/color-sharp2.png";
// import TrackVisibility from 'react-on-screen';

const Project = () => {

    const projects = [
        {
            title: "Portfolio",
            description: "Full Stack Development",
            imgUrl: projImg1,
            github: '/',
            live:'/',
        },
        {
            title: "Indian Hawker Bazar",
            description: "Front End Development",
            imgUrl: projImg2,
            github: 'https://github.com/anshulkansal04/Indian-Hawker-Bazar',
            live:'https://indian-hawker-bazar.netlify.app/',
        },
        {
            title: "LearnHub",
            description: "Full Stack Development",
            imgUrl: projImg3,
            github: 'https://github.com/anshulkansal04/LearnHub',
            live:'https://github.com/anshulkansal04/LearnHub',
        },
        {
            title: "Parent Me",
            description: "Full Stack Development",
            imgUrl: projImg4,
            github: 'https://github.com/anshulkansal04/ParentMe',
            live:'https://github.com/anshulkansal04/ParentMe',
        },
        {
            title: "Maze Quest",
            description: "C++ Development",
            imgUrl: projImg5,
            github: 'https://github.com/anshulkansal04/MazeQuest',
            live:'https://github.com/anshulkansal04/MazeQuest',
        },
        {
            title: "Student Management System ",
            description: "C++ Development",
            imgUrl: projImg6,
            github: 'https://github.com/anshulkansal04/Student-Management-System',
            live:'https://github.com/anshulkansal04/Student-Management-System',
        },
    ];

    return (
        <section className="project" id="Projects">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div >
                            <h2>Projects</h2>
                            <p>Transforming ideas into reality, one line of code at a time.</p>
                            <div className="row">
                                {
                                    projects.map((project, index) => {
                                        return (
                                            <ProjectCard
                                                key={index}
                                                {...project}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-right" src={colorSharp2} alt="Background decoration"></img>
        </section>
    );
};

export default Project;
