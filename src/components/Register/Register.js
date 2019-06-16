import React, { Component } from 'react';
import logo from '../../assets/logo.png';
import register from '../../assets/register.png';

class Login extends Component {
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

                    <form>
                      <label className="form-check-label">
                        Name
                      </label>
                      <input className="form-control mt-2" placeholder="Enter your full name" name="name" type="text"/>

                      <br/>

                      <label className="form-check-label">
                        Email
                      </label>
                      <input className="form-control mt-2" placeholder="Enter your email" name="email" type="email"/>

                      <br/>

                      <label className="form-check-label">
                        Password
                      </label>
                      <input className="form-control mt-2" placeholder="Enter your password" name="password" type="password"/>

                      <br/>

                      <label className="radio-inline"><input type="radio" name="role" value="mentor"/> Recruiter</label>
                      <label className="radio-inline ml-3"><input type="radio" name="role" value="intern"/> Intern</label>

                      <br/>

                      <button type="submit" href={'/'} className="gbutton_reg btn">Register</button>
                    </form>

                </div>

            </div>
        </div>

      </div>

    );
  }
}

export default Login;
