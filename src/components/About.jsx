import React from 'react'
import men from "../assets/men.jpeg";
import tecnofest from "../assets/tecnofest.jpeg";
import bilim from "../assets/bilim.jpeg";

function About() {
    return (
        <div id='about'>
            <div className="container">
                <div className="about">
                    <div className="about__me">
                        <h1>About Me</h1>
                        <div className="about__imgs">
                            <div className="about__me__img img__bilim"> <img src={bilim} alt="Example" /></div>
                            <div className="about__img__colage">
                                <div className="about__me__img img__tec"> <img src={tecnofest} alt="Example" /></div>
                                <div className="about__me__img img__men"> <img src={men} alt="Example" /></div>
                            </div>

                        </div>


                    </div>
                    <div className="about__text">
                        <h2>I am a Frontend Developer based in Azerbaijan.</h2>
                        <p>I am a 23-year-old frontend developer from Azerbaijan with experience in over 100 diverse web projects. I also work as a Technology Instructor at the Quba branch in Azerbaijan, teaching children aged 6–14 programming and robotics. I have guided students through Scratch, mobile app development, Python, LEGO, mechanical motorized toys, and building various types of robots.

                            In 2025, I participated in TechnoFest as part of the Bilim Azerbaijan team, gaining valuable experience in innovative technologies and collaborative projects with young talents. My goal is to inspire young minds while applying my technical expertise to real-world projects.</p>                    </div>
                </div>

            </div>
        </div>
    )
}

export default About

