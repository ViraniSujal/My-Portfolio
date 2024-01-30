import React from 'react'
import './projects.css'
import iweatherImg from '../../assets/project images/i weather.png'
import todolistImg from '../../assets/project images/TodolistImg.png'
import ngoImg from '../../assets/project images/NgoImg.png'
import portfolioImg from '../../assets/project images/Portfolio.png'

const Projects = () => {
  return (
    <>
      <section id='projects'>

        <h1>
          Projects
        </h1>
        <div className="section">
          <div className="Card1">
            <img className='My Portfolio' src={portfolioImg} ></img>
            <div className="Card1__content">
              <p className="Card1__title">My Portfolio</p>
              <p className="Card1__description">My portfolio website is a personalized space that showcases my skills, projects, and experiences. It serves as a digital representation of my professional identity, allowing visitors to connect with me and explore mine work.</p>
              <a href="https://viranisujal.github.io/Weather-App/">
                <button className="Card1__button">
                  Live Demo
                </button>
              </a>
              <a href="https://github.com/ViraniSujal/Weather-App">
                <button className="Card1__button secondary">Source Code</button>
              </a>
            </div>
          </div>
          <div className="Card1">
            <img className='iweatherImg' src={iweatherImg} ></img>
            <div className="Card1__content">
              <p className="Card1__title">iWeather App</p>
              <p className="Card1__description">This weather app is designed to deliver precise and up-to-date weather information for any city that users search for.</p>
              <a href="https://viranisujal.github.io/Weather-App/">
                <button className="Card1__button">
                  Live Demo
                </button>
              </a>
              <a href="https://github.com/ViraniSujal/Weather-App">
                <button className="Card1__button secondary">Source Code</button>
              </a>
            </div>
          </div>


          <div className="Card1">
            <img className='NgoImg' src={ngoImg} ></img>
            <div className="Card1__content">
              <p className="Card1__title">NGO Website</p>
              <p className="Card1__description">The NGO website serves as a platform to connect individuals with NGOs, fostering a sense of community engagement and providing a channel for users to contribute funds to support various causes.</p>
              <a href="https://github.com/ViraniSujal/Ngo-Onepage-Template">
                <button className="Card1__button secondary">Source Code</button>
              </a>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="Card1">
            <img className='To-DoImg' src={todolistImg} ></img>
            <div className="Card1__content">
              <p className="Card1__title">To-Do List App</p>
              <p className="Card1__description">The To-Do List app is designed to help users organize their tasks efficiently. It serves as a digital task manager, allowing users to input, and manage their to-do items conveniently.</p>
              <a href="https://github.com/ViraniSujal/To-Do-List">
                <button className="Card1__button secondary">Source Code</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects
