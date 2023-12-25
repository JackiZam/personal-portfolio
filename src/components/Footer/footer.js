import React from "react";
import './footer.css'; 
import MediaLink from "./MediaLink/mediaLink";
import "../../assets/images/linkedIn_icon.png";
import "../../assets/images/github_icon.png";

const Footer = () => {
    return (
        <section id="footer">
            <div className="footerContent">
                <MediaLink mediaLink="https://www.linkedin.com/in/Jacqueline-Zamitalo/" className="lnLink" imgSrc="linkedIn" alt="LinkedIn Icon"></MediaLink>
                <MediaLink mediaLink="https://www.github.com/JackiZam" className="ghLink" imgSrc="GitHub" alt="GitHub Icon"></MediaLink>
                <p>Created by Jacqueline Zamitalo</p>
            </div>
        </section>
    )
}

export default Footer;