import React from 'react';
import ActivitiesContainer from './ActivitiesContainer';
import DailyUpdateContainer from './DailyUpdateContainer'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Happy from '../images/Happy.gif'
import Sad from '../images/Sad.gif'
import Neutral from '../images/Neutral.gif'
import Dead from '../images/Dead.gif'
import Asleep from '../images/Asleep.gif'


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
          <img src={Dead} />
          <img src={Sad} />
          <img src={Asleep} />
          <img src={Neutral} />
          <img src={Happy} />
        </div>
        <div className="row">
        <div className="sixteen wide column center">
          <br />
          <ActivitiesContainer />
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

