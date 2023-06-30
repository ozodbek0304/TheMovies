import React from 'react'
import {Outlet} from "react-router-dom"
import NavbarMovies from '../../componets/content/NavbarMovies'
import "../../pages/HomeNavbar/Layout.css"
import Footer from '../../componets/content/Footer'

const Layout = () => {
  return (
    <div>
      <NavbarMovies/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
