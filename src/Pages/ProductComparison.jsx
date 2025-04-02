import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ColorBanner from '../Components/ColorBanner'
import LogoSection from '../Components/LogoSection'
import ComparisonTable from '../Components/ComparisonTable'


const ProductComparison = () => {
  return (
    <div>
    <Navbar/>
    <ColorBanner/>
    <ComparisonTable/>
    <LogoSection/>
    <Footer/>
    </div>

  )
}

export default ProductComparison