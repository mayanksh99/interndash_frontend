import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
// import StipendCalculator from '../StipendCalculator/StipendCalculator';
// import Preferences from '../Preferences/Preferences';
import JobCard from '../JobCard/JobCard';
import Filter from '../Filter/Filter';
import {BASE_URL} from '../../config';

class Dashboard extends Component {

  componentDidMount() {
    console.log(BASE_URL);
  }

  render() {
    return (
      <div className="container mt-4">
        <NavBar/>

        <div className="mt-4">
          <div className="row">
            <Filter/>
            <div className="col-lg-9 mb-4">
              <div className="row">
                <JobCard/>
                <JobCard/>
                <JobCard/>
                <JobCard/>
                <JobCard/>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
