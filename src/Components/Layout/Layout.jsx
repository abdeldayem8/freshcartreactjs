import React from 'react'
import NavbarComp from '../Navbar/NavbarComp'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
export default function Layout() {
  return (
    <>
    <div className='app'>
      <NavbarComp/>
      <Outlet/>
      <Footer/>
      </div>
    </>
  )
}
