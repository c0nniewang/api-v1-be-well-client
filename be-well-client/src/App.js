import React, { Component } from 'react';
import './App.css';
import * as actions from './actions'
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import Navbar from './components/Navbar'

import MainContainer from './components/MainContainer'
// import DailyUpdateForm from './DailyUpdateForm';
import MainGoalsContainer from './components/MainGoalsContainer'
import ThoughtEntriesContainer from './components/ThoughtEntriesContainer'
import Login from './components/Login'
import HomeContainer from './components/HomeContainer'
import DailyUpdateForm from './components/DailyUpdateForm'


class App extends Component {
  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.props.fetchUser()
    } else {
      this.setState({ authCompleted: true})
    }
  }

  render() {
    console.log('in app', this.props)
    return (
      <div className="App">
        <div className="main">
        <Switch>
          <Route exact path="/login" render={() => {
            return <Login />
          }} />
          <Route path="/profile" render={() => {
            return <MainContainer />
          }} />
          
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
