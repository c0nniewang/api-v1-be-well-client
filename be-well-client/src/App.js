import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import MainContainer from './components/MainContainer'
import * as actions from './actions'
import { connect } from 'react-redux';
import Login from './components/Login'


class App extends Component {
  componentDidMount() {
    this.props.fetchUser(1);
  }

  render() {
    console.log('APP', this.props)
    return (
      <div className="App">
        <Navbar />
        {this.props.loggedIn? (<div className="ui fluid container">
          <MainContainer />
          </div>) : (
          <div className="main">
          <Login /></div>
        )}
          
      </div>
    );
  }
}

const mapStateToProps = ({ user, goals, thoughts, updates, auth}) => {
  console.log('USER', user, goals)
  return {
    auth: auth,
    loading: user.loading,
    profile: user.profile,
    goals: goals,
    thoughts: thoughts,
    updates: updates
  }
}

export default connect(mapStateToProps, actions)(App);
