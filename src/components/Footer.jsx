import React from 'react'
// import Contact from "../pages/Contact";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import Animation from "../components/Animation";
function Footer() {
    return (
        <div>
            <div className="container">
                <div className="footer__contact" id='contact'>
                    <div className="footer__contact__text">
                        <div className="animation__footer">
                            <Animation />
                        </div>
                        <h2>Vahida <span> Rasulova</span></h2>
                    </div>
                    <ul>
                        <a href="https://github.com/VahidaRasulova"> <li><span><IoLogoGithub /></span></li></a>
                        <a href="https://www.linkedin.com/in/VahidaRasulova"> <li><span><FaLinkedinIn /></span></li></a>
                        <a href="https://wa.me/%3C+994503439660%3E"> <li><span><FaWhatsapp /></span></li></a>
                        <a href="mailto:vahidaresulova@gmail.com"><li><span><IoIosMail /></span></li></a>

                    </ul>

                </div>
                <footer>
                    <h5>© 2026 Vahida Rasulova</h5>
                </footer>
            </div>

        </div>
    )
}

export default Footer