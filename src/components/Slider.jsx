import React, { useState } from "react";
 // Import the CSS file for styling

const Slider = () => {
  const items = [
    {
      title: "Web Development Freelancers",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Small Housing & Domain Registration Companies",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Company Registries",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      title: "Small Digital Agencies",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  return (
    <div className="slider">
      <h2>Resellme's Use Cases</h2>
      <div className="slider-content">
        <button className="arrow" onClick={prevSlide}>
          &larr;
        </button>
        <button className="arrow" onClick={nextSlide}>
          &rarr;
        </button>
        <div className="slider-item">
          <div className="icon-circle">{/* Placeholder for the icon */}</div>
          <h3>{items[currentIndex].title}</h3>
          <p>{items[currentIndex].description}</p>
          <button className="read-more">READ MORE</button>
        </div>
        <div className="slider-item">
          <div className="icon-circle">{/* Placeholder for the icon */}</div>
          <h3>{items[currentIndex].title}</h3>
          <p>{items[currentIndex].description}</p>
          <button className="read-more">READ MORE</button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
