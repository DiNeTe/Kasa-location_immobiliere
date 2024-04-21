import React, { useState } from "react";

type SlideshowProps = {
  images: string[]; // Doit être un tableau de chaînes
};

const SlideShow: React.FC<SlideshowProps> = ({ images }) => {
  // Déstructuration de props
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Le return avec le JSX doit être ici
  return (
    <div className="slideshow-container">
      <div className="nav-btn">
        <button className="prev-btn" onClick={goToPrevious}>
          <img src="/gotoprev.svg" alt="Previous" />
        </button>
        <button className="next-btn" onClick={goToNext}>
          <img src="/gotonext.svg" alt="Next" />
        </button>
      </div>
      <img
        className="slideshow-image"
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex}`}
      />
    </div>
  );
};

export default SlideShow;
