import React from "react";
import './skills.css'; 

const SkillsCard = ({ category, skills}) => {
    return (
        <div className="skillsText">
            <h3>{category}</h3>
            <p>{skills}</p>
        </div>
    )
}

export default SkillsCard;