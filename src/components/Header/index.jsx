import "./index.scss";

const Header = () => {
  return (
    <header id="header">
      <a href="/" className="title">
        SaulDesign
      </a>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
