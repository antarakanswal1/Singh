import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Products from '../Components/Products'
import AsgaardSofa from '../Components/AsgaardSofa'
import ProductDescription from '../Components/ProductDescription'


const SingleProduct = () => {
  return (
    <div>
    <Navbar/>
    <AsgaardSofa/>
    <ProductDescription/>
    <Products/>
    <Footer/>
    </div>
  )
}

export default SingleProduct