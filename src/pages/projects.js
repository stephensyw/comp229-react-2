/*
 * File name: projects.js
 * Student’s Name: Shek Yu Wong
 * StudentID: 301335153
 * Date: May 30, 2024
 */
 

// Import necessary resources
import React from "react";

// Define the Projects page component
const Projects = () => {

    // Render the Projects page component
    return (
        <div>

            {/* Container for all project cards */}
            <div class="projects-container">
                <h2 class="sub-root sub-root-center">My Projects</h2>

                {/* First project card */}
                <div class="project-card">
                    <div class="project-image">
                    <img src="project-planning.jpg" alt="Project 1" />
                    </div>
                    <div class="project-info">
                    <h3>Project 1</h3>
                    <p>A web application that helps users manage their daily tasks and to-do lists.</p>
                    </div>
                </div>

                {/* Second project card */}
                <div class="project-card">
                    <div class="project-image">
                    <img src="fitness-app.jpg" alt="Project 2"/>
                    </div>
                    <div class="project-info">
                    <h3>Project 2</h3>
                    <p>A mobile app that helps users track their fitness activities and progress.</p>
                    </div>
                </div>

                {/* Third project card */}
                <div class="project-card">
                    <div class="project-image">
                    <img src="data-visualization.jpg" alt="Project 3" />
                    </div>
                    <div class="project-info">
                    <h3>Project 3</h3>
                    <p>A data visualization tool that helps users analyze and interpret complex datasets.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

// Export the Projects page component
export default Projects;
