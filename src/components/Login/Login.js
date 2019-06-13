import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="mt-4 mb-5 container">
        <div className="card mt-5">
            <div className="row">
                <div className="col-lg-5 p-5 mt-5">
                    <h2>interndash</h2>
                    <h4>Login</h4>
                    <p style={{ fontSize: '16px' }}>To grab an internship that matches your profile.</p>
                    <br/>


                    <a href={'/'} className="gbutton">Sign in with Google</a>
                </div>
                <div className="col-lg-7">
                    <img className="front_image" src="https://images.pexels.com/photos/297648/pexels-photo-297648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=728" width="100%" alt=""/>
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
                    <p style={{ fontSize: '20px' }} className="p_classic">" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, aspernatur. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, optio. "
                        <br/><br/>
                        - Sundar Pichai
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
