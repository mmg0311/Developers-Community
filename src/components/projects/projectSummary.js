import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
const ProjectSummary = ({ project, auth }) => {
   return (
      auth.uid ?
         <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
               <span className="card-title">{project.title}</span>
               <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
               <p className="grey-text">  {moment(project.createdAt.toDate()).calendar()}</p>
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