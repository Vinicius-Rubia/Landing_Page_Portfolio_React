import "./index.scss";

const Button = ({ text, bgColor, icon }) => {
  return (
    <div className="btn">
      {icon ? (
        <a href="#" className={bgColor}>
          {text} <img src={icon} alt="ícone" />
        </a>
      ) : (
        <a href="#" className={bgColor}>
          {text}
        </a>
      )}
    </div>
  );
};

export default Button;
