import React, { useEffect, useRef } from 'react'; 

const ImageScroller = ({ images }) => {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    const imageCount = images.reduce((count, carousel) => count + carousel.length, 0);
    let animationFrameId;
    let scrollAmount = 0;

    const scrollImages = () => {
      const keyframes = `@keyframes scrollAnimation {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-100%);
        }
      }`;
    
      const styleSheet = document.createElement('style');
      styleSheet.type = 'text/css';
      styleSheet.innerText = keyframes;
    
      const existingStyleSheet = document.querySelector('style[data-scroll-animation]');
      if (existingStyleSheet) {
        existingStyleSheet.remove();
      }
    
      styleSheet.setAttribute('data-scroll-animation', true);
      document.head.appendChild(styleSheet);
    
      scroller.style.animation = 'scrollAnimation linear infinite';
      scroller.style.animationDuration = `${scroller.scrollWidth / 100}px`;
    };
    

    animationFrameId = requestAnimationFrame(scrollImages);

    return () => cancelAnimationFrame(animationFrameId);
  }, [images]);

  return (
    <div className="image-scroller">
      <div className="scroller" ref={scrollerRef}>
        {images.map((carousel, index) => (
          <div key={index}>
            {carousel.map((image, subIndex) => (
              <img key={subIndex} src={image} alt={`Image ${subIndex + 1}`} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageScroller;
