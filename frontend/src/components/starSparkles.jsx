import React from 'react';

const StarSparkles = ({ count = 20 }) => {
  const stars = Array.from({ length: count }).map((_, i) => {
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const delay = Math.random() * 2;

    return (
      <div
        key={i}
        className="star"
        style={{
          top: `${top}%`,
          left: `${left}%`,
          animationDelay: `${delay}s`
        }}
      />
    );
  });

  return <div className="stars absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-10">{stars}</div>;
};

export default StarSparkles;
