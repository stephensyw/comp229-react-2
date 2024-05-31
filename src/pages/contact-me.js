/*
 * File name: pages/contact-me.js
 * Student’s Name: Shek Yu Wong
 * StudentID: 301335153
 * Date: May 30, 2024
 */
 
import React from "react";
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();
    const showSuccessMessage = () => {
        localStorage.setItem('name', document.getElementById('name').value);
        localStorage.setItem('email', document.getElementById('email').value);
        localStorage.setItem('message', document.getElementById('message').value);
        navigate('/thank-you');
    }

    return (
        <div>
            <div class="contact-container">
                <div class="contact-title"><h2>Contact Me</h2></div>
                <div class="contact-point">
                    <h2>How I can help you?</h2>
                        <ul>
                            <li>Request a personalized demonstration</li>
                            <li>Learn how to grow your business through performance-based partnerships</li>
                            <li>Search open positions</li>
                            <li>Explore our charitable initiatives</li>
                        </ul>
                        <br></br>
                        <br></br>
                    <h2>Point of Contact</h2>
                    <table>
                        <tr>
                            <td class="contact-table-width"><img src="mobile-icon.jpg" class="contact-icon" alt="tel-icon"></img></td>
                            <td>(437) 662-6908</td>
                        </tr>
                        <tr>
                            <td class="contact-table-width"><img src="email-icon.jpg" class="contact-icon" alt="email-icon"></img></td>
                            <td>stephensyw@gmail.com</td>
                        </tr>
                    </table>
                </div>
                <div class="contact-message">
                    <h2>Make an inquiry</h2>
                    <form id="contact-form" onSubmit={showSuccessMessage}>
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
                    {showSuccessMessage && (
                        <div className="success-message">
                            <h2>Thank you for your message!</h2>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
 
export default Contact;