import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [isMouseInWindow, setIsMouseInWindow] = useState(true);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const mouseLeave = () => {
      setIsMouseInWindow(false);
    };

    const mouseEnter = () => {
      setIsMouseInWindow(true);
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseleave', mouseLeave);
    window.addEventListener('mouseenter', mouseEnter);

    // Cleanup listeners on component unmount
    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseleave', mouseLeave);
      window.removeEventListener('mouseenter', mouseEnter);
    };
  }, []);

  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
  };

  return (
    <>
      {isMouseInWindow && (
        <motion.div
          variants={variants}
          animate={isMouseInWindow ? 'visible' : 'hidden'}
          className='cursor pointer-events-none fixed z-30 rounded-full w-5 h-5 top-0 left-0 bg-[#131312b5]'
        ></motion.div>
      )}
      <div id='hero' className='w-full h-[100vh] justify-center z-10 flex flex-col items-center'>
        <h1 className='font-caveat px-3 font-bold sm:text-[130px] text-[80px] herotext text-center'>
          Mayank Kashyap
        </h1>
        <p className='max-w-[600px]  sm:text-[36px] text-[25px] font-poppins text-center '>
          An Engineering Student & <br /> Web Developer.
        </p>
      </div>
    </>
  );
};

export default Hero;
