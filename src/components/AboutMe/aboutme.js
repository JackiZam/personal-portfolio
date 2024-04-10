import React from 'react'
import './aboutme.css'
import Navbar from '../NavBar/navbar'
import Headshot from "../../assets/images/JZ_headshot.jpeg";
import miniPhoto1 from "../../assets/images/miniImg1.JPG";
import miniPhoto2 from "../../assets/images/miniImg2.jpg";
import { motion } from "framer-motion";
import Collapsible from '../../components/Collapsible/collapsible';
import EducationCard from '../AboutMeCards/EducationCard/education';
import SkillsCard from '../AboutMeCards/SkillsCard/skills';

const AboutMe = () => {
  return (
    <section id='aboutMe'>
      <div name='aboutMe' id='pageLayout'>
        <div className='amPictures'>
            <img className="picture main" src={Headshot} alt="Headshot of Jacqueline Zamitalo"/>
            <div className='miniPhotos'>
              <img className="picture mini" src={miniPhoto1} alt="Jacqueline Zamitalo in Skydiving Gear"/>
              <img className="picture mini" src={miniPhoto2} alt="Jacqueline Zamitalo with her dog, Bruno"/>
            </div>
        </div>
        <div className='amText'>
          <h1 className='name sectionTitle'>About Jacqueline</h1>
          <div className='bio'>
            <p>Jacqueline is a second-year Computer Science major and International Engineering minor in the Burnett Honors College at the University of Central Florida with a passion for programming and creating.</p>
            <p>Some of her passions and hobbies include travelling, watching movies, writing, reading, language learning, and playing piano!</p>
          </div>
          <Collapsible className='collapsible education' isActive={false} sectionTitle = "Education" component={<EducationCard></EducationCard>}/>
          <p className='spacer'> </p>
          <Collapsible className='collapsible skills' isActive={false} sectionTitle = "Skills" component={[
            <SkillsCard category="Programming Languages" skills="C, Java, HTML, CSS, JavaScript, Python, Flutter, C++"></SkillsCard>,
            <SkillsCard category="Software Tools" skills="Linux OS, Git, GitHub, VSCode, Microsoft Office, Arduino IDE"></SkillsCard>, 
            <SkillsCard category="Languages" skills="English (Fluent), Spanish (B1), French (A2), Zulu (A1)"></SkillsCard>
          ]}/>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;