import React, { Component } from 'react';
import JobCard from '../JobCard/JobCard';
import axios from 'axios';
import {getInternships} from '../../utils/apiService';

class JobContainer extends Component {

  state = {
    internships: []
  }

  componentDidMount() {
      axios.get(getInternships)
        .then(res => {
          this.setState({internships: res.data.internships});
        })
        .catch(err => {
          console.log(err);
        });
  }

  render() {
    return (
      <div className="col-lg-9 mb-4">
        <div className="row">
          { this.state.internships.map(internship => <JobCard key={internship._id} value={internship}/>) }
        </div>
      </div>
    );
  }
}

export default JobContainer;
