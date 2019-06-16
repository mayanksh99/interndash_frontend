import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import NavBar from './components/NavBar/NavBar';
// import JobCard from './components/JobCard/JobCard';
// import Filter from './components/Filter/Filter';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={Dashboard}
          />
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>

        </Switch>
      </Router>
    );
  }
}

export default App;
