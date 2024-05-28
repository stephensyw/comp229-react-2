// Filename - pages/signup.js
 
import React from "react";
 
const Services = () => {
    return (
        <div class="sub-root">
            <div class="services-container">
                <div class="service-card">
                    <div class="service-icon">
                    <i class="fas fa-code"></i>
                    </div>
                    <div class="service-info">
                    <h3>Web Development</h3>
                    <p>I offer professional web development services, including custom website design, responsive development, and e-commerce solutions.</p>
                    <a href="#" class="service-cta">Learn More</a>
                    </div>
                </div>
                <div class="service-card">
                    <div class="service-icon">
                    <i class="fas fa-mobile-alt"></i>
                    </div>
                    <div class="service-info">
                    <h3>Mobile App Development</h3>
                    <p>I can develop high-quality mobile apps for both iOS and Android platforms, with a focus on user experience and functionality.</p>
                    <a href="#" class="service-cta">Learn More</a>
                    </div>
                </div>
                <div class="service-card">
                    <div class="service-icon">
                    <i class="fas fa-chart-line"></i>
                    </div>
                    <div class="service-info">
                    <h3>Digital Marketing</h3>
                    <p>I offer comprehensive digital marketing services, including search engine optimization (SEO), social media management, and content creation.</p>
                    <a href="#" class="service-cta">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
 
export default Services;