import React, { useState, useEffect, useRef } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Carousel = ({ images, headings, links, autoPlay = false }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useMediaQuery('(max-width: 768px)'); // Set to the desired breakpoint


  useEffect(() => {
    let intervalId;
    if (autoPlay) {
      intervalId = setInterval(() => {
        setActiveIndex(activeIndex => (activeIndex + 1) % images.length);
      }, 5000);
    }
    return () => clearInterval(intervalId);
  }, [autoPlay, images.length]);

  const handleClick = index => {
    setActiveIndex(index);
  };

  return (
    <div className="partnerLogos-carousel">
      <div className="partnerLogos-carousel-inner">
        {images.map((group, index) => (
          <div
            key={index}
            className={`partnerLogos-carousel-item ${
              index === activeIndex ? 'active' : ''
            }`}
            style={isMobile ? { display: index === activeIndex ? 'block' : 'none' } : {}}
            >
           
          
            <h4 className="carousel-package-heading">{headings[index]}</h4>
            {group.map((img, i) => (
               <a key={i} href={links[index][i]} target="_blank" rel="noreferrer">
              <img
                key={i}
                src={img}
                alt={`slide-${i + 1}`}
                className="partnerLogos-carousel-image"
              />
              </a>
            ))}
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default Carousel;
