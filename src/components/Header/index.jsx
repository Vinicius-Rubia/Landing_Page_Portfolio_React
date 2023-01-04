import Home from "../../img/icon_home.svg";
import Phone from "../../img/icon_phone.svg";
import User from "../../img/icon_user.svg";

import "./index.scss";

const Header = () => {
  return (
    <header id="header">
      <a href="/" className="title">
        SaulDesign
      </a>
      <nav>
        <ul className="list-menu">
          <li>
            <a href="#home">
              <img src={Home} alt="Home" /> Home
            </a>
          </li>
          <li>
            <a href="#about">
              <img src={User} alt="About" />
              About Me
            </a>
          </li>
          <li>
            <a href="#contact">
              <img src={Phone} alt="Contact" />
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
