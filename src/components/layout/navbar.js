import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './signedinlinks'
import SignedOutLinks from './signedoutlinks'
import { connect } from 'react-redux'

const Navbar = (props) => {
   const { auth, profile } = props;
   // console.log(profile)
   return (
      <nav className="nav-wrapper light-blue darken-1">
         <div className="container">
            <Link to='/' className="brand-logo">My Projects</Link>
            {
               (auth.uid) ? <SignedInLinks profile={profile} /> : <SignedOutLinks />
            }

         </div>
      </nav>
   )
}

const mapStateToProps = (state) => {
   return {
      auth: state.firebase.auth,
      profile: state.firebase.profile
   }
}

export default connect(mapStateToProps)(Navbar)