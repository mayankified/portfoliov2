import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';




const Contacts = () => {
  
  
  const firebaseConfig = {
    apiKey: "AIzaSyDawhXUVn6LaE4jtINQtplw2H_Z51BcSkE",
    authDomain: "portfolio-tinu.firebaseapp.com",
    databaseURL: "https://portfolio-tinu-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "portfolio-tinu",
    storageBucket: "portfolio-tinu.appspot.com",
    messagingSenderId: "133687127336",
    appId: "1:133687127336:web:09d3bacc0d0256950fb41d"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  const [data, setdata] = useState([])

  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const submitHandler = async (e) => {
    const { email, message } = data;
    e.preventDefault();
    if(email&&message){
      try {
      
        // Add form data to Firestore
        console.log("shreya");
        await addDoc(collection(db, 'contactForms'), {
          email:email,
          message:message
        });
  
        toast("Message sent successfully")
        setdata({
          email: '',
          message: ''
        });
      } catch (error) {
        console.error('Error adding document to Firestore: ', error);
      }
    }else{
      toast.error("Fill the empty field")
    }
    
  };

  const valueupdate = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div id='contact' className='h-[100vh] flex flex-col items-center justify-between w-full'>
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
          
          className="bg-[#131312] text-[#b5b4b4] p-6 rounded-lg">
            <h4 className='text-center text-[18px] pb-2'>For any help or project collaboration</h4>
          <form ref={ref} onSubmit={submitHandler} className="flex flex-col">
            <div className="flex flex-col p-4">
              <label className='mb-4'>Your Email</label>
              <input value={data.email} onChange={valueupdate} required="" className='bg-[#131312] outline-none focus:border-[#fefeff] p-2 border-[#747373] text-[#fefeff] rounded-md border-2 ' name="email" id="email" type="email" />
            </div>
            <div className="flex flex-col p-4">
              <label >Message</label>
              <textarea value={data.message} name='message' onChange={valueupdate} className='bg-[#131312] outline-none focus:border-[#fefeff] p-2 border-[#747373] text-[#fefeff] rounded-md border-2 ' required='' cols="30" rows="5" id="textarea" />
            </div>
            <button type="submit" className="py-2 px-4 mx-auto text-[#131312] bg-[#fefeff] rounded-lg font-poppins hover:bg-[#909090] font-semibold">Submit</button>
          </form>
        </motion.div>
      </div>

      <div className='w-full flex md:flex-row flex-col justify-between items-center px-20 text-white h-[130px] pt-2 md:pb-0 pb-[175px] bg-[#131212]'>

        <div>

          <div className="w-full z-50 flex justify-around">
            <a href="#" className="w-[50px] z-50 rounded-full p-3 m-2 h-[50px] facebook"
            ><FaGithub className='w-full h-full' /></a>
            <a href="#" className="w-[50px] z-50 m-2 rounded-full p-3 h-[50px] instagram"
            ><FaInstagram className='w-full h-full' /></a>
            <a href="#" className="w-[50px] z-50 m-2 rounded-full p-3 h-[50px] linkedin"
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