import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Navbar from './Navbar'
import withAuth from '../hocs/withAuth'
import DailyUpdateContainer from './DailyUpdateContainer'
import { Switch, Route, withRouter } from 'react-router-dom';
import DailyUpdateForm from './DailyUpdateForm'
import GoalsContainer from './GoalsContainer'



class MainContainer extends React.Component {
  componentDidMount() {
   this.props.fetchUserInfo(1);
  }

  render() {
    console.log('MAIN', this.props)
    return (<div className="ui fluid container">
      <div className="main">
      <Navbar />
      <div className="ui middle aligned stackable grid container">
        <div className="row">
          <div className="six wide column">
            <GoalsContainer />
          </div>
          <div className="eight wide right floated column">
            <div className="ui raised very padded text container segment">
              <h2 className="ui header">Hi, {this.props.user.profile.name}.</h2>
                <Switch>
                  <Route exact path="/profile" render={() => {
                    return <DailyUpdateContainer />
                  }}/>
                  <Route exact path="/profile/newUpdate" render={() => {
                    return <DailyUpdateForm />
                  }} />
                </Switch>
            </div>
          </div>
        </div>
      </div>
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