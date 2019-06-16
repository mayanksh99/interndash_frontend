import React, { Component } from 'react';
import './JobCard.css';
import cookie from 'react-cookies';

class JobCard extends Component {

  state = {
    title: '',
    organisation: {},
    stipend: '',
    location: '',
    isLoggedIn: false
  }

  componentDidMount() {
    const { title, location, organisation, stipend } = this.props.value;
    const token = cookie.load('token');
    let isLoggedIn = false;
    if(token !== undefined) {
      isLoggedIn = true;
    }
    this.setState({
      title, location, organisation, stipend, isLoggedIn
    })
  }

  render(){
    return (
      <div className="col-lg-4 mb-4">
        <div className="card internship-box p-2">
            {this.state.isLoggedIn === true ? <span className="applyBtn">Apply</span> : <span></span>}
            <h6>{this.state.title}</h6>
            <p style={{ margin: 0 }}><b>{this.state.organisation.name}</b>
            <br/>
            {this.state.location}
            <br/>INR {this.state.stipend}</p>
        </div>
      </div>
    );
  }
}

export default JobCard;
