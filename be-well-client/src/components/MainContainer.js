import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Navbar from './Navbar'
import withAuth from '../hocs/withAuth'
import { Switch, Route, withRouter } from 'react-router-dom';
import HomeContainer from './HomeContainer'
import GoalsContainer from './GoalsContainer'
import DailyUpdateForm from './DailyUpdateForm';
import MainGoalsContainer from './MainGoalsContainer'
import ThoughtEntriesContainer from './ThoughtEntriesContainer'




class MainContainer extends React.Component {
  componentDidMount() {
   this.props.fetchUserInfo(1);
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
           <Route exact path="/profile/newUpdate" render={() => {
                return <DailyUpdateForm />
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
        // <Switch>
        //   <Route exact path="/profile" render={() => {
        //     return <HomeContainer />
        //   }} />
        //   <Route path="/profile/goals" render={() => {
        //       return <MainGoalsContainer />
        //     }}/>
        //   <Route path="/profile/thought-entries" render={() => {
        //     return <ThoughtEntriesContainer />
        //   }} />
          
        // </Switch>