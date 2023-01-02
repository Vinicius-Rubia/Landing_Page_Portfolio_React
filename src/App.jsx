import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import arrow from "./img/icon_arrow.svg";

import "./styles/app.scss";

function App() {
  return (
    <div className="container">
      <a href="#">
        <img className="arrow" src={arrow} alt="Arrow" />
      </a>
      <Header />
      <Home />
      <About />
      <Jobs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
