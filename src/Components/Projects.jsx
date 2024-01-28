import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button1, Button2 } from './Buttons'
import cryp from '../assets/cry.png'
import todo from '../assets/todo.png'
import mud from '../assets/mud.png'

const Projects = () => {

  const [p1, setp1] = useState(false)
  const [p2, setp2] = useState(false)
  const [p3, setp3] = useState(false)
  const [p4, setp4] = useState(false)


  return (
    <div id='project' className='w-full mb-20  min-h-[100vh] sm:px-20 px-4'>
      <div className='h-full'>
        <h1 className='sm:text-[90px] text-[60px]'>Projects.</h1>
        <motion.div layout className='w-full justify-center flex sm:flex-row flex-col h-fit items-center flex-wrap'>

          <motion.div
            layout
            transition={{ layout: { type: 'just' } }}
            onClick={() => { setp1(!p1) }}
            className={`${p1 ? "w-[90%] h-[90%]" : "sm:w-[40%] sm:h-[40%]"} ${(p2 | p3 | p4) ? "hidden" : "flex"} cursor-pointer md:flex-row flex-col bg-[#131312] py-10 text-[#fff] m-4  px-6 rounded-3xl`}>
            <div className='flex flex-col p-4 w-full'>
              <h1 className=' sm:text-[36px] text-[26px] '>Mern TODO App</h1>
              <p className='max-w-[500px] text-[18px] leading-7 my-4'> 🚀 Developed a dynamic Todo application using the MERN stack. What sets this app apart is its robust user authentication system, seamlessly integrated with Redux Toolkit for state management.</p>
              <div className={`${p1 ? "flex" : "hidden"} flex-col`}>
                <h2 className='font-semibold text-[23px] py-2'>Features</h2>
                <p className='leading-7'>
                  ✅ Securely manage todos with user authentication.
                  <br />
                  🔐 Seamless login and signup functions. <br />
                  🔄 Efficient state management. <br />
                  ✨ Task CRUD operations - Create, Read, Update, Delete. <br />
                  📱 Responsive design for a user-friendly experience.
                </p>
                <div className='flex flex-wrap pt-6'>
                  <div className={` rounded-md bg-[#8e8e8e] text-[18px] text-[#131312] flex items-center px-2 m-2`} >
                    <span className='' ><span className='text-[#4d4d4d] pr-1'>#</span>ReactJS</span>
                  </div>

                  <div className={` rounded-md bg-[#8e8e8e] text-[18px] text-[#131312] flex items-center px-2 m-2`} >
                    <span className='' ><span className='text-[#4d4d4d] pr-1'>#</span>NodeJS</span>
                  </div>

                  <div className={` rounded-md bg-[#8e8e8e] text-[18px] text-[#131312] flex items-center px-2 m-2`} >
                    <span className='' ><span className='text-[#4d4d4d] pr-1'>#</span>ExpressJS</span>
                  </div>

                  <div className={` rounded-md bg-[#8e8e8e] text-[18px] text-[#131312] flex items-center px-2 m-2`} >
                    <span className='' ><span className='text-[#4d4d4d] pr-1'>#</span>MongoDB</span>
                  </div>

                  <div className={` rounded-md bg-[#8e8e8e] text-[18px] text-[#131312] flex items-center px-2 m-2`} >
                    <span className='' ><span className='text-[#4d4d4d] pr-1'>#</span>Redux Toolkit</span>
                  </div>

                  <div className={` rounded-md bg-[#8e8e8e] text-[18px] text-[#131312] flex items-center px-2 m-2`} >
                    <span className='' ><span className='text-[#4d4d4d] pr-1'>#</span>Tailwind CSS</span>
                  </div>


                </div>
              </div>
            </div>
            <div className={`${p1 ? "flex" : "hidden"} w-full py-6 flex-col`}>
              <img className='' src={todo} alt="" />
              <div className='flex w-full ss:flex-row flex-col justify-start gap-6 items-center'>
                <Button1 />
                <Button2 />
              </div>
            </div>
          </motion.div>

          <motion.div
            layout
            transition={{ layout: { type: 'just' } }}
            onClick={() => { setp2(!p2) }}
            className={`${p2 ? "w-[90%] h-[90%]" : "sm:w-[40%] sm:h-[40%]"} ${(p3 | p1 | p4) ? "hidden" : "flex"} cursor-pointer md:flex-row flex-col bg-[#131312] py-10 text-[#fff] m-4  px-6 rounded-3xl`}>
            <div className='flex flex-col p-4 w-full'>
              <h1 className=' sm:text-[36px] text-[26px]  '>CrypTinu</h1>
              <p className='max-w-[500px] text-[18px] leading-7 my-4'>
                📈 Built a dynamic Crypto Tracking App with React, utilizing public APIs to display comprehensive details of crypto coins. 🪙 The app also features interactive graphs showcasing coin performance across various timelines.

              </p>
              <div className={`${p2 ? "flex" : "hidden"} flex-col`}>
                <h2 className='font-semibold text-[23px] py-2'>Features</h2>
                <p className='leading-7'>
                  📈 Real-time crypto data with up-to-date market prices.
                  <br /> 📊 Interactive graphs for visualizing coin performance.
                  <br /> 🌐 Responsive design for seamless use on various devices.
                  <br /> 🔄 Real-time updates to keep users informed on market changes.

                </p>
                <div className='flex flex-wrap pt-6'>
                  <div className={` rounded-md bg-[#8e8e8e] text-[18px] text-[#131312] flex items-center px-2 m-2`} >
                    <span className='' ><span className='text-[#4d4d4d] pr-1'>#</span>ReactJS</span>
                  </div>



                  <div className={` rounded-md bg-[#8e8e8e] text-[18px] text-[#131312] flex items-center px-2 m-2`} >
                    <span className='' ><span className='text-[#4d4d4d] pr-1'>#</span>ChartJS</span>
                  </div>

                  <div className={` rounded-md bg-[#8e8e8e] text-[18px] text-[#131312] flex items-center px-2 m-2`} >
                    <span className='' ><span className='text-[#4d4d4d] pr-1'>#</span>RestAPI</span>
                  </div>


                  <div className={` rounded-md bg-[#8e8e8e] text-[18px] text-[#131312] flex items-center px-2 m-2`} >
                    <span className='' ><span className='text-[#4d4d4d] pr-1'>#</span>Tailwind CSS</span>
                  </div>



                </div>
              </div>
            </div>
            <div className={`${p2 ? "flex" : "hidden"} w-full py-6 flex-col`}>
              <img className='' src={cryp} alt="" />
              <div className='flex w-full ss:flex-row flex-col justify-start gap-6 items-center'>
                <Button1 />
                <Button2 />
              </div>
            </div>
          </motion.div>

          <motion.div
            layout
            transition={{ layout: { type: 'just' } }}
            onClick={() => { setp3(!p3) }}
            className={`${p3 ? "w-[90%] h-[90%]" : "sm:w-[40%] sm:h-[40%]"} ${(p2 | p1 | p4) ? "hidden" : "flex"} cursor-pointer md:flex-row flex-col bg-[#131312] py-10 text-[#fff] m-4  px-6 rounded-3xl`}>
            <div className='flex flex-col p-4 w-full'>
              <h1 className=' sm:text-[36px] text-[26px]  '>Art Studio Website</h1>
              <p className='max-w-[500px] text-[18px] leading-7 my-4'>
                🏺 Crafted an immersive Art Showcase Website for a pottery studio during Google Winter of Code (GWOC). 🎨 The platform beautifully showcases unique pottery pieces, providing a visual journey into the studio's artistic creations.

              </p>
              <div className={`${p3 ? "flex" : "hidden"} flex-col`}>
                <h2 className='font-semibold text-[23px] py-2'>Features</h2>
                <p className='leading-7'>
                  🏺 Engage visitors with a beautiful parallax effect on landing page.
                  <br />🖼️ Explore curated pottery pieces on a dedicated gallery page with captivating staggered animation.
                  <br />🌐 Enjoy a seamless experience on various devices with a responsive design.
                  <br />💻 Crafted during Google Winter of Code, showcasing commitment to open source contributions.

                </p>
                <div className='flex flex-wrap pt-6'>
                  <div className={` rounded-md bg-[#8e8e8e] text-[18px] text-[#131312] flex items-center px-2 m-2`} >
                    <span className='' ><span className='text-[#4d4d4d] pr-1'>#</span>ReactJS</span>
                  </div>


                  <div className={` rounded-md bg-[#8e8e8e] text-[18px] text-[#131312] flex items-center px-2 m-2`} >
                    <span className='' ><span className='text-[#4d4d4d] pr-1'>#</span>Tailwind CSS</span>
                  </div>

                  <div className={` rounded-md bg-[#8e8e8e] text-[18px] text-[#131312] flex items-center px-2 m-2`} >
                    <span className='' ><span className='text-[#4d4d4d] pr-1'>#</span>Framer Motion</span>
                  </div>


                </div>
              </div>
            </div>
            <div className={`${p3 ? "flex" : "hidden"} w-full py-6 flex-col`}>
              <img className='' src={mud} alt="" />
              <div className='flex w-full ss:flex-row flex-col justify-start gap-6 items-center'>
                <Button1 />
                <Button2 />
              </div>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </div>
  )
}

export default Projects