import React from 'react'
import {
  Link
} from "react-router-dom";
export default function Header() {
  return (

    <>
      <Link to="/">
        <img src='/logo.png' alt="logo" />
      </Link>
      <h1>PRITER 3D</h1>
    </>
  )  
}