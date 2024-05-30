import './Counter.css';
import React,{useState,useEffect} from 'react';
import { Button, Stack } from '@mui/material';
import { useSpring, animated } from 'react-spring';
import {Typography }from '@mui/material';
function Counter() {
  const [count,setCount]=useState(() => {
    
    const storedCount = localStorage.getItem('count');
    return storedCount ? parseInt(storedCount, 10) : 0;
  });

   useEffect(() => {
    localStorage.setItem('count', count.toString());
  }, [count]);


  const { level } = useSpring({
    level: count * 10, 
  });


   const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  const reset = () => {
    setCount(0);
  };
  return (
    <animated.div  className="counter-box"   
        style={{
          background: level.interpolate(level => `linear-gradient(to top, #e66465 ${level}%,#9198e5)`),
        }}>
       
      <div className="counter-content">
        <div className="counter-display">
          <Typography variant="h4" component="div">
            {count}
          </Typography>
        </div>
         <Typography variant="h4" gutterBottom>
          Counter
        </Typography>
        <Stack spacing={4} direction="row">
         <Button variant='contained' onClick={increment} style={{ backgroundColor: '#AD88C6' }}>+</Button>
         <Button variant='contained' onClick={reset} style={{ backgroundColor: '#AD88C6' }}>RESET</Button>
         <Button variant='contained' onClick={decrement} style={{ backgroundColor: '#AD88C6' }}>-</Button>
        </Stack>
      </div>
      </animated.div>
    
  );
}

export default Counter;
