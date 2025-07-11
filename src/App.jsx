import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Work from './components/Work'
import Playreel from './components/Playreel'
import Images from './components/Images'
import Spread from './components/Spread'
import LocomotiveScroll from 'locomotive-scroll';
import Footer from './components/Footer'

const App = () => {
  
  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <div className='w-full font-["TWK_Lausanne_300"] '>
      <Navbar />
      <Landing />
      <Work />
      <Playreel />
      <Images />
      <Spread />
      <Footer />
    </div>
  )
}

export default App
