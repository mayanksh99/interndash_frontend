import React, { Component } from 'react';
// import '../../App.css';

class NavBar extends Component {
  render(){
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
              <a className="navbar-brand" style={{ fontWeight: 700 }} href={'/'}>interndash</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <i className="fa fa-bars"></i>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto nav justify-content-end custom_nav" style={{ width: '100%' }}>
                      <li className="nav-item">
                          <a className="nav-link active" href={'/'}>Dashboard</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href={'/'}>Profile</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href={'/login'}>Sign out</a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
    );
  }
}

export default NavBar;
