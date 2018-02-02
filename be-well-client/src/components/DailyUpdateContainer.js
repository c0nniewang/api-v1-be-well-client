import React from 'react'
import DailyUpdateForm from './DailyUpdateForm'
import { connect } from 'react-redux'

class DailyUpdateContainer extends React.Component {
  render() {
    // debugger
    console.log(this.props)
    const checkIn =
      <div className="ui visible message">Would you like to complete your daily check-in now?
        <p></p>
        <button className="ui positive basic button">Let's Do it!</button>
        <button className="ui negative basic button">Not Now</button>
      </div>

      const currentDateTime = new Date()
    const checkInFunc = () => {
      if (this.props.mostRecentUpdate) {

        {this.props.mostRecentUpdate.created_at.slice(0, 10) < currentDateTime.toISOString().slice(0, 10) ? {checkIn} : 'You have already completed your check in today!' }
      }
    }
    return (
      <div>
        {checkInFunc()}
        <DailyUpdateForm />
        </div>
    )
  }
}

const mapStateToProps = ({ updates }) => {
  return {
    mostRecentUpdate: updates[updates.length - 1]
  }
}

export default connect(mapStateToProps)(DailyUpdateContainer);
