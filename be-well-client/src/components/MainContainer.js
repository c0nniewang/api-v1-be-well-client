import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Navbar from './Navbar'
import withAuth from '../hocs/withAuth'
import { Switch, Route, withRouter } from 'react-router-dom';
import HomeContainer from './HomeContainer'
import DailyUpdateForm from './DailyUpdateForm';
import MainGoalsContainer from './MainGoalsContainer'
import ThoughtEntriesContainer from './ThoughtEntriesContainer'
import ActivitiesContainer from './ActivitiesContainer'




class MainContainer extends React.Component {
  componentDidMount() {
   this.props.fetchUserInfo(this.props.id);
   this.props.fetchCognitiveDistortions();
  }

  render() {
    console.log('MAIN')
    return (
      <div className="ui fluid container">
        <Navbar />
        <div className="main">
        <Switch>
        <Route exact path="/profile/home" render={() => {
          return <HomeContainer />
        }} />
        <Route path="/profile/goals" render={() => {
              return <MainGoalsContainer />
            }}/>
          <Route path="/profile/thought-entries" render={() => {
            return <ThoughtEntriesContainer />
          }} />
           <Route path="/profile/newUpdate" render={() => {
                return <DailyUpdateForm />
              }} />
          <Route path="/profile/dashboard" render={() => {
            return <ActivitiesContainer />
          }} />
        </Switch>

        </div>
      </div>)
  }
}

const mapStateToProps = ({ auth, goals, thoughts, updates }) => {
  return {
    id: auth.currentUser.id,
    goals,
    thoughts,
    updates
  }
}

export default withRouter(withAuth(connect(mapStateToProps, actions)(MainContainer)))