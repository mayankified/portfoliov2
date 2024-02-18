import React from 'react'
import Hero from './Components/Hero'
import './Styles/App.css'
import Nav from './Components/Nav'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contacts from './Components/Contacts'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './Components/Loader'

const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <About/>
      <Skills/>
      <Projects/>
      <Contacts/>
      <ToastContainer />
      </>
  )
}

export default App