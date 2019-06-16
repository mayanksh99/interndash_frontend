import React, { Component } from 'react';
import logo from '../../assets/logo.png';
import swal from 'sweetalert';
import {loginUser} from '../../utils/apiService';
import axios from 'axios';
import cookie from 'react-cookies';
import register from '../../assets/register.png';

class Login extends Component {

  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    if(email === '' || email === undefined || email === null) return swal("Please enter your email", "", "warning");
    if(password === '' || password === undefined || password === null) return swal("Please enter your password", "", "warning");

    const data = {email, password};
    axios.post(loginUser, data)
      .then(res => {
        if(res.data.message === 'success'){
          const expires = new Date()
          expires.setDate(Date.now() + 1000 * 60 * 60 * 24 * 14);
          cookie.save('token', res.data.token, { path: '/', expires });
          swal("LoggedIn Successfully", "", "success");
          this.props.history.push("/");
        }
        if(res.data.message === 'incorrect password'){
          swal(res.data.message, "", "warning");
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    const token = cookie.load('token');
    if(token !== undefined) {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <div className="mt-4 mb-5 container">
        <div className="card mt-5">
            <div className="row">
                <div className="col-lg-5 p-5 mt-2">
                    <img className="logo" src={logo} style={{width:"30%", float: 'right'}} alt=""></img>
                    <h4>Login</h4>
                    <p style={{ fontSize: '16px' }}>To grab an internship that matches your profile.</p>
                    <br/>

                    <form onSubmit={this.handleSubmit}>
                      <label className="form-check-label">
                        Email
                      </label>
                      <input className="form-control mt-2" placeholder="Enter your email" name="email" onChange={this.handleChange} type="email"/>

                      <br/>

                      <label className="form-check-label">
                        Password
                      </label>
                      <input className="form-control mt-2" placeholder="Enter your password" name="password" onChange={this.handleChange} type="password"/>

                      <br/>

                      <button type="submit" className="gbutton btn">Login</button>

                    </form>

                </div>
                <div className="col-lg-7">
                    <img className="front_image" src={register} width="100%" alt=""/>
                </div>
            </div>
        </div>

        <div className="mt-5">
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-4">
                    <img src="https://images.pexels.com/photos/450271/pexels-photo-450271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" width="100%" alt="" className="image_classic"/>
                </div>
                <div className="col-lg-4 pt-4">
                    <p style={{ fontSize: '20px' }} className="p_classic">" Be a yardstick of quality. Some people aren't used to an environment where excellence is expected. "
                        <br/><br/>
                        - Sir Steve Jobs
                    </p>
                </div>
                <div className="col-lg-2"></div>

            </div>
        </div>
      </div>

    );
  }
}

export default Login;
