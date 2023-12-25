import React from "react";
import './experience.css'; 
import ExperienceCard from "./ExperienceCard/experienceCard";

const Experience = () => {
    return (
        <section id="experience">
            <h1 className="name sectionTitle">Experience</h1>
            <div className="experienceSection">
                <ExperienceCard 
                    role="Undergraduate Teaching Assitant" 
                    company="University of Central Florida" 
                    dates="08/2023 - Present" 
                    description={["Answered questions and explained topics related to C programming langauge in weekly office hours", "Collaborated with 16 other teaching assistants to bolster student success and ensure quickly graded tests and assignments", "Supported the education of over 1,500 students"]}>
                </ExperienceCard>
                <ExperienceCard 
                    role="Student Scholar, Computer Programming Team" 
                    company="Limbitless Solutions Incorporated" 
                    dates="01/2023 - 05/2023" 
                    description={["Contributed to an organization that provides prosthetic arms to children in the limb-difference community", "Implemented a scan-to-unlock security system for inventory lockers using C++ with Arduinos, allowing for inventory to be tracked by uses and location", "Assisted team members with various projects using Flutter"]}>
                </ExperienceCard>
            </div>
        </section>
    )
}

export default Experience;