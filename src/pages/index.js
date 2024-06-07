/*
 * File name: pages/index.js
 * Student’s Name: Shek Yu Wong
 * StudentID: 301335153
 * Date: May 30, 2024
 */


// Import necessary resources
import React from "react";

// Define Home page components
const Home = () => {

    // Function to handle button click and download my CV in pdf format
    const onButtonClick = () => {
        const pdfUrl = "Stephen Wong CV.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Stephen Wong CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link)

    };

    // Render the Home page component
    return (
        
        // Container for the entire profile section
        <div class="profile-container">
            
            {/* Container for the profile image */}
            <div class="profile-image">
                <img src="profile-image.jpg" alt="Profile"/>
            </div>

            {/* Container for the profile information */}
            <div class="profile-info">

            
                {/* Section for the "About Me" content */}
                <section class="profile-content">
                    <h2>Shek Yu Wong (Stephen)</h2>
                    <hr></hr>
                    <h2>About Me</h2>
                    <p>Hi, I'm Shek Yu Wong, a passionate programmer with a track record of delivering exceptional results. With 5 years of experience, I've honed my skills in SQL Database and strive to continuously expand my expertise.</p>
                </section>

                {/* Section for the "My Experience" content */}
                <section class="profile-content">
                    <h2>My Experience</h2>
                    <p>Throughout my career, I've had the opportunity to work with a diverse range of clients and projects, allowing me to develop a strong numerical sense and data handling skills. I've held roles such as software engineer and have successfully handled monthly retention list in a telecom company in Hong Kong.</p>
                </section>

                {/* Section for the "Education and Certification" content */}
                <section class="profile-content">
                    <h2>Education and Certifications</h2>
                    <p>In addition to my professional experience, I have a strong educational background. I hold a Diploma of Software Engineering Technician from Centennial College and have completed various courses and certifications to enhance my knowledge and skills.</p>
                </section>

                {/* Provide a link to download the full Curriculum Vitae */}
                <section class="profile-content">
                    <h2>My Curriculum Vitae</h2>
                    <a href="/" class="button" onClick={onButtonClick}>Download Curriculum Vitae</a>
                </section>

                {/* Provide a link to access my GitHub account */}
                <section class="profile-content">
                    <h2>Social Links</h2>
                    <div class="social-links">
                        <a href="https://github.com/stephensyw/comp229-react-2">
                            <div class="fab fa-github button">Link to my GitHub</div> </a>
                    </div>
                </section>

            </div>
        </div>
    );
};

// Export the Home page component
export default Home;
