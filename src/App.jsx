import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Import all pages
import Home from './Pages/Home'
import Blog from './Pages/Blog'
import Cart from './Pages/Cart'
import CartSidebar from './Pages/CartSidebar'
import Checkout from './Pages/Checkout'
import Contact from './Pages/Contact'
import ProductComparison from './Pages/ProductComparison'
import Shop from './Pages/Shop'
import SingleProduct from './Pages/SingleProduct'

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/blog", element: <Blog /> },
    { path: "/cart", element: <Cart /> },
    { path: "/cartsidebar", element: <CartSidebar /> },
    { path: "/checkout", element: <Checkout /> },
    { path: "/contact", element: <Contact /> },
    { path: "/productcomparison", element: <ProductComparison /> },
    { path: "/shop", element: <Shop /> },
    { path: "/singleproduct", element: <SingleProduct /> },
  ])

  return <RouterProvider router={router} />
}

export default App