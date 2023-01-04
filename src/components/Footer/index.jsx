import {
  FiHome,
  FiPhone,
  FiUser,
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";

import "./index.scss";

const Footer = () => {
  return (
    <footer id="footer">
      <ul className="menu-footer">
        <li>
          <a href="#home">
            <FiHome /> Home
          </a>
        </li>
        <li>
          <a href="#about">
            <FiUser /> About me
          </a>
        </li>
        <li>
          <a href="#contact">
            <FiPhone /> Contact
          </a>
        </li>
      </ul>
      <ul className="social-media">
        <li>
          <a href="#">
            <FiFacebook />
          </a>
        </li>
        <li>
          <a href="#">
            <FiInstagram />
          </a>
        </li>
        <li>
          <a href="#">
            <FiTwitter />
          </a>
        </li>
        <li>
          <a href="#">
            <FiYoutube />
          </a>
        </li>
      </ul>
      <p className="copyright">Terms of Service - Privacy Policy</p>
    </footer>
  );
};

export default Footer;
