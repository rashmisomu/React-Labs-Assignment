import React from 'react';
import { useSpring, animated } from 'react-spring';



const FluidAnimation = () => {
  const styles = useSpring({
    from: { opacity: 0, transform: 'scale(0)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { duration:3000,tension: 100, friction: 10 }, // Adjust tension and friction for desired fluidity
  });

  return (
    <animated.div style={{ ...styles,
        width: '100%',
        backgroundColor: 'gray',}}>
      <h1>Fluid Animatoin</h1>
    </animated.div>
  );
};

export default FluidAnimation;
