import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions';



class SignupForm extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {
        email: '',
        password: '',
        phone_number: '',
        name: ''
      }
    };
  }

  handleChange = e => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({ fields: newFields });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { fields: { email, password, phone_number, name } } = this.state;
    this.props.createUser(email, password, phone_number, name, this.props.history);
  };

  render() {

    const { fields } = this.state;
    return (
      <div className="ui stackable container">
      <div className="ui form">
        <div className="ui container center aligned">
        <h2 class="ui gray image header">
          <div class="title">
          Sign Up
          </div>
          </h2></div>
        <form onSubmit={this.handleSubmit}>
          <div className="ui field">
            <label>Your Name</label>
            <input
              name="name"
              placeholder="name"
              value={fields.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="ui field">
            <label>Phone Number</label>
            <input
              name="phone_number"
              type="phone_number"
              placeholder="phone number"
              value={fields.phone_number}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="ui field">
            <label>Email</label>
            <input
              name="email"
              type="email"
              placeholder="email"
              value={fields.email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="ui field">
            <label>Password</label>
            <input
              name="password"
              type="password"
              placeholder="password"
              value={fields.password}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="ui center aligned stackable container">
          <button type="submit" className="ui basic button positive">
            Submit
          </button><br />
        </div>
        </form>
      </div>
      </div>
  )}
}

const mapStateToProps = ({ auth }) => {
  return {
    auth: auth
  }
}

export default withRouter(connect(mapStateToProps, actions)(SignupForm));
