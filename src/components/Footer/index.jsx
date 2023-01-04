import Home from "../../img/icon_home.svg";
import Phone from "../../img/icon_phone.svg";
import User from "../../img/icon_user.svg";
import Facebook from "../../img/icon_facebook.svg";
import Instagram from "../../img/icon_instagram.svg";
import Twitter from "../../img/icon_twitter.svg";
import Youtube from "../../img/icon_youtube.svg";

import "./index.scss";

const Footer = () => {
  return (
    <footer id="footer">
      <ul className="menu-footer">
        <li>
          <a href="#home">
            <img src={Home} alt="Home" /> Home
          </a>
        </li>
        <li>
          <a href="#about">
            <img src={User} alt="About me" /> About me
          </a>
        </li>
        <li>
          <a href="#contact">
            <img src={Phone} alt="Contact" /> Contact
          </a>
        </li>
      </ul>
      <ul className="social-media">
        <li>
          <a href="#"><img src={Facebook} alt="Facebook" /></a>
        </li>
        <li>
          <a href="#"><img src={Instagram} alt="Instagram" /></a>
        </li>
        <li>
          <a href="#"><img src={Twitter} alt="Twitter" /></a>
        </li>
        <li>
          <a href="#"><img src={Youtube} alt="Youtube" /></a>
        </li>
      </ul>
      <p className="copyright">Terms of Service - Privacy Policy</p>
    </footer>
  );
};

export default Footer;
