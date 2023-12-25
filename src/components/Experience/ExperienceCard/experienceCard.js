import React from "react";
import './experienceCard.css'; 

const ExperienceCard = ({ role, company, dates, description }) => {
    return (
        <div className="experienceText">
            <h3 className="role">{role}</h3>
            <div id="subdataSection">
                <p className="experienceSubdata company">{company}</p>
                <p className="experienceSubdata dates">{dates}</p>
            </div>
            <ul className="descriptionList">
                {description.map((item) => {
                    return (
                        <li key={item.uniqueId} className="listItem">{item}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ExperienceCard;