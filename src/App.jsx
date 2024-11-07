
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import What from './components/What';
import GetStarted from './components/GetStarted'
import Features from './components/Features';



function App() {


  return (
    <>
      <div>
          <Navbar/>
          <Hero />
          <What/>
          <GetStarted/>
          <Features/>
         
      </div>
    </>
  )
}

export default App
