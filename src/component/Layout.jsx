import React from 'react'
import Navbar_copy from './Extras/Navbar_copy'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'


const Layout = () => {
  return (
    <>
    <ScrollToTop />
    <header><Navbar_copy /></header>
    <main><Outlet /></main>
    <Footer />
    </>
  )
}

export default Layout