import React from 'react'
import { useScroll, useTransform, motion } from "framer-motion";

const About = () => {
    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [0, 1], [-200, 1000]);

    return (
        <div id='about' className='sm:h-[80vh] pointer-events-none h-fit w-full overflow-hidden'>
            <div className='flex lg:flex-row flex-col items-center'>
                <motion.h1 style={{ x }} className='sm:text-[240px] text-[100px] top-0 left-[-200px] text-[#0000004d] font-bold font-poppins'>About.</motion.h1>
                <p className=' sm:text-[30px] text-[23px] px-20 lg:px-10'>

                    A music enthusiast deep into DHH, and a gym guy who knows how to code some lines while pursuing engineering at NIT Surat.
                </p>
            </div>
        </div>
    )
}

export default About