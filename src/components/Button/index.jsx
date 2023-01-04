import "./index.scss";

const Button = ({ text, bgColor, icon, href }) => {
  return (
    <div className="btn">
      {icon ? (
        <a href="#" className={bgColor}>
          {text} <img src={icon} alt="ícone" />
        </a>
      ) : (
        <a href={`#${href}`} className={bgColor}>
          {text}
        </a>
      )}
    </div>
  );
};

export default Button;
