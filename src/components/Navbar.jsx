
import Animation from "../components/Animation";
import { Link } from "react-scroll";
function Navbar() {
    return (
        <nav>
            <div className="container">
                <div className="navbar">
                    <div className="nav__logo">
                        <div className="nav__text">
                            Vahida <span>Rasulova</span>
                        </div>
                        <div className="animation__nav">
                            <Animation />
                        </div>

                    </div>
                    <ul>
                        <li>     <Link
                            to="home"
                            smooth={true}
                            duration={500}
                            offset={-70}
                        >
                            Home
                        </Link>
                            <div className="nav__crucle"></div>
                        </li>
                        <li>     <Link to="about" smooth={true} duration={500} offset={-70}>
                            About
                        </Link>
                            <div className="nav__crucle"></div></li>
                        <li>  <Link to="contact" smooth={true} duration={500} offset={-70}>
                            Contact
                        </Link>
                            <div className="nav__crucle"></div></li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
