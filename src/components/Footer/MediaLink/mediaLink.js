import React from "react";
import './mediaLink.css'; 
import liImage from "../../../assets/images/linkedIn_icon.png";
import ghImage from "../../../assets/images/github_icon.png";

const MediaLink = ({ mediaLink, className, imgSrc, alt }) => {
    return (
        <a href={mediaLink} target="_blank"><img className={className} src={imgSrc == "linkedIn" ? liImage : ghImage} alt={alt}></img></a>
    )
}

export default MediaLink;