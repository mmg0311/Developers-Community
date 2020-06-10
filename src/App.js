import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/navbar'
import Dashboard from './components/dashboard/dashboard'
import ProjectDetails from './components/projects/projectDetails'
import SignIn from './components/auth/signin'
import SignUp from './components/auth/signup'
import CreateProject from './components/projects/createProject'
function App() {
   return (
      <BrowserRouter>
         <div className="App">
            <Navbar />
            <Switch>
               <Route exact path="/" component={Dashboard} />
               <Route path="/signin" component={SignIn} />
               <Route path="/signup" component={SignUp} />
               <Route path="/create" component={CreateProject} />
               <Route path="/project/:id" component={ProjectDetails} />
            </Switch>
         </div>
      </BrowserRouter>
   );
}

export default App;
