import React from 'react';
import LoginForm from './LoginForm'
import { connect } from 'react-redux';
import Happy from '../images/Happy.gif'
import SignupForm from './SignupForm'
import { withRouter, Route, Switch } from 'react-router-dom';




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
          <Switch>
          <Route exact path="/login" render={() => {
            return <LoginForm />
          }} />
          <Route path="/login/new" render={() => {
            return <SignupForm />
          }} />
          </Switch>
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

export default withRouter((connect(mapStateToProps)(Login)));
