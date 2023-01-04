import { FiHome, FiPhone, FiUser } from "react-icons/fi";

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
              <FiHome /> Home
            </a>
          </li>
          <li>
            <a href="#about">
              <FiUser />
              About Me
            </a>
          </li>
          <li>
            <a href="#contact">
              <FiPhone />
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
