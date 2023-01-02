import Button from "../Button";
import Send from "./../../img/icon_send.svg";

import "./index.scss";

const Form = () => {
  return (
    <form id="form">
      <div className="form-input-box">
        <div className="input-box">
          <label htmlFor="name">Your name</label>
          <input type="text" placeholder="Name" id="name" required />
        </div>
        <div className="input-box">
          <label htmlFor="email">Your email</label>
          <input type="email" placeholder="Email" id="email" required />
        </div>
      </div>
      <div className="form-textarea-box">
        <div className="input-box">
          <label htmlFor="message">Your message</label>
          <textarea
            type="text"
            placeholder="Message"
            id="message"
            rows="22"
            required
          ></textarea>
        </div>
      </div>
      <div className="btn-submit">
        <button type="submit">
          Send Message <img src={Send} alt="" />
        </button>
      </div>
    </form>
  );
};

export default Form;
