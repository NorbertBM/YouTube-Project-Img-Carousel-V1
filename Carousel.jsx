import React, { useState, useEffect } from "react";
// import JavaScript from "./img/JavaScrip.jpg";

export default function Carousel({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [pauseAutoPlay, setPauseAutoPlay] = useState(true);

  // auto play

  useEffect(() => {
    const interval = setInterval(() => {
      pauseAutoPlay &&
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);

      setFade(true);
    }, 2500);
    return () => clearInterval(interval);
  });

  // Next & Prev func

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    setPauseAutoPlay(false);
  };
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1) % data.length);
    setPauseAutoPlay(false);
  };
  return (
    <div className="carousel">
      <img
        src={data[currentIndex].img}
        alt="carousel-img"
        className={"carousel-img " + (fade && "fade")}
      />
      <div className="carousel-details">
        <h2 className="carousel-title">
          {data[currentIndex].title ? data[currentIndex].title : "Title"}
        </h2>
        <p className="carousel-text">
          {data[currentIndex].text ? data[currentIndex].text : "Text"}
        </p>
        <a
          // href="https://norbertbm.com"
          href={data[currentIndex].link}
          className="start-button"
          target="_blank"
        >
          Start to learn
        </a>
      </div>
      <button className="carousel-button prev-button" onClick={handlePrev}>
        {" "}
        Prev
      </button>{" "}
      <button className="carousel-button next-button" onClick={handleNext}>
        {" "}
        Next
      </button>
    </div>
  );
}
