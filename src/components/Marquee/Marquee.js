import React, { useMemo } from 'react';
import './Marquee.css'; // Import the CSS file for the animation

const Marquee = ({ content }) => {
  const contentMultiplied = useMemo(() => {
    return (
      <div className='flex '>
        {Array(4)
          .fill(1)
          .map((id) => (
            <div key={id}>{content}</div>
          ))}
      </div>
    );
  }, [content]);
  return (
    <div className='marquee-wrapper italic'>
      <div className='marquee-content'>
        <span className='uppercase'>{contentMultiplied}</span>
      </div>
    </div>
  );
};

export default Marquee;
