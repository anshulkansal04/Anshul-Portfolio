import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      icon={
        <img
          width="100%"
          height="100%"
          alt={experience?.company}
          style={{ borderRadius: "50%", objectFit: "cover" }}
          src={experience?.img}
        />
      }
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        background: "#1d1836",
        color: "#fff",
        boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
        backgroundColor: "rgba(17, 25, 40, 0.83)",
        border: "1px solid rgba(255, 255, 255, 0.125)",
        borderRadius: "6px",
      }}
      contentArrowStyle={{
        borderRight: "7px solid  rgba(255, 255, 255, 0.3)",
      }}
      date={experience?.date}
    >
      <div className="experience-card-top">
        <img className="experience-card-image" src={experience?.img} />
        <div className="experience-card-body">
          <div className="experience-card-role">{experience?.role}</div>
          <div className="experience-card-company">{experience?.company}</div>
          <div className="experience-card-date">{experience?.date}</div>
        </div>
      </div>
      <div className="experience-card-description">
        {experience?.desc && <div className="experience-card-span">{experience.desc}</div>}
        {experience?.skills && (
          <>
            <br />
            <div className="experience-card-skills">
              <b>Skills</b>
              <div className="experience-card-item-wrapper">
                {experience?.skills?.map((skill, index) => (
                  <div key={index} className="experience-card-skill">• {skill}</div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
