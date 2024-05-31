/*
 * File name: projects.js
 * Student’s Name: Shek Yu Wong
 * StudentID: 301335153
 * Date: May 30, 2024
 */
 
import React from "react";
 
const Projects = () => {
    return (
        <div>
            <div class="projects-container">
            <h2 class="sub-root sub-root-center">My Projects</h2>
                <div class="project-card">
                    <div class="project-image">
                    <img src="project-planning.jpg" alt="Project 1" />
                    </div>
                    <div class="project-info">
                    <h3>Project 1</h3>
                    <p>A web application that helps users manage their daily tasks and to-do lists.</p>
                    </div>
                </div>
                <div class="project-card">
                    <div class="project-image">
                    <img src="fitness.jpg" alt="Project 2"/>
                    </div>
                    <div class="project-info">
                    <h3>Project 2</h3>
                    <p>A mobile app that helps users track their fitness activities and progress.</p>
                    </div>
                </div>
                <div class="project-card">
                    <div class="project-image">
                    <img src="data.jpg" alt="Project 3" />
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
 
export default Projects;