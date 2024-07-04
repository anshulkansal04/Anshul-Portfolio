import React, { useEffect } from 'react';
import '../../index.css';
import Jiit from '../../images/JIIT-Noida.png';
import vivek from '../../images/the-vivekanand-school.png';
import SchoolIcon from '@mui/icons-material/School';
import StarCanvas from '../canvas/Stars';

const Education = () => {
    useEffect(() => {
        const handleScroll = () => {
            const items = document.querySelectorAll('.edu-item');
            items.forEach(item => {
                const rect = item.getBoundingClientRect();
                if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                    item.classList.add('edu-visible');
                } else {
                    item.classList.remove('edu-visible');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section id="education" className="edu-section">
            <div className='hero-bg'>
                <StarCanvas />
            </div>
            <div className="edu-header">
                <SchoolIcon className="edu-icon" />
                <h1 className="edu-title">My Education</h1>
            </div>
            <p className="edu-description">Education is the most powerful weapon which you can use to change the world.</p>
            <div className="edu-item">
                <img src={Jiit} alt="Jaypee Institute" className="edu-img" />
                <div className="edu-content">
                    <h2 className="edu-subtitle">Bachelor Of Technology</h2>
                    <p className="edu-institution">Jaypee Institute Of Information Technology | CSE</p>
                    <p className="edu-duration">2022-2026 | Pursuing</p>
                </div>
            </div>

            <div className="edu-item">
                <img src={vivek} alt="The Vivekanand School" className="edu-img" />
                <div className="edu-content">
                    <h2 className="edu-subtitle">Science | PCM</h2>
                    <p className="edu-institution">The Vivekanand School | CBSE</p>
                    <p className="edu-duration">2020-2022 | Completed</p>
                </div>
            </div>
        </section>
    );
};

export default Education;
