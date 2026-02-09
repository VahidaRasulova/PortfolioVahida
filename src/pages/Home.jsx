import Navbar from "../components/Navbar";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import AnimationHeader from "../components/AnimationHeader";
import assupply from "../assets/assupply.az.png";
import hygge from "../assets/hygge.png";
import etrade from "../assets/etrade.png";
import anonimchat from "../assets/anonimchat.png";
import { TiLocationArrowOutline } from "react-icons/ti";
import { IoLogoGithub } from "react-icons/io";
import About from "../components/About.jsx";
import { Link } from "react-scroll";
function Home() {
  return (

    <>
      <header id="home">
        <div className="container">
          <div className="header">
            <div className="header__about">
              <h1> Hi, I AM <br /> VAHIDA RASULOVA</h1>
              <p>I’m a front-end developer who loves crafting user-friendly and accessible websites with modern design.</p>
              <div className="header__contact__me">
                <div className="btn__header__box">
                  <button className="header__btn">
                    <Link
                      to="contact"
                      smooth={true}
                      duration={500}
                      offset={-70}
                    >
                      Contact me
                    </Link></button>
                  <div className="crucle">

                  </div>
                  <div className="crucle2">

                  </div>
                </div>


                <div className="header__contact__icon">
                  <a href="https://github.com/VahidaRasulova">
                    <div className="media__icon">

                      <span><FaGithub /></span>
                      <div className="curcle_icon"></div>
                    </div> </a>
                  <a href="https://www.linkedin.com/in/VahidaRasulova">
                    <div className="media__icon">
                      <span className="span2"><FaLinkedin /></span>
                      <div className="curcle_icon"></div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="header__img">
              <AnimationHeader />
            </div>
          </div>
        </div>
      </header>
      <section>
        <div className="container">
          <div className="projects">
            <div className="project">
              <div className="project__img__container">
                <div className="project__img">
                  <img src={assupply} alt="Example" />
                </div>
              </div>
              <div className="project__text">
                <h2>AS SUPPLY </h2>
                <p>I designed and developed the frontend of the AS SUPPLY website, showcasing high-quality and affordable construction materials. The site features product listings, categories, and highlighted projects such as Heydar Aliyev Center, Carpet Museum, and Water Sports Palace. This project demonstrates my ability to create clean, user-friendly, and responsive interfaces for real-world business websites.</p>
                <div className="project__info">
                  <h3>Project Info</h3>
                  <div className="project__info__text">
                    <h4>Year</h4>

                    <h4>2025</h4>
                  </div>
                  <div className="project__info__text">
                    <h4>Role</h4>
                    <h4>Front-end Developer</h4>
                  </div>

                </div>
                <div className="project__info__btn__box">
                  <a href="https://assupply.az/">
                    <button className="project__info__btn">Live Demo <span><TiLocationArrowOutline /></span></button>
                  </a>
                  {/* <button className="project__info__btn">See on Github <span><IoLogoGithub /></span></button> */}
                </div>
              </div>
            </div>
            <div className="project">

              <div className="project__text">
                <h2>Anonymous Chat Bot</h2>
                <p>I designed and developed the frontend and user interface for a Telegram-based anonymous dating chat bot. The bot randomly connects users for private one-to-one conversations, emphasizing anonymity, intuitive navigation, and a smooth chat experience. Users start as incognito and can choose to reveal their identity if both sides decide to continue the conversation. This project showcases my ability to create interactive, user-friendly interfaces for real-world applications.</p>
                <div className="project__info">
                  <h3>Project Info</h3>
                  <div className="project__info__text">
                    <h4>Year</h4>

                    <h4>2025</h4>
                  </div>
                  <div className="project__info__text">
                    <h4>Role</h4>
                    <h4>Front-end Developer</h4>
                  </div>

                </div>
                <div className="project__info__btn__box">
                  <a href="https://anonimchatt.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <button className="project__info__btn">
                      Live Demo <span><TiLocationArrowOutline /></span>
                    </button>
                  </a>
                  <a href="https://github.com/VahidaRasulova/Anonim__chat">                  <button className="project__info__btn">See on Github <span><IoLogoGithub /></span></button>
                  </a>
                </div>
              </div>
              <div className="project__img__container">
                <div className="project__img">
                  <img src={anonimchat} alt="Example" />
                </div>
              </div>
            </div>
            <div className="project">
              <div className="project__img__container">
                <div className="project__img">
                  <img src={hygge} alt="Example" />
                </div>
              </div>
              <div className="project__text">
                <h2>Hygge</h2>
                <p>I developed the frontend of a skincare e-commerce website featuring product categories, featured items, and on-sale sections. The site emphasizes high-quality products, easy returns, and excellent customer service, providing a smooth and user-friendly shopping experience.</p>
                <div className="project__info">
                  <h3>Project Info</h3>
                  <div className="project__info__text">
                    <h4>Year</h4>

                    <h4>2024</h4>
                  </div>
                  <div className="project__info__text">
                    <h4>Role</h4>
                    <h4>Front-end Developer</h4>
                  </div>

                </div>
                <div className="project__info__btn__box">
                  <a href="https://hyggeproject.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <button className="project__info__btn">
                      Live Demo <span><TiLocationArrowOutline /></span>
                    </button>
                  </a>
                  <a href="https://github.com/VahidaRasulova/Hygge">                  <button className="project__info__btn">See on Github <span><IoLogoGithub /></span></button>
                  </a>
                </div>
              </div>

            </div>
            <div className="project">

              <div className="project__text">
                <h2>E-Commerce Electronics Store</h2>
                <p>I developed the frontend of a modern electronics e-commerce website featuring product categories, promotional banners, hot deals, discount offers, and detailed product listings. The project focuses on creating a responsive, clean, and user-friendly interface that allows users to browse products easily and interact with shopping features smoothly.</p>
                <div className="project__info">
                  <h3>Project Info</h3>
                  <div className="project__info__text">
                    <h4>Year</h4>

                    <h4>2023</h4>
                  </div>
                  <div className="project__info__text">
                    <h4>Role</h4>
                    <h4>Front-end Developer</h4>
                  </div>

                </div>
                <div className="project__info__btn__box">
                  <button className="project__info__btn">Live Demo <span><TiLocationArrowOutline /></span></button>
                  <a href="https://github.com/VahidaRasulova/etrade"><button className="project__info__btn">See on Github <span><IoLogoGithub /></span></button></a>
                </div>
              </div>
              <div className="project__img__container">
                <div className="project__img">
                  <img src={etrade} alt="Example" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <About />
    </>
  );
}

export default Home;
