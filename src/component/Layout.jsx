import React from 'react'
import Navbar_copy from './Extras/Navbar_copy'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'


const Layout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />

    </>
  )
}

export default Layout