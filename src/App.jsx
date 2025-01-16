import React from 'react'
import Header from './components/Header'
import Info from './components/Info'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FAQ from './components/FAQ'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Client from './components/Client'
import WhyBlueEarth from './components/WhyBlueEarth'
// import { Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <>
      <div className='w-full h-full bg-gray-50'>
        <ToastContainer />
        <Header />
        <Info />
        <Projects />
        <Client />
        <WhyBlueEarth />
        <FAQ />
        <Contact />
        <Footer />

      </div>
    </>
  )
}

export default App
