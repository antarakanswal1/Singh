import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import LogoSection from '../Components/LogoSection'
import ColorBanner from '../Components/ColorBanner'
import CartTools from '../Components/CartTools'


const Cart = () => {
  return (
    <div>
      <Navbar/>
      <ColorBanner/>
      <CartTools/>
      <LogoSection/>
      <Footer/>
    </div>
  )
}

export default Cart