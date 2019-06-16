import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
// import StipendCalculator from '../StipendCalculator/StipendCalculator';
// import Preferences from '../Preferences/Preferences';
import JobContainer from '../JobContainer/JobContainer';
import Filter from '../Filter/Filter';
// import axios from 'axios';
// import {getInternships} from '../../utils/apiService';

class Dashboard extends Component {

  render() {
    return (
      <div className="container mt-4">
        <NavBar/>

        <div className="mt-4">
          <div className="row">
            <Filter/>
            <JobContainer/>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
