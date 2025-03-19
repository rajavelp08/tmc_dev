//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Slider from  "./components/Slider";
import Service from  "./components/Services";
import Footer from  "./components/Footer";
import ContactInfo from  "./components/Contact";

const Home = () => <h2></h2>;
const About = () => <h2></h2>;
const Services = () => <h2></h2>;
const Contact = () => <h2></h2>;

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
