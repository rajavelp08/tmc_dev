import React from "react";
import "../styles/Services.css"; // Import CSS for styling

// Import service images
import service1 from "../assets/pot4.jpg";
import service2 from "../assets/coffee.avif";
import service3 from "../assets/ms.avif";
import service4 from "../assets/frankie.avif";
import service5 from "../assets/ff.avif";
import service6 from "../assets/samosa.jpg";

const servicesData = [
  { id: 1, name: "10+ Tea's", image: service1 },
  { id: 2, name: "9+ Coffee's", image: service2 },
  { id: 3, name: "12+ Milk Shakes", image: service3 },
  { id: 4, name: "Frankie's", image: service4 },
  { id: 5, name: "French Fries", image: service5 },
  { id: 6, name: "20+ Snacks", image: service6 },
];

const Services = () => {
  return (
    <div id="services-section" className="services-container">
      <h2>Our Services</h2>
      <h4>Experience the ever-evolving dining journey at TeaMax Cafe Namakkal, where our range of delectable food and beverages is constantly enriched with new flavors and recipes. Have a Good Tea in Good Mood</h4>
      <div className="services-grid">
        {servicesData.map((service) => (
          <div className="service-card" key={service.id}>
            <img src={service.image} alt={service.name} />
            <h3>{service.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;