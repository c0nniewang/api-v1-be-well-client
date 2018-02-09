import React from 'react';
import GoalsContainer from './GoalsContainer';
import DailyUpdateContainer from './DailyUpdateContainer'
import { connect } from 'react-redux'
import { Button, Icon } from 'semantic-ui-react'
import * as actions from '../actions'



class HomeContainer extends React.Component {

  render() {
    console.log(this.props)
    return (
    <div className="ui middle aligned stackable grid container">
      <div className="row">
        <div className="ui raised very padded text container segment">
          <h2 className="ui header">Hi, {this.props.user.profile.name}.</h2>
          <DailyUpdateContainer />
          </div>
        </div>
        <div className="row">
        <div className="fourteen wide column center">
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

export default (connect(mapStateToProps, actions)(HomeContainer))

