import React, { useState } from "react";
import { Link as LinkR } from "react-router-dom";
import { useTheme } from "styled-components";
import { Bio } from "../data/constants";
import { MenuRounded } from "@mui/icons-material";
import '../index.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  return (
    <div className="nav" style={{ backgroundColor: theme.bg }}>
      <div className="navbar-container">
        <LinkR className="nav-logo" to="/">Anshul Kansal</LinkR>

        <div className="mobile-icon" onClick={() => setIsOpen(!isOpen)}>
          <MenuRounded style={{ color: "inherit" }} />
        </div>

        <ul className="nav-items">
          <a className="nav-link" href="#About">About</a>
          <a className="nav-link" href="#Skills">Skills</a>
          <a className="nav-link" href="#Experience">Experience</a>
          <a className="nav-link" href="#Projects">Projects</a>
          <a className="nav-link" href="#Education">Education</a>
          <a className="nav-link" href="#Contact">Contact Me</a>
        </ul>

        {isOpen && (
          <ul className={`mobile-menu ${isOpen ? "open" : ""}`}>
            <a className="nav-link" onClick={() => setIsOpen(!isOpen)} href="#About">About</a>
            <a className="nav-link" onClick={() => setIsOpen(!isOpen)} href="#Skills">Skills</a>
            <a className="nav-link" onClick={() => setIsOpen(!isOpen)} href="#Experience">Experience</a>
            <a className="nav-link" onClick={() => setIsOpen(!isOpen)} href="#Projects">Projects</a>
            <a className="nav-link" onClick={() => setIsOpen(!isOpen)} href="#Education">Education</a>
            </ul>
        )}

      </div>
    </div>
  );
};

export default Navbar;
