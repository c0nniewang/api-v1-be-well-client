import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Navbar from './Navbar'
import withAuth from '../hocs/withAuth'
import { Switch, Route, withRouter } from 'react-router-dom';
import HomeContainer from './HomeContainer'



class MainContainer extends React.Component {
  componentDidMount() {
   this.props.fetchUserInfo(1);
  }

  render() {
    console.log('MAIN', this.props)
    return (<div className="ui fluid container">
      <div className="main">
      <Navbar />
      <Switch>
        <HomeContainer />
      </Switch>
    </div>
    </div>)
  }
}

const mapStateToProps = ({ user, auth, goals, thoughts, updates}) => {
  return {
    user: user,
    auth: auth,
    goals: goals,
    thoughts: thoughts,
    updates: updates
  }
}

export default withAuth(connect(mapStateToProps, actions)(MainContainer))