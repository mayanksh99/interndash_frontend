import React, { Component } from 'react';
import logo from '../../assets/logo.png';
import register from '../../assets/register.png';
import swal from 'sweetalert';
import {registerUser} from '../../utils/apiService';
import axios from 'axios';

class Login extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    role: '',
    redirect: false
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, role } = this.state;

    if(email === '' || email === undefined || email === null) return swal("Please enter your email", "", "warning");
    if(password === '' || password === undefined || password === null) return swal("Please enter your password", "", "warning");
    if(name === '' || name === undefined || name === null) return swal("Please enter your name", "", "warning");
    if(role === '' || role === undefined || role === null) return swal("Please select your role", "", "warning");

    const data = { name, email, password, role };

    axios.post(registerUser, data)
      .then(res => {
        console.log(res.data.message);
        if(res.data.message === 'success'){
          swal("Registered Successfully", "", "success");
          this.props.history.push('/');
        }
        if(res.data.message === 'user already registered.'){
          swal("User already exists", "", "warning");
        }
      })
      .catch(err => {
        if(err.message === 'error') {
          swal("Something went wrong", "", "error");
        }
      });
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div className="mt-5 mb-5 container">
        <div className="card mt-5">
            <div className="row">
                <div className="col-lg-7">
                    <img className="front_image_register" src={register} width="100%" alt=""/>
                </div>
                <div className="col-lg-5 p-5">
                    <img className="logo" src={logo} style={{width:"30%", float: 'right'}} alt=""></img>
                    <h4>Register</h4>
                    <p style={{ fontSize: '16px' }}>To grab an internship that matches your profile.</p>
                    <br/>

                    <form onSubmit={this.handleSubmit}>
                      <label className="form-check-label">
                        Name
                      </label>
                      <input className="form-control mt-2" placeholder="Enter your full name" onChange={this.handleChange} name="name" type="text"/>

                      <br/>

                      <label className="form-check-label">
                        Email
                      </label>
                      <input className="form-control mt-2" placeholder="Enter your email" name="email" type="email" onChange={this.handleChange}/>

                      <br/>

                      <label className="form-check-label">
                        Password
                      </label>
                      <input className="form-control mt-2" placeholder="Enter your password" name="password" type="password" onChange={this.handleChange}/>

                      <br/>

                      <label className="radio-inline"><input type="radio" name="role" onChange={this.handleChange} value="mentor"/> Recruiter</label>
                      <label className="radio-inline ml-3"><input type="radio" name="role" onChange={this.handleChange} value="intern"/> Intern</label>

                      <br/>

                      <button type="submit" className="gbutton_reg btn">Register</button>
                    </form>

                </div>

            </div>
        </div>

      </div>

    );
  }
}

export default Login;
