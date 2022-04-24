import About from "components/about/About";
import Contact from "components/contact/Contact";
import Footer from "components/footer/Footer";
import Home from "components/home/Home";
import Magazine from "components/magazine/magazine";
import Services from "components/services/Services";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";

import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/magazine" element={<Magazine />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
