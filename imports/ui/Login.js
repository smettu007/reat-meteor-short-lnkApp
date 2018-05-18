import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { Link } from 'react-router'
class Login extends Component {
  state = {
    error: ""
  };
  onSubmit = e => {
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    Meteor.loginWithPassword({ email }, password, err => {
      if (err) {
        this.setState({ error: "Login Failed" });
      } else {
        this.setState({ error: "" });
      }
    });
  };
  render() {
    return (
      <div className="boxed-view">
        <div className="boxed-view__box">
          <h1>Login</h1>
          <p>{this.state.error}</p>
          <form onSubmit={this.onSubmit} className="boxed-view__form">
            <input ref="email" type="email" name="email" placeholder="Email" />
            <input
              ref="password"
              type="password"
              name="password"
              placeholder="Password"
            />
            <input className="button" type="submit" placeholder="Login" />
            <Link to="/signup">Create an account</Link>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
