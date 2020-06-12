import React from 'react'
import ProjectSummary from './projectSummary'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
const ProjectList = ({ projects, auth }) => {
   return (
      auth.uid ?
         <div className="project-list section">
            {projects && projects.map(project => {
               return (
                  <Link to={'/project/' + project.id}>
                     <ProjectSummary project={project} key={project.id} />
                  </Link>
               )
            })}
         </div> : <Redirect to='/signin'></Redirect>
   )
}

const mapStateToProps = (state) => {
   return {
      auth: state.firebase.auth
   }
}

export default connect(mapStateToProps)(ProjectList)