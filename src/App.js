//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Slider from  "./components/Slider";
import Service from  "./components/Services";
import Footer from  "./components/Footer";
import ContactInfo from  "./components/Contact";

const Home = () => {};
const About = () => {};
const Services = () => {};
const Contact = () => {};

function App() {
  return (
    <Router>
    <Header />
    <Slider />
    <Service />
    <Footer />
    <ContactInfo />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
  );
}

export default App;
