import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = [' मयंक कश्यप ', 'Mayank Kashyap'];

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });


  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', mouseMove);
    // Cleanup listeners on component unmount
    return () => {
      window.removeEventListener('mousemove', mouseMove);
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
  // useScript('')


  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div className='pointer-events-none'>
      <div className='ss:block h-0 hidden'>
        <motion.div
          variants={variants}
          animate={'visible'}
          className='cursor pointer-events-none fixed z-30 rounded-full w-5 h-5 top-0 left-0 bg-[#131312b5]'
        ></motion.div>
      </div>

      <div id='hero' className='w-full h-[100vh] justify-center z-10 flex flex-col items-center'>
        <h1 className=' overflow-visible font-caveat px-3 font-bold ss:text-[130px] text-[60px] herotext text-center '>

          {/* मयंक कश्यप */}
          Mayank Kashyap
          {/* <TextTransition delay={1} className='font-mont' springConfig={presets.gentle}>{TEXTS[index % TEXTS.length]}</TextTransition> */}

        </h1>
        
        <p className='max-w-[600px]  sm:text-[36px] text-[25px] font-poppins text-center pt-4'>
          An Engineering Student & <br /> Web Developer.
        </p>
      </div>
    </div>
  );
};

export default Hero;
