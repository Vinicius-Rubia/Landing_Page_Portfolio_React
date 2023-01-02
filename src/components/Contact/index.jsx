import Keyboard from "../../img/keyboard.svg";
import Mail from "../../img/icon_mail.svg";
import Illustration from "../../img/img_illustrative_3.png";
import Form from "../Form";

import "./index.scss";

const Contact = () => {
  return (
    <section id="contact">
      <div className="side-left">
        <h2>
          Got a project in <span className="text-color">mind?</span>
        </h2>
        <img src={Illustration} alt="Illustration" />
      </div>
      <div className="side-right">
        <Form />
      </div>
    </section>
  );
};

export default Contact;
