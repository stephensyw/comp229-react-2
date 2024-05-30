
// Filename - pages/index.js
 
import React from "react";
 
const Home = () => {

    const onButtonClick = () => {
        const pdfUrl = "Stephen Wong CV.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Stephen Wong CV.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div class="profile-container"> 
            <div class="profile-image">
                <img src="profile-image.jpg" alt="Profile"/>
            </div>
            <div class="profile-info">
                <section class="sub-root">
                    <h2>About Me</h2>
                    <p>Hi, I'm Shek Yu Wong, a passionate programmer with a track record of delivering exceptional results. With 5 years of experience, I've honed my skills in SQL Database and strive to continuously expand my expertise.</p>
                </section>
                <section class="sub-root">
                    <h2>My Experience</h2>
                    <p>Throughout my career, I've had the opportunity to work with a diverse range of clients and projects, allowing me to develop a strong numerical sense and data handling skills. I've held roles such as software engineer and have successfully handled monthly retention list in a telecom company in Hong Kong.</p>

                </section>
                <section class="sub-root">
                    <h2>Education and Certifications</h2>
                    <p>In addition to my professional experience, I have a strong educational background. I hold a Diploma of Software Engineering Technician from Centennial College and have completed various courses and certifications to enhance my knowledge and skills.</p>
                </section>
                <section class="sub-root">
                    <h2>My Curriculum Vitae</h2>
                    <a href="CV.pdf" class="button" onClick={onButtonClick}>Download Curriculum Vitae</a>
                </section>
                <section class="sub-root">
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
 
export default Home;
