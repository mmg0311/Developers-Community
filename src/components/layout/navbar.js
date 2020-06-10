import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './signedinlinks'
import SignedOutLinks from './signedoutlinks'
const Navbar = () => {
   return (
      <nav className="nav-wrapper light-blue darken-1">
         <div className="container">
            <Link to='/' className="brand-logo">My Projects</Link>
            <SignedInLinks />
            <SignedOutLinks />
         </div>
      </nav>
   )
}

export default Navbar