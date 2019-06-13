import React, { Component } from 'react';
// import './JobCard.css';

class JobCard extends Component {
  render(){
    return (
      <div className="col-lg-4 mb-4">
        <div className="card internship-box p-2">
            <span style={{ position: 'absolute', right: 0, padding: '4px 8px', background: 'aliceblue', fontSize: '12px', fontWeight: 700,
            borderRadius: '4px', marginRight: '4px', cursor: 'pointer' }}>Apply</span>
            <h5>Nexmos</h5>
            <p style={{ margin: 0 }}>Full-stack Developer
            <br/>
            Delhi, Mumbai
            <br/>Rs. 10000 - Rs. 20000</p>
        </div>
      </div>
    );
  }
}

export default JobCard;
