import React, { useEffect, useRef } from 'react';

const ScrollingDiv = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const scroll = () => {
      container.scrollTo({
        left: container.scrollLeft + 1,
        behavior: 'smooth',
      });

      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      }
    };

    const interval = setInterval(scroll, 20);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="container" ref={containerRef}>
      {[...Array(10)].map((_, index) => (
        <div className="item" key={index}>{`Div ${index + 1}`}</div>
      ))}
    </div>
  );
};

export default ScrollingDiv;
