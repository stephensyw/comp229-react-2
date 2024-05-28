// Filename - pages/contact.js
 
import React from "react";
 
const Contact = () => {
    return (
        <div class="sub-root">
            <div class="container">
                <h1>Contact Me</h1>
                <form id="contact-form">
                <div>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                    <button type="submit">Send Message</button>
                </form>
                <div class="success-message">Thank you for your message!</div>
            </div>
        </div>
    );
};
 
export default Contact;