import Music from "../../img/icon_music.svg";
import Lamp from "../../img/icon_lamp.svg";
import Arrow from "../../img/icon_arrow_2.svg";
import Illustration from "../../img/img_illustrative_2.svg";

import "./index.scss";

const About = () => {
  return (
    <section id="about">
      <img className="music-illustration" src={Music} alt="Illustration" />
      <img className="arrow-illustration" src={Arrow} alt="Illustration" />
      <div className="side-left">
        <div>
          <h2>
            About <span className="text-color">me</span>
          </h2>
          <img src={Lamp} alt="Illustration" />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Curabitur tempus urna at turpis condimentum
          lobortis.... <strong>Read more</strong>
        </p>
      </div>
      <div className="side-right">
        <img src={Illustration} alt="Illustration" />
      </div>
    </section>
  );
};

export default About;
