"use client"

import { useEffect } from "react"
import "../../index.css"
import Jiit from "../../images/JIIT-Noida.png"
import vivek from "../../images/the-vivekanand-school.png"
import SchoolIcon from "@mui/icons-material/School"

const Education = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When education section comes into view
          if (entry.isIntersecting) {
            // Get all edu items and animate them with delay
            const items = document.querySelectorAll(".edu-item")
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("edu-visible")
              }, index * 300) // 300ms delay between each item
            })
          }
        })
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      },
    )

    // Observe the education section
    const educationSection = document.querySelector(".edu-section")
    if (educationSection) {
      observer.observe(educationSection)
    }

    return () => {
      if (educationSection) {
        observer.unobserve(educationSection)
      }
    }
  }, [])

  return (
    <section id="Education" className="edu-section">
      <div className="edu-header">
        <SchoolIcon className="edu-icon" />
        <h1 className="edu-title">My Education</h1>
      </div>
      <p className="edu-description">Education is the most powerful weapon which you can use to change the world.</p>

      <div className="edu-container">
        <div className="edu-item">
          <div className="edu-card">
            <div className="edu-image-wrapper">
              <img src={Jiit} alt="Jaypee Institute" className="edu-img" />
            </div>
            <div className="edu-content">
              <h2 className="edu-subtitle">Bachelor Of Technology</h2>
              <p className="edu-institution">Jaypee Institute Of Information Technology | CSE</p>
              <p className="edu-duration">
                2022-2026 <span className="edu-status pursuing">Pursuing</span>
              </p>
            </div>
          </div>
        </div>

        <div className="edu-item">
          <div className="edu-card">
            <div className="edu-image-wrapper">
              <img src={vivek} alt="The Vivekanand School" className="edu-img" />
            </div>
            <div className="edu-content">
              <h2 className="edu-subtitle">Science | PCM</h2>
              <p className="edu-institution">The Vivekanand School | CBSE</p>
              <p className="edu-duration">
                2020-2022 <span className="edu-status completed">Completed</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education

