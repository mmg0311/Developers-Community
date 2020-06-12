import React, { Component } from 'react'
import Notifications from './notifications'
import ProjectList from '../projects/projectList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
class Dashboard extends Component {
   render() {
      const { projects, auth } = this.props
      return (
         auth.uid ?
            <div className="dashboard container">
               <div className="row">
                  <div className="col s12 m6">
                     <ProjectList projects={projects} />
                  </div>
                  <div className="col s12 m5 offset-m1">
                     <Notifications />
                  </div>
               </div>
            </div> : <Redirect to='/signin'></Redirect>
      )
   }
}

const mapStateToProps = (state) => {
   return {
      projects: state.firestore.ordered.projects,
      auth: state.firebase.auth
   }
}

export default compose(
   connect(mapStateToProps),
   firestoreConnect([
      { collection: 'projects' }
   ])
)(Dashboard)