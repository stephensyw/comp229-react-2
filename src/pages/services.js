// Filename - pages/signup.js
 
import React from "react";
 
const Services = () => {
    return (
        <div>
            <div class="services-container">
                <h2 class="sub-root sub-root-center">My Services</h2>
                <div class="service-card">
                    <div class="service-icon">
                    <i class="fas fa-code">
                        <img src="web.jpg" alt="Web Development"></img>
                    </i>
                    </div>
                    <div class="service-info">
                    <h3>Web Development</h3>
                    <p>I offer professional web development services, including custom website design, responsive development, and e-commerce solutions.</p>
                    </div>
                </div>
                <div class="service-card">
                    <div class="service-icon">
                    <i class="fas fa-mobile-alt">
                        <img src="mobile.jpg" alt="Mobile App"></img>
                    </i>
                    </div>
                    <div class="service-info">
                    <h3>Mobile App Development</h3>
                    <p>I can develop high-quality mobile apps for both iOS and Android platforms, with a focus on user experience and functionality.</p>
                    </div>
                </div>
                <div class="service-card">
                    <div class="service-icon">
                    <i class="fas fa-chart-line">
                        <img src="dm.jpg" alt="Web Development"></img>
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
 
export default Services;