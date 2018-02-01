import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Navbar from './Navbar'
import withAuth from '../hocs/withAuth'
import DailyUpdateForm from './DailyUpdateForm'


class MainContainer extends React.Component {
  componentDidMount() {
   this.props.fetchUserInfo(1);
  }

  render() {
    console.log('MAIN', this.props)
    return (<div className="ui fluid container">
      <div className="main">
      <Navbar />
      <div className="ui raised very padded text container segment">
        <h2 className="ui header">Hi, {this.props.user.profile.name}.</h2>
        <h3>Would you like to complete your daily check-in now?</h3>
        <DailyUpdateForm />
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