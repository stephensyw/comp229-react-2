// Filename - pages/projects.js
 
import React from "react";
 
const Projects = () => {
    return (
        <div class="sub-root">
            <div class="projects-container">
                <div class="project-card">
                    <div class="project-image">
                    <img src="project1.jpg" alt="Project 1" />
                    </div>
                    <div class="project-info">
                    <h3>Project 1</h3>
                    <p>A web application that helps users manage their daily tasks and to-do lists.</p>
                    <div class="project-links">
                        <a href="#">
                        <i class="fas fa-external-link-alt"></i> Live Demo </a>
                        <a href="#">
                        <i class="fab fa-github"></i> GitHub </a>
                    </div>
                    </div>
                </div>
                <div class="project-card">
                    <div class="project-image">
                    <img src="project2.jpg" alt="Project 2" />
                    </div>
                    <div class="project-info">
                    <h3>Project 2</h3>
                    <p>A mobile app that helps users track their fitness activities and progress.</p>
                    <div class="project-links">
                        <a href="#">
                        <i class="fas fa-external-link-alt"></i> Live Demo </a>
                        <a href="#">
                        <i class="fab fa-github"></i> GitHub </a>
                    </div>
                    </div>
                </div>
                <div class="project-card">
                    <div class="project-image">
                    <img src="project3.jpg" alt="Project 3" />
                    </div>
                    <div class="project-info">
                    <h3>Project 3</h3>
                    <p>A data visualization tool that helps users analyze and interpret complex datasets.</p>
                    <div class="project-links">
                        <a href="#">
                        <i class="fas fa-external-link-alt"></i> Live Demo </a>
                        <a href="#">
                        <i class="fab fa-github"></i> GitHub </a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
 
export default Projects;