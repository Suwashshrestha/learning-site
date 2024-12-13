import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Top from "./components/Top-header";
import Firstpage from "./components/Firstpage";
import Secondpage from "./components/Secondpage";
import Thirdpage from "./components/Thirdpage";
import Fourthpage from "./components/Fourthpage";
import Fifthpage from "./components/Fifthpage";
import Sixthpage from "./components/Sixthpage";
import Seventhpage from "./components/Seventhpage";
import Eightpage from "./components/Eightpage";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
 < Top />
      <section className="first">
      <img src="./slider-2-bg.jpg" alt="" className="first-background"/>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Firstpage />
      </section>
      <section className="second">
        <Secondpage />
      </section>
      <section className="third">
        <Thirdpage />
      </section>
      <section className="fourth">
        <Fourthpage />
      </section>
      <section className="fifth">
        <Fifthpage />
      </section>
      <section className="sixth">
        <Sixthpage />
      </section>
      <section className="seventh">
        <Seventhpage />
      </section>
      <section className="eight">
        <Eightpage />
      </section>
      <section className="footer">
        <Footer />
      </section>
    </Router>
  );
}

export default App;