import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// import { experiences } from "../../data/constants";
import ExperienceCard from "./Experiencecard";
import CICE from '../../images/CICE.jpeg';
import ucr from '../../images/uCR.jpg';
import swoc from '../../images/swoc.jpeg';

const experiences = [
    {
        id: 0,
        img: CICE ,
        role: "Digital Head",
        company: "CICE Hub, JIIT",
        date: "June 2024 - Present",
        desc: "As the digital head of the Creativity and Innovation Cell in Electronics, my role involves designing engaging posters for social media to promote our initiatives and events. Additionally, I guide and mentor a team of dedicated volunteers, ensuring effective collaboration and the successful execution of our projects and activities.",
        skills: [
            "Designing",
            "Social Media Management",
            "Leadership",
            "Communication",
            "Team Collaboration",
        ],
        doc: "",
    },
    {
        id: 1,
        img: swoc,
        role: "Open-Source Contributer",
        company: "Social Winter of Code(SWOC)",
        date: "Jan 2024 - Feb 2024",
        desc: "As an Open-Source Contributor for Social Winter of Code (SWOC), I actively participate in open-source projects, contributing code, documentation, and innovative ideas to enhance software development. My role involves collaborating with a global community of developers, learning and implementing best practices in coding, and solving real-world problems through open-source contributions. I am committed to continuous learning and sharing knowledge, aiming to make meaningful contributions to the open-source ecosystem.",
        skills: [
            "Problem-Solving",
            "Version Control",
            "Collaboration",
            "Documentation",
            "Web Development",
        ],
        doc: "",
    },
    {
        id: 2,
        img: ucr,
        role: "Digital Volunteer",
        company: "µCR Hub, JIIT",
        date: "Aug 2023 - June 2024",
        desc: "As a digital volunteer , I assist in the creation of digital content and support the digital head in managing our online presence. My responsibilities include designing graphics for social media, helping to implement digital marketing strategies. I work collaboratively with the team to ensure our initiatives are effectively promoted and executed, fostering a culture of creativity and innovation.",
        skills: [
            "Designing",
            "Creativity",
            "Digital Marketing",
            "Time Management",
            "Problem-Solving",
        ],
        doc: "",
    },
];


const Experience = () => {

    return (
        <div className="experience-container" id="Experience">
            <div className="experience-wrapper">
                <div className="experience-title">Experience</div>
                <div className="experience-desc" style={{ marginBottom: "40px" }}>
                    My work experience as a software engineer and working on different
                    companies and projects.
                </div>

                <VerticalTimeline animate={true}>
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={`experience-${index}`}
                            experience={experience}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    );
};

export default Experience;
