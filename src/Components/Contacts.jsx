import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { toast } from 'react-toastify';
import axios from 'axios';
import Loader from './Loader';




const Contacts = () => {


  const [data, setdata] = useState({ email: '', message: '' })
  const [loading, setload] = useState(false)

  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);


  const submitHandler = async (e) => {
    const { email, message } = data;
    const msg = encodeURI(`Hello Boss🫡! someone remembered you..\n Email: ${email}\nMessage: ${message}`)

    e.preventDefault();
    if (email && message) {
      setload(true);
      try {
        await axios.post(`https://api.telegram.org/bot6824661380:AAEsjkVBLbpMTN095uZh-KfIlD4joE6K3YU/sendMessage?chat_id=5274938130&text=${msg}`)
        setload(false)
        toast("Message sent successfully")
        setdata({
          email: '',
          message: ''
        });

      } catch (error) {
        console.error('Error sending message', error);
      }
    } else {
      toast.error("Fill the empty field")
    }

  };

  const valueupdate = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  return (

    <div id='contact' className='h-[100vh] flex flex-col items-center justify-between w-full'>



<div className='fixed w-full h-full text-[#fff] bg-[#00000073] z-30'>
            <div class="socket  ">
                <div class="gel center-gel">
                    <div class="hex-brick h1"></div>
                    <div class="hex-brick h2"></div>
                    <div class="hex-brick h3"></div>
                </div>
                <div class="gel c1 r1">
                    <div class="hex-brick h1"></div>
                    <div class="hex-brick h2"></div>
                    <div class="hex-brick h3"></div>
                </div>
                <div class="gel c2 r1">
                    <div class="hex-brick h1"></div>
                    <div class="hex-brick h2"></div>
                    <div class="hex-brick h3"></div>
                </div>
                <div class="gel c3 r1">
                    <div class="hex-brick h1"></div>
                    <div class="hex-brick h2"></div>
                    <div class="hex-brick h3"></div>
                </div>
                <div class="gel c4 r1">
                    <div class="hex-brick h1"></div>
                    <div class="hex-brick h2"></div>
                    <div class="hex-brick h3"></div>
                </div>
                <div class="gel c5 r1">
                    <div class="hex-brick h1"></div>
                    <div class="hex-brick h2"></div>
                    <div class="hex-brick h3"></div>
                </div>
                <div class="gel c6 r1">
                    <div class="hex-brick h1"></div>
                    <div class="hex-brick h2"></div>
                    <div class="hex-brick h3"></div>
                </div>

                <div class="gel c7 r2">
                    <div class="hex-brick h1"></div>
                    <div class="hex-brick h2"></div>
                    <div class="hex-brick h3"></div>
                </div>

                <div class="gel c8 r2">
                    <div class="hex-brick h1"></div>
                    <div class="hex-brick h2"></div>
                    <div class="hex-brick h3"></div>
                </div>
                <div class="gel c9 r2">
                    <div class="hex-brick h1"></div>
                    <div class="hex-brick h2"></div>
                    <div class="hex-brick h3"></div>
                </div>
                <div class="gel c10 r2">
                    <div class="hex-brick h1"></div>
                    <div class="hex-brick h2"></div>
                    <div class="hex-brick h3"></div>
                </div>
                <div class="gel c11 r2">
                    <div class="hex-brick h1"></div>
                    <div class="hex-brick h2"></div>
                    <div class="hex-brick h3"></div>
                </div>
                <div class="gel c12 r2">
                    <div class="hex-brick h1"></div>
                    <div class="hex-brick h2"></div>
                    <div class="hex-brick h3"></div>
                </div>
                <div class="gel c13 r2">
                    <div class="hex-brick h1"></div>
                    <div class="hex-brick h2"></div>
                    <div class="hex-brick h3"></div>
                </div>
                <div class="gel c14 r2">
                    <div class="hex-brick h1"></div>
                    <div class="hex-brick h2"></div>
                    <div class="hex-brick h3"></div>
                </div>
                <div class="gel c15 r2">
                    <div class="hex-brick h1"></div>
                    <div class="hex-brick h2"></div>
                    <div class="hex-brick h3"></div>
                </div>
                <div class="gel c16 r2">
                    <div class="hex-brick h1"></div>
                    <div class="hex-brick h2"></div>
                    <div class="hex-brick h3"></div>
                </div>
                <div class="gel c17 r2">
                    <div class="hex-brick h1"></div>
                    <div class="hex-brick h2"></div>
                    <div class="hex-brick h3"></div>
                </div>
                <div class="gel c18 r2">
                    <div class="hex-brick h1"></div>
                    <div class="hex-brick h2"></div>
                    <div class="hex-brick h3"></div>
                </div>
                <div class="gel c19 r3">
                    <div class="hex-brick h1"></div>
                    <div class="hex-brick h2"></div>
                    <div class="hex-brick h3"></div>
                </div>
                <div class="gel c20 r3">
                    <div class="hex-brick h1"></div>
                    <div class="hex-brick h2"></div>
                    <div class="hex-brick h3"></div>
                </div>
                <div class="gel c21 r3">
                    <div class="hex-brick h1"></div>
                    <div class="hex-brick h2"></div>
                    <div class="hex-brick h3"></div>
                </div>
                <div class="gel c22 r3">
                    <div class="hex-brick h1"></div>
                    <div class="hex-brick h2"></div>
                    <div class="hex-brick h3"></div>
                </div>
                <div class="gel c23 r3">
                    <div class="hex-brick h1"></div>
                    <div class="hex-brick h2"></div>
                    <div class="hex-brick h3"></div>
                </div>
                <div class="gel c24 r3">
                    <div class="hex-brick h1"></div>
                    <div class="hex-brick h2"></div>
                    <div class="hex-brick h3"></div>
                </div>
                <div class="gel c25 r3">
                    <div class="hex-brick h1"></div>
                    <div class="hex-brick h2"></div>
                    <div class="hex-brick h3"></div>
                </div>
                <div class="gel c26 r3">
                    <div class="hex-brick h1"></div>
                    <div class="hex-brick h2"></div>
                    <div class="hex-brick h3"></div>
                </div>
                <div class="gel c28 r3">
                    <div class="hex-brick h1"></div>
                    <div class="hex-brick h2"></div>
                    <div class="hex-brick h3"></div>
                </div>
                <div class="gel c29 r3">
                    <div class="hex-brick h1"></div>
                    <div class="hex-brick h2"></div>
                    <div class="hex-brick h3"></div>
                </div>
                <div class="gel c30 r3">
                    <div class="hex-brick h1"></div>
                    <div class="hex-brick h2"></div>
                    <div class="hex-brick h3"></div>
                </div>
                <div class="gel c31 r3">
                    <div class="hex-brick h1"></div>
                    <div class="hex-brick h2"></div>
                    <div class="hex-brick h3"></div>
                </div>
                <div class="gel c32 r3">
                    <div class="hex-brick h1"></div>
                    <div class="hex-brick h2"></div>
                    <div class="hex-brick h3"></div>
                </div>
                <div class="gel c33 r3">
                    <div class="hex-brick h1"></div>
                    <div class="hex-brick h2"></div>
                    <div class="hex-brick h3"></div>
                </div>
                <div class="gel c34 r3">
                    <div class="hex-brick h1"></div>
                    <div class="hex-brick h2"></div>
                    <div class="hex-brick h3"></div>
                </div>
                <div class="gel c35 r3">
                    <div class="hex-brick h1"></div>
                    <div class="hex-brick h2"></div>
                    <div class="hex-brick h3"></div>
                </div>
                <div class="gel c36 r3">
                    <div class="hex-brick h1"></div>
                    <div class="hex-brick h2"></div>
                    <div class="hex-brick h3"></div>
                </div>
                <div class="gel c37 r3">
                    <div class="hex-brick h1"></div>
                    <div class="hex-brick h2"></div>
                    <div class="hex-brick h3"></div>
                </div>

            </div>


        </div>


      
      <div className="ss:w-fit w-[80%]" >
        <h2 className='sm:text-[90px] text-center text-[60px]'>Contacts.</h2>
        <motion.div

          initial='hidden'
          variants={{
            hidden: { opacity: 0, scaleY: 0 },
            visible: { opacity: 1, scaleY: 1 }
          }}
          transition={{ duration: 1, type: 'spring' }}
          animate={controls}
          className="bg-[#131312] flex items-center flex-col justify-center  text-[#b5b4b4] p-6 rounded-lg">



            <h4 className='text-centertext-[18px] pb-2'>For any help or project collaboration</h4>
     

              <form ref={ref} onSubmit={submitHandler} className=" w-full flex flex-col">
                <div className="flex flex-col p-4">
                  <label className=''>Your Email</label>
                  <input value={data.email} onChange={valueupdate} required="" className='bg-[#131312] outline-none focus:border-[#fefeff] p-2 border-[#747373] text-[#fefeff] rounded-md border-2 ' name="email" id="email" type="email" />
                </div>
                <div className="flex flex-col p-4">
                  <label >Message</label>
                  <textarea value={data.message} name='message' onChange={valueupdate} className='bg-[#131312] outline-none focus:border-[#fefeff] p-2 border-[#747373] text-[#fefeff] rounded-md border-2 ' required='' cols="30" rows="3" id="textarea" />
                </div>
                <button type="submit" className="py-2 px-4 mx-auto text-[#131312] bg-[#fefeff] rounded-lg font-poppins hover:bg-[#909090] font-semibold">Submit</button>
              </form>
       

            
          


        </motion.div>
      </div>

      <div className='w-full flex md:flex-row flex-col justify-between items-center px-20 text-white h-[130px] mt-4 pt-2 md:pb-0 pb-[175px] bg-[#131212]'>

        <div>

          <div className="w-full z-50 flex justify-around">
            <a href="https://github.com/mayankified" className="w-[50px] z-50 rounded-full p-3 m-2 h-[50px] facebook"
            ><FaGithub className='w-full h-full' /></a>
            <a href="https://www.instagram.com/mynkashh" className="w-[50px] z-50 m-2 rounded-full p-3 h-[50px] instagram"
            ><FaInstagram className='w-full h-full' /></a>
            <a href="https://www.linkedin.com/in/mayank-kashyap-20114a24b/" className="w-[50px] z-50 m-2 rounded-full p-3 h-[50px] linkedin"
            ><FaLinkedin className='w-full h-full' /></a>
          </div>


        </div>

        <div>
          <a href="">@mayankified 🇮🇳 🚀</a>
        </div>
      </div>
    </div>
  )
}

export default Contacts