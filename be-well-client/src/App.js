import React, { Component } from 'react';
import './App.css';
import * as actions from './actions'
import { connect } from 'react-redux';
import Login from './components/Login'
import { Switch, Route, withRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer'

class App extends Component {
  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.props.fetchUser()
      this.props.history.push('/profile');
    } else {
      this.setState({ authCompleted: true})
    }
  }

  render() {
    return (
      <div className="App">
      <div className="main">
        <Switch>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/profile" component={MainContainer} />
        </Switch>
      </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: !!state.auth.currentUser.id,
  }
}

export default withRouter(connect(mapStateToProps, actions)(App));
