import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ColorBanner from '../Components/ColorBanner'
import LogoSection from '../Components/LogoSection'
import BlogSection from '../Components/BlogSection'


const Blog = () => {
  return (
    <div>
    <Navbar/>
    <ColorBanner/>
    <BlogSection/>
    <LogoSection/>
    <Footer/>
    </div>

  )
}

export default Blog