import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Navbar from './Navbar'
import withAuth from '../hocs/withAuth'
import { Switch, Route, withRouter } from 'react-router-dom';
import HomeContainer from './HomeContainer'
// import GoalsContainer from './GoalsContainer'
import DailyUpdateForm from './DailyUpdateForm';
import MainGoalsContainer from './MainGoalsContainer'
import ThoughtEntriesContainer from './ThoughtEntriesContainer'




class MainContainer extends React.Component {
  componentDidMount() {
   this.props.fetchUserInfo(1);
  }

  render() {
    console.log('MAIN')
    return (
      <div className="ui fluid container">
        <div className="main">
        <Navbar />
        <Switch>
          <Route exact path="/profile" render={() => {
            return <HomeContainer />
          }} />
          <Route path="/profile/goals" render={() => {
              return <MainGoalsContainer />
            }}/>
          <Route path="/profile/thought-entries" render={() => {
            return <ThoughtEntriesContainer />
          }} />
          
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

export default withRouter(withAuth(connect(mapStateToProps, actions)(MainContainer)))