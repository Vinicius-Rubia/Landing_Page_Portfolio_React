import Header from "./components/Header";
import Home from "./components/Home";
import arrow from "./img/icon_arrow.svg";

import "./styles/app.scss";

function App() {
  return (
    <div className="container">
      {/* <a href="#">
        <img className="arrow" src={arrow} alt="Arrow" />
      </a> */}
      <Header />
      <Home />
    </div>
  );
}

export default App;
