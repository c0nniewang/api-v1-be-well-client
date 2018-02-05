import React from 'react';
import DailyUpdateForm from './DailyUpdateForm';
import GoalsContainer from './GoalsContainer';
import DailyUpdateContainer from './DailyUpdateContainer'
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { Button, Icon } from 'semantic-ui-react'


class HomeContainer extends React.Component {
  render() {
    return (
    <div className="ui middle aligned stackable grid container">
      <div className="row">
        <Button animated floated="right" color="teal">
          <Button.Content visible><Icon name="cloud" /></Button.Content>
          <Button.Content hidden>New Thought</Button.Content>
        </Button>
        <Button animated floated="right" color="olive">
          <Button.Content visible><Icon name="star" /></Button.Content>
          <Button.Content hidden>New Goal</Button.Content>
        </Button>
      </div>
      <div className="row">
        <div className="ui raised very padded text container segment">
          <h2 className="ui header">Hi, {this.props.user.profile.name}.</h2>
          <DailyUpdateContainer />
            <Switch>
              <Route exact path="/profile/newUpdate" render={() => {
                return <DailyUpdateForm />
              }} />
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

export default withRouter(connect(mapStateToProps)(HomeContainer))

