import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import Products from '../Components/Products'
import '../index.css'
import BeautifulRoomsBanner from '../Components/BeautifulRoomsBanner'
import PhotoGallery from '../Components/PhotoGallery'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Banner/>
    <Products/>
    <BeautifulRoomsBanner/>
    <PhotoGallery/>
    <Footer/>
    </div>
  )
}

export default Home