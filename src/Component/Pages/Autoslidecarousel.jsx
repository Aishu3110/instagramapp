import React, { useState, useEffect } from 'react';
import  Carousel  from 'react-material-ui-carousel';

const Autoslidecarousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // Calculate the next index
      const nextIndex = (activeIndex + 1) % images.length;
      setActiveIndex(nextIndex);
    }, 3000); // Change slide every 3 seconds (adjust as needed)

    return () => {
      clearInterval(timer); // Cleanup the timer on component unmount
    };
  }, [activeIndex, images]);

  return (
    <Carousel
      autoPlay={true} // Disable user interaction (no buttons/icons)
      animation="slide"
      index={activeIndex}
      timeout={500}
    >
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Slide ${index}`} />
      ))}
    </Carousel>
  );
};

export default Autoslidecarousel;