
// Filename - pages/index.js
 
import React from "react";
 
const Home = () => {
    return (
        <div class="sub-root"> 
            <section>
                <h2>About Me</h2>
                <p>Hi, I'm Shek Yu Wong, a passionate programmer with a track record of delivering exceptional results. With 5 years of experience, I've honed my skills in SQL Database and strive to continuously expand my expertise.</p>
                <a href="#" class="button">Learn More</a>
            </section>
            <section>
                <h2>My Experience</h2>
                <p>Throughout my career, I've had the opportunity to work with a diverse range of clients and projects, allowing me to develop a well-rounded skillset. I've held roles such as software engineer and have successfully handled monthly retention list in a telecom company in Hong Kong.</p>
                <a href="#" class="button">View Experience</a>
            </section>
            <section>
                <h2>Education and Certifications</h2>
                <p>In addition to my professional experience, I have a strong educational background. I hold a Diploma of Software Engineering Technician from Centennial College and have completed various courses and certifications to enhance my knowledge and skills.</p>
                <a href="#" class="button">Explore Education</a>
            </section>
            <footer className="footer">
                <p className="text-footer">
                    Copyright ©-All rights are reserved
                </p>
            </footer>
        </div>        
    );
};
 
export default Home;
