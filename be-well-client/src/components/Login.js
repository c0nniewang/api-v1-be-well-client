import React from 'react';
import LoginForm from './LoginForm'
import { connect } from 'react-redux';
import Happy from '../images/Happy.gif'
import SignupForm from './SignupForm'




class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      login: true
    };
  }

  handleClick = () => {
    this.setState({
      login: false
    })
  }

  render() {
    return (
      <div>
        <div className="background">
        </div>
        <div className="login-style">
          <div className="ui container center aligned">
            <img src={Happy} alt="happy"/>
          </div>
          {this.state.login ? <LoginForm /> : <SignupForm />}
          <div className="ui divider" />
          {this.state.login ? (<div className="ui center aligned stackable container">
          <p>New to Us?</p>
          <button 
          className="ui basic primary button" 
          onClick={this.handleClick} >Sign Up</button>
          </div>) : null}
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

export default (connect(mapStateToProps)(Login));
