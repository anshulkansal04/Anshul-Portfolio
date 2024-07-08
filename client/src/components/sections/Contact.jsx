import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useInView } from 'react-intersection-observer';
import EarthCanvas from '../canvas/EarthCanvas';
import { slideIn } from '../../utils/motion';

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.send(
            'service_t5glc54',
            'template_ew9sl7a',
            {
                from_name: form.name,
                to_name: 'Anshul',
                from_email: form.email,
                to_email: 'anshulkansal89@gmail.com',
                message: form.message,
            },
            'Hz1nJGvTN5knHqIvL'
        )
        .then(() => {
            setLoading(false);
            alert('Message sent successfully! I will get back to you soon.');
            setForm({
                name: '',
                email: '',
                message: '',
            });
        }, (error) => {
            setLoading(false);
            alert('Something went wrong. Please try again later.');
            console.log(error.text);
        });
    };

    return (
        <div ref={ref} className="contact-container">
            <motion.div
                variants={slideIn('left', "tween", 0.2, 1)}
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
                className="contact-form-container"
            >
                <p className="contact-get-in-touch">Get in touch</p>

                <h3 className="contact-header">Contact Me</h3>

                <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                    <label className="contact-form-label">
                        <span className="contact-label-text">Your Name</span>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your name?"
                            className="contact-input-field"
                        />
                    </label>
                    <label className="contact-form-label">
                        <span className="contact-label-text">Your Email</span>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your email?"
                            className="contact-input-field"
                        />
                    </label>
                    <label className="contact-form-label">
                        <span className="contact-label-text">Your Message</span>
                        <textarea
                            rows="7"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="What do you want to say?"
                            className="contact-input-field"
                        />
                    </label>

                    <button
                        type="submit"
                        className="contact-submit-button"
                    >
                        {loading ? 'Sending...' : 'Send'}
                    </button>
                </form>
            </motion.div>

            <motion.div
                variants={slideIn('right', "tween", 0.2, 1)}
                initial="hidden"
                animate={inView ? 'show' : 'hidden'}
                className="contact-earth-container"
            >
                <EarthCanvas />
            </motion.div>
        </div>
    );
};

export default Contact;
