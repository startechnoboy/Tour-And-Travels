/* eslint-disable no-undef */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../Store/AuthSlice";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputData: { name: "", email: "", password: "" },
      flag: false,
    };
  }

  componentDidUpdate(prevState) {
    if (this.state.flag && prevState.flag !== this.state.flag) {
      // console.log("Registered");
      setTimeout(() => {
        // this.props.navigate('/login');
      }, 2000);
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      inputData: {
        ...prevState.inputData,
        [name]: value,
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { inputData } = this.state;
    if (!inputData.name || !inputData.email || !inputData.password) {
      alert("All fields are required...");
    } else {
      this.setState({ flag: true });
      this.props.register(inputData);
    }
  };

  handleLoginRedirect = () => {
    // this.props.navigate('/login');
  };

  render() {
    const { inputData, flag } = this.state;

    return (
      <>
        {flag && (
          <div className="alert ui-define">
            Hello {inputData.name}, registered successfully.
          </div>
        )}
        <form className="container" onSubmit={this.handleSubmit}>
          {this.props.user && <Navigate to={"/login"} />}
          <div className="header">
            <h1>Create New Account</h1>
            <h2>Sign Up</h2>
          </div>
          <div className="input-group">
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              value={inputData.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={inputData.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={inputData.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="button-group">
            <button type="submit" className="btn-submit">
              Submit
            </button>
          </div>
          <div className="footer">
            <p>
              Already have an account?{" "}
              <button
                type="button"
                onClick={this.handleLoginRedirect}
                className="btn-login"
              >
                Login
              </button>
            </p>
          </div>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = { register };

export default connect(mapStateToProps, mapDispatchToProps)(Form);

// const FormWithNavigation = (props) => {
//   const navigate = useNavigate();
//   return <Form {...props} navigate={navigate} />;
// };
// export default FormWithNavigation;
