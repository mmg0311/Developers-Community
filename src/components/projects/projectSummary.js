import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
const ProjectSummary = ({ project, auth }) => {
   return (
      auth.uid ?
         <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
               <span className="card-title">{project.title}</span>
               <p>Posted by Mohak</p>
               <p className="grey-text">3rd Nov, 12am</p>
            </div>
         </div> : <Redirect to="/signin"></Redirect>
   )
}

const mapStateToProps = (state) => {
   return {
      auth: state.firebase.auth
   }
}

export default connect(mapStateToProps)(ProjectSummary)