import React from 'react';
import { useSpring, animated } from 'react-spring';

const Bezeircurve = () => {
  const styles = useSpring({
    from: { marginTop: '100px', opacity: 0 },
    to: { marginTop: '0px', opacity: 1 },
    config: { duration: 3000, tension: 100, friction: 20 }, // Adjust tension and friction for the desired Bezier curve
  });

  return (
    <animated.div
      style={{
        ...styles,
        width: '100%',
        backgroundColor: 'gray',
      }}
    >
     <h1>Hello world!</h1>
    </animated.div>
  );
};

export default Bezeircurve;
