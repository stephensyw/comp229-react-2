// Filename - pages/contact.js
 
import React from "react";
 
const Contact = () => {
    return (
        <div>
            <div class="container">
                <h1>Contact Me</h1>
                <div class="sub-root-center">Tel: (437)662-6908</div>
                <div class="sub-root-center">Email: stephensyw@gmail.com</div>
                <br></br>
                <hr></hr>
                <br></br>
                <h2>Customer Query Form</h2>
                <form id="contact-form">
                <div>
                    <label for="name">Your Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <br></br>
                <div>
                    <label for="email">Your Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <br></br>
                <div>
                    <label for="message">Your Message:</label>
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