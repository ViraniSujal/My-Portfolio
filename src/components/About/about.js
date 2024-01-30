import React from 'react'
import './about.css'
import AOS from 'aos';
import aboutsvg from '../../assets/illustarator/aboutsvg.svg'

const About = () => {
  return (
    <>
    <section id="about" >
    <hr class="rounded" data-aos="zoom-in" />
    <h1>About Me</h1>
    <div className="section">
        <img className='aboutImg' src={aboutsvg} data-aos="fade-in"></img>
        <div className="card" data-aos="slide-up">
             <p className='about_p'>I am Sujal Virani, a proficient web developer currently pursuing Information Technology at the Gandhinagar Institute of Technology. With a commendable CGPA of 	7.13, I possess a strong grasp of web technologies, including HTML, CSS, JavaScript, and React.js. <br />

My expertise extends beyond technical skills; I bring an outgoing personality and excellent customer service abilities to team environments. <br />
Passionate and curious about programming, I have successfully built numerous projects using the aforementioned technologies, showcasing my dedication and proficiency in the field. <br />
                        </p>
        
    </div>
    </div>
    </section>
    </>
  )
}
AOS.init({
  offset: 100,
  duration: 1000,
});
export default About
