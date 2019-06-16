import React, { Component } from 'react';
import cookie from 'react-cookies';
import {Link} from 'react-router-dom';

class NavBar extends Component {

  state = {
    isLoggedIn: false
  }

  handleLogout = (e) => {
    e.preventDefault();
    cookie.remove('token');
    this.setState({isLoggedIn: false});
    window.location.reload();
  }

  componentDidMount() {
    if(cookie.load('token') !== undefined) this.setState({isLoggedIn: true});
  }

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
                          {this.state.isLoggedIn === true ? <a className="nav-link active" href={'/'}>Dashboard</a>: <span></span>}
                      </li>
                      <li className="nav-item">
                          {this.state.isLoggedIn === true ? <a className="nav-link" href={'/'}>Profile</a> : <span></span>}
                      </li>
                      <li className="nav-item">
                          {this.state.isLoggedIn === true ? <a href={"/"} className="nav-link" onClick={this.handleLogout}>Sign out</a> : <Link to="/login" className="nav-link" >Sign In</Link>}
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
    );
  }
}

export default NavBar;
