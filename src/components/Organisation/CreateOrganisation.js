import React, { Component } from "react";
import logo from "../../assets/logo.png";
import swal from "sweetalert";
import { createOrganisation } from "../../utils/apiService";
import axios from "axios";
import cookie from "react-cookies";
import NavBar from "../NavBar/NavBar";

class Login extends Component {
  state = {
    redirect: false,
    name: "",
    location: "",
    email:"",
    mobile:"",
    description:"",
    website: "",
    "mentor": "",
    "user": ""
  };

  handleSubmit = e => {
    e.preventDefault();
    let token = cookie.load("token");
    let auth = {
      headers: {
        "x-auth-token": token
      }
    };
    const {name, location, email, mobile, mentor, description, website} = this.state;
    if(mobile.length !== 10) return swal("Plese check the mobile number", "", "warning");
    const data = {name, location, email, mobile, mentor, description, website};
    axios
      .post(createOrganisation, data, auth)
      .then(res => {
        console.log(res.data);
        if (res.data.message === "organisation created") {
          swal("Organisation has been registered", "", "success");
          this.props.history.push("/");
        }
        if (res.data.message === "not authorised.") {
          swal("You are not authorised to register a organisation", "", "warning");
        }
        if (res.data.message === "mobile number or email is already registered") {
          swal(res.data.message, "", "warning");
        }
      })
      .catch(err => {
        if (err.message === "error") {
          console.log(err.message);
          swal("Something went wrong", "", "error");
        }
      });
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidMount() {
    const token = cookie.load("token");
    if (token === undefined) {
      this.props.history.push("/login");
    }

    let base64Url = token.split(".")[1];
    let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    let jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function(c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
        
    this.setState({ mentor: JSON.parse(jsonPayload)._id, user: JSON.parse(jsonPayload).name + ` (${JSON.parse(jsonPayload).email})`});

  }

  render() {
    return (
      <div className="mb-5 container mt-4">
        <NavBar />
        <div className="card mt-4">
          <div className="row">
            <div className="col-lg-12 p-5">
              <h4>
                Register Organisation{" "}
                <img
                  className="logo"
                  src={logo}
                  style={{
                    position: "absolute",
                    right: 48,
                    top: 16,
                    width: "10%",
                    float: "right"
                  }}
                  alt=""
                />
              </h4>
              <p style={{ fontSize: "16px" }}>
                To post an internship that will lead your venture to heights of
                success.
              </p>
              <br />

              <form onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col-md-6 col-12 mb-4">
                    <label className="form-check-label">
                      Organisation Name
                    </label>
                    <input
                      className="form-control mt-2"
                      placeholder="Name of the organisation"
                      onChange={this.handleChange}
                      name="name"
                      required
                      type="text"
                    />
                  </div>

                  <div className="col-md-6 col-12 mb-4">
                    <label className="form-check-label">
                      Organisation Email
                    </label>
                    <input
                      className="form-control mt-2"
                      placeholder="Enter a valid email"
                      name="email"
                      type="email"
                      required
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="col-md-6 col-12 mb-4">
                    <label className="form-check-label">
                      Organisation Phone Number
                    </label>
                    <input
                      className="form-control mt-2"
                      placeholder="Enter a valid phone number"
                      name="mobile"
                      type="text"
                      min="10"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="col-md-6 col-12 mb-4">
                    <label className="form-check-label">
                      Organisation Location
                    </label>
                    <input
                      className="form-control mt-2"
                      placeholder="Enter location"
                      name="location"
                      type="text"
                      required
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="col-12 mb-4">
                    <label className="form-check-label">
                      Organisation Description/Information
                    </label>
                    <textarea
                      className="form-control mt-2"
                      placeholder="Enter information"
                      name="description"
                      type="text"
                      rows="3"
                      required
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="col-md-6 col-12 mb-4">
                    <label className="form-check-label">
                      Organisation Website
                    </label>
                    <input
                      className="form-control mt-2"
                      placeholder="Website link (in case of no website, enter the link of the social media account)"
                      name="website"
                      type="url"
                      required
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="col-md-6 col-12 mb-4">
                    <label className="form-check-label">
                      Organisation Mentor
                    </label>
                    <input
                      className="form-control mt-2"
                      placeholder=""
                      name="mentor"
                      disabled
                      type="text"
                      value={this.state.user}
                    />
                  </div>

                  <div className="col-lg-6">
                    <button type="submit" className="gbutton_org_reg btn">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
