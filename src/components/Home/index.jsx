import coiled_arrow from "../../img/coiled_arrow.svg";
import illustrationHome from "../../img/img_illustrative_1.svg";
import { FiDownload } from "react-icons/fi";
import { BsArrowDown } from "react-icons/bs";
import Button from "../Button";

import "./index.scss";

const Home = () => {
  return (
    <section id="home">
      <a href="#about" className="arrow-down">
        <BsArrowDown />
      </a>
      <div className="side-left">
        <img className="illustrative" src={coiled_arrow} alt="Ilustration" />
        <div>
          <h1>
            Creative Ui <br />
            <span className="text-color">Designer</span>
          </h1>
          <div className="btn-actions">
            <Button text="Hire me" bgColor="secondary-color" href="contact" />
            <Button
              text="Download CV"
              bgColor="terciary-color"
              icon={<FiDownload />}
            />
          </div>
        </div>
      </div>
      <div className="side-right">
        <img src={illustrationHome} alt="Ilustration" />
      </div>
    </section>
  );
};

export default Home;
