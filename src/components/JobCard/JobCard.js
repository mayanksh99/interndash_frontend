import React, { Component } from 'react';
import './JobCard.css';

class JobCard extends Component {

  state = {
    title: '',
    organisation: {},
    stipend: '',
    location: ''
  }

  componentDidMount() {
    const { title, location, organisation, stipend } = this.props.value;
    this.setState({
      title, location, organisation, stipend
    })
  }

  render(){
    return (
      <div className="col-lg-4 mb-4">
        <div className="card p-2">
            <span className="applyBtn">Apply</span>
            <h6>{this.state.organisation.name}</h6>
            <p style={{ margin: 0 }}><b>{this.state.title}</b>
            <br/>
            {this.state.location}
            <br/>{this.state.stipend}</p>
        </div>
      </div>
    );
  }
}

export default JobCard;
