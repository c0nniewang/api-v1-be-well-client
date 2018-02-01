import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions';


class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {
        email: '',
        password: ''
      }
    };
  }

  handleChange = e => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({ fields: newFields });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { fields: { email, password } } = this.state;
    this.props.loginUser(email, password, this.props.history);
  };

    

  render() {
  const error = 
    <div class="ui negative message">
      <i class="close icon"></i>
      <div class="header">
      Your Log in information is incorrect.
      </div>
      <p>Please try again.</p>
    </div>

    const { fields } = this.state;
    return (
      <div className="ui middle aligned center aligned grid">
        {this.props.auth.login_error ? error : null}
        <div className="ui form">
          <form onSubmit={this.handleSubmit}>
            <div className="ui field">
              <label>email</label>
              <input
                name="email"
                placeholder="email"
                value={fields.email}
                onChange={this.handleChange}
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
              />
            </div>
            <button type="submit" className="ui basic green button">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth: auth
  }
}

export default withRouter(connect(mapStateToProps, actions)(Login));
