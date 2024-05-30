import React from 'react';
import { useSpring, animated } from 'react-spring';

const SmoothAnimation = () => {
  const styles = useSpring({
    from: { transform: 'translateX(-100%)' },
    to: { transform: 'translateX(0%)' },
    config: { duration: 3000 }, // Adjust duration for smoother or faster animation
  });

  return (
    <animated.div
      style={{
        ...styles,
          width: '100%',
        backgroundColor: 'gray',
        height: '50px', 
      }}
    >
      <h1>Smooth Animation</h1>
    </animated.div>
  );
};

export default SmoothAnimation;