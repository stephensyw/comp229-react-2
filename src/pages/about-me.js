// Filename - pages/about.js
 
import React from "react";
 
const About = () => {
    return (
        <div>
            <header>
                <h1>My Profile</h1>
            </header>
            <div class="profile-container">
                <div class="profile-image">
                    <img src="profile-image.jpg" alt="Profile Image"/>
                </div>
                <div class="profile-info">
                    <h2>Shek Yu Wong (Stephen) v3</h2>
                    <p>I am a software engineer with a passion for web development and technology. I am always eager to learn new things and take on exciting projects.</p>
                    <div class="social-links">
                        <a href="#">
                            <i class="fab fa-linkedin"></i> LinkedIn </a>
                        <a href="#">
                            <i class="fab fa-twitter"></i> Twitter </a>
                        <a href="#">
                            <i class="fab fa-github"></i> GitHub </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
