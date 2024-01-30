import React from 'react'
import contactsvg from '../../assets/illustarator/contactsvg.svg'
import './contact.css'

const Contact = () => {
    return (
        <>
            <section id='contact'>
                <h1>
                    Contact Me
                </h1>
                <div className="Section-C">
                    <img className='contactsvg' src={contactsvg} alt="Reactsvg " />
                    <div className="container-contact">

                        <h2>Contact Me on E-mail
                            <br />
                            <a href="mailto:sujalvirani0@gmail.com" className='emaillink'>
                                sujalvirani0@gmail.com
                            </a></h2>
                        <div className="SocialIcon_C">

                            <a href="https://wa.me/7016572523">
                                <i class="fa-brands fa-whatsapp"></i>
                            </a>


                            <a href="mailto:sujalvirani0@gmail.com">
                                <i class="fa-regular fa-envelope"></i>
                            </a>


                            <a href="https://www.linkedin.com/in/sujal-virani-86104827b/">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>


                            <a href="https://github.com/ViraniSujal">
                                <i className="fa-brands fa-github"></i>
                            </a>


                            <a href="https://www.facebook.com/sujal.virani.376">
                                <i className="fa-brands fa-facebook"></i>
                            </a>


                            <a href="https://www.instagram.com/svirani47/">
                                <i className="fa-brands fa-instagram"></i>
                            </a>

                        </div>

                    </div>


                </div>
            </section>
        </>
    )
}

export default Contact
