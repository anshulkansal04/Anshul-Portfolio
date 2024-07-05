import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const ProjectCard = ({ title, description, imgUrl,github,live}) => {
    return (
        <div className="col-12 col-sm-6 col-md-4">
            <div className="proj-imgbx">
                <img src={imgUrl} alt={title} />
                <div className="proj-default-txt">
                    <h4>{title}</h4>
                </div>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <div className="proj-buttons">
                        <a href={github} className="proj-icon" title="GitHub" target="_blank" rel="noreferrer">
                            <GitHubIcon />
                        </a>
                        <a href={live} className="proj-icon" title="Live Demo" target="_blank" rel="noreferrer">
                            <LaunchIcon />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
