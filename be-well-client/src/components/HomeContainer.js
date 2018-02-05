import React from 'react';
import DailyUpdateForm from './DailyUpdateForm';
import GoalsContainer from './GoalsContainer';
import DailyUpdateContainer from './DailyUpdateContainer'
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

class HomeContainer extends React.Component {
  render() {
    return (
    <div className="ui middle aligned stackable grid container">
      <div className="row">
        <div className="ui raised very padded text container segment">
          <h2 className="ui header">Hi, {this.props.user.profile.name}.</h2>
            <Switch>

              <Route exact path="/profile/newUpdate" render={() => {
                return <DailyUpdateForm />
              }} />

              <Route exact path="/profile" render={() => {
                return <DailyUpdateContainer />
              }}/>
            </Switch>
          </div>
        </div>
        <div className="row">
        <div className="fourteen wide column">
          <GoalsContainer />
        </div>
      </div>
    </div>
    )
  }
}

const mapStateToProps = ({ user }) => {
  return {
    user: user
  }
}

export default connect(mapStateToProps)(HomeContainer)

