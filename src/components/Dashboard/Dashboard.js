import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import JobCard from '../JobCard/JobCard';
import Filter from '../Filter/Filter';

class Dashboard extends Component {
  render() {
    return (
      <div className="container mt-4">
        <NavBar/>

        <div className="mt-4">
          <div className="row">
            <Filter/>
            <div class="col-lg-9 mb-4">
              <div class="row">
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
