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
import MeditationContainer from './MeditationContainer'
import ResourcesContainer from './ResourcesContainer'




class MainContainer extends React.Component {
  componentDidMount() {
   this.props.fetchUserInfo(this.props.id);
   this.props.fetchCognitiveDistortions();
   this.props.fetchMeditations()
  }

  render() {
    console.log('MAIN', this.props.meditations)
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
          <Route path="/profile/meditation" render={() => {
            return <MeditationContainer />
          }} />
          <Route path="/profile/resources" render={() => {
            return <ResourcesContainer />
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