import React from "react";

import "./sign-in.scss";

import FormInput from "../form-input/form-input";

import CustomButtom from "../custom-button/custom-button";

import { signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            password="password"
            value={this.state.password}
            onChange={this.handleChange}
            label="Password"
            required
          />

          <CustomButtom type="submit">Sign in</CustomButtom>
          <CustomButtom onClick={signInWithGoogle}>
            Sign in with Google
          </CustomButtom>
        </form>
      </div>
    );
  }
}

export default SignIn;
