import React from 'react'
import {Outlet} from 'react-router-dom'
import NavBar from './NavBarPanel'

const RouteLayout = () => {
  return (
    <>
    <NavBar />

    <main>
      <Outlet />
    </main>
    </>
  )
}

export default RouteLayout