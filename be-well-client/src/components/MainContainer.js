import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Navbar from './Navbar'
import withAuth from '../hocs/withAuth'
import { Switch, Route, withRouter } from 'react-router-dom';
import HomeContainer from './ProfileHome/HomeContainer'
import MainGoalsContainer from './Goals/MainGoalsContainer'
import ThoughtEntriesContainer from './ThoughtEntries/ThoughtEntriesContainer'
import MeditationContainer from './Meditation/MeditationContainer'
import ResourcesContainer from './Resources/ResourcesContainer'

class MainContainer extends React.Component {
  componentDidMount() {
   this.props.fetchUserInfo(this.props.id);
   this.props.fetchCognitiveDistortions();
   this.props.fetchMeditations()
  }

  render() {
    return (
      <div>
      <div className="mainbackground">
      </div>
      <div className="ui fluid container">
        <Navbar />
        <div className="main">
        <Switch>
        <Route exact path="/profile/home" render={() => {
          return <HomeContainer history={this.props.history}/>
        }} />
        <Route path="/profile/goals" render={() => {
              return <MainGoalsContainer />
            }}/>
          <Route path="/profile/thought-entries" render={() => {
            return <ThoughtEntriesContainer />
          }} />
          <Route path="/profile/meditation" render={() => {
            return <MeditationContainer />
          }} />
          <Route path="/profile/resources" render={() => {
            return <ResourcesContainer />
          }} />
        </Switch>
        </div>
        </div>
      </div>)
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    id: auth.currentUser.id
  }
}

export default withRouter(withAuth(connect(mapStateToProps, actions)(MainContainer)))