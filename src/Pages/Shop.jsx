import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Products from '../Components/Products'
import ColorBanner from '../Components/ColorBanner'
import LogoSection from '../Components/LogoSection'

const Shop = () => {
  return (
    <div>
    <Navbar/>
    <ColorBanner/>
    <Products/>
    <Products/>
    <LogoSection/>
    <Footer/>
    </div>
  )
}

export default Shop