import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
const SignedInLinks = (props) => {
   const { profile } = props;
   return (
      <ul className="right">
         <li><NavLink to='/create'>New Project</NavLink></li>
         <li><span onClick={props.signOut} >Log Out</span></li>
         <li><NavLink to='/' className="btn btn-floating pink lighten-1">{profile.initials}</NavLink></li>
      </ul>
   )
}

const mapDispatchToProps = (dispatch) => {
   return {
      signOut: () => dispatch(signOut())
   }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)