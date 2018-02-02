import React from 'react'
import DailyUpdateForm from './DailyUpdateForm'
import { connect } from 'react-redux'

class DailyUpdateContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: true
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log("CDM", nextProps)

    const currentDateTime = new Date()

    const value = nextProps.mostRecentUpdate.created_at.slice(0, 10) < currentDateTime.toISOString().slice(0, 10)
    console.log(value)
    this.setState({
      display: value
    })
  }

  render() {
    // debugger

    const checkIn =
      <div className="ui visible message">Would you like to complete your daily check-in now?
        <p></p>
        <button className="ui positive basic button">Let's Do it!</button>
        <button className="ui negative basic button">Not Now</button>
      </div>

    return (
      <div>
        {this.state.display ? <div className="ui visible message">Would you like to complete your daily check-in now?
        <p></p>
        <button className="ui positive basic button">Let's Do it!</button>
        <button className="ui negative basic button">Not Now</button>
      </div> : <div className="ui visible message">You have already checked in for today. Good work!</div>}
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
