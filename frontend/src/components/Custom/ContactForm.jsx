import React from 'react';
import './ContactForm.css';

function ContactForm() {
    return (
        <div className="contact-form-container">
            <div
                className="contact-image"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1561455521-7c84dabda80c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                }}
            />
            <form className="contact-form">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Your Name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Your Email" required />

                <label htmlFor="subject">Subject:</label>
                <input type="text" id="subject" name="subject" placeholder="Subject" required />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" placeholder="Your Message" required></textarea>

                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default ContactForm;
