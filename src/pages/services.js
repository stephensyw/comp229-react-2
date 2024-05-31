/*
 * File name: pages/services.js
 * Student’s Name: Shek Yu Wong
 * StudentID: 301335153
 * Date: May 30, 2024
 */


// Import necessary resources
import React from "react";

// Define the Services page component
const Services = () => {

    // Render the Services page component
    return (
        <div>

            {/* Container for all services cards */}
            <div class="services-container">
                <h2 class="sub-root sub-root-center">My Services</h2>

                {/* First service card */}
                <div class="service-card">
                    <div class="service-icon">
                    <i class="fas fa-code">
                        <img src="web-development.jpg" alt="Web Development"></img>
                    </i>
                    </div>
                    <div class="service-info">
                    <h3>Web Development</h3>
                    <p>I offer professional web development services, including custom website design, responsive development, and e-commerce solutions.</p>
                    </div>
                </div>

                {/* Second service card */}
                <div class="service-card">
                    <div class="service-icon">
                    <i class="fas fa-mobile-alt">
                        <img src="mobile-app.jpg" alt="Mobile App"></img>
                    </i>
                    </div>
                    <div class="service-info">
                    <h3>Mobile App Development</h3>
                    <p>I can develop high-quality mobile apps for both iOS and Android platforms, with a focus on user experience and functionality.</p>
                    </div>
                </div>

                {/* Third service card */}
                <div class="service-card">
                    <div class="service-icon">
                    <i class="fas fa-chart-line">
                        <img src="digital-marketing.jpg" alt="Web Development"></img>
                    </i>
                    </div>
                    <div class="service-info">
                    <h3>Digital Marketing</h3>
                    <p>I offer comprehensive digital marketing services, including search engine optimization (SEO), social media management, and content creation.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

// Export the Services page component
export default Services;
