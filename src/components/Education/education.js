import React from 'react'
import './education.css'
import AOS from 'aos';
import educationsvg from '../../assets/illustarator/educationsvg.svg'
import capsvg from '../../assets/illustarator/capsvg.svg'

const Education = () => {
  return (
    <>
      <section id='education'>
        <h1>Education</h1>
        <div className="Section">

          <div className="Card" data-aos="slide-up">
            <img className='Ecapimg' src={capsvg} alt="Reactsvg" />
            <div className="container">
              <p>
                2016 - 2018
              </p><br />
              <h3>
                SSC, School
              </h3>
              <p>
                Panchamrut international public school, Ahmedabad
              </p>
            </div>
            <hr class="divider" data-aos="zoom-in" />
            <img className='Ecapimg' src={capsvg} alt="Reactsvg" />
            <div className="container">
              <p>
                2018 - 2020
              </p><br />
              <h3 >
                HSC, Science
              </h3>
              <p>
                Panchamrut international public school, Ahmedabad
              </p>
            </div>
            <hr class="divider" data-aos="zoom-in" />
            <img className='Ecapimg' src={capsvg} alt="Reactsvg" />
            <div className="container">
              <p>
                2020 - 2024
              </p><br />
              <h3>
                Bachelor's Degree
              </h3>
              <p>
                Gandhinagar Institute Of Technology, Gandhinagar
              </p>
            </div>

          </div>
          <img className='Eimg' src={educationsvg} alt="Reactsvg " data-aos="fade-in" />
        </div>
      </section>
    </>
  )
}

AOS.init({
  offset: 150,
  duration: 2000,
});

export default Education
