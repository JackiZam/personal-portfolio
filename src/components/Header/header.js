import React from 'react';
import './header.css';

const Header = () => {
  return (
    <section name='header' id='header'>
      <h3 className='descriptorWrapper'>
        <span className='topDescriptors'>Student</span>
        <span className='topDescriptors'>Programmer</span>
        <span className='topDescriptors'>Learner</span>
        <span className='topDescriptors'>Dreamer</span>
        <span className='topDescriptors'>Tech Enthusiast</span>
      </h3>
      <h1 className='name main'>Hi!   I'm Jacqueline Zamitalo</h1>
      <h3 className='descriptorWrapper'>
          <span className='bottomDescriptors'>Cinephile</span>
          <span className='bottomDescriptors'>Reader/Writer</span>
          <span className='bottomDescriptors'>Gamer</span>
          <span className='bottomDescriptors'>Sports Lover</span>
      </h3>
      <div className='headerLinks'>
        <a href="https://1drv.ms/w/s!ApZuCnEE6ysdhkv96vdWFxJG9pUl?e=Fr5CYg" className='headerLink' target="_blank">My Resume</a>
        <a href="#contact" className='headerLink'>Contact Me</a>
      </div>
    </section>
  )
}

export default Header