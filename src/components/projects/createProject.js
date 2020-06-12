import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'
export class CreateProject extends Component {
   state = {
      title: '',
      content: ''
   }
   handleChange = (e) => {
      this.setState({
         [e.target.id]: e.target.value
      })
   }
   handleSubmit = (e) => {
      e.preventDefault();
      this.props.createProject(this.state)
   }
   render() {
      const { auth } = this.props;
      return (
         auth.uid ?
            <div className="container">
               <form className="white " onSubmit={this.handleSubmit}>
                  <h5 className="grey-text text-darken-3">Create New Project</h5>
                  <div className="input-field">
                     <label htmlFor="title">Title</label>
                     <input type="text" id="title" onChange={this.handleChange} />
                  </div>
                  <div className="input-field">
                     <label htmlFor="content">Content</label>
                     <textarea className="materialize-textarea" id="content" onChange={this.handleChange} />
                  </div>
                  <div className="input-field">
                     <button className="btn pink lighten-1 z-depth-0">Create</button>
                  </div>
               </form>
            </div> : <Redirect to="/signin"></Redirect>
      )
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      createProject: (project) => { dispatch(createProject(project)) }
   }
}

const mapStateToProps = (state) => {
   return {
      auth: state.firebase.auth
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
