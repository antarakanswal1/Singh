import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ColorBanner from '../Components/ColorBanner'
import LogoSection from '../Components/LogoSection'
import BillingSection from '../Components/BillingSection'


const Checkout = () => {
  return (
    <div>
    <Navbar/>
    <ColorBanner/>
    <BillingSection/>
    <LogoSection/>
    <Footer/>
    </div>

  )
}

export default Checkout