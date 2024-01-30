import React from 'react'
import './intro.css'
import bg from '../../assets/profile photo.png'
import resume from '../../assets/resume/resume.pdf'
const Intro = () => {
  return (
    <>
    <section id="intro">
        <div className="introContant">
              <img src={bg} alt="Profile" className='bg'/>
              <span className="hello">Hello,</span>
              <span className="introText">I'm Sujal <br /></span>
              <span className='introWork'>Web developer</span>
              <a href={resume} download="Resume"><button className="btn">Resume</button></a>
        </div>
    </section>
    </>
  )
}

export default Intro
