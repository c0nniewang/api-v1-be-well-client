import React from 'react'
import { connect } from 'react-redux'
import { Message } from 'semantic-ui-react'
import { Route, withRouter } from 'react-router-dom';


class DailyUpdateContainer extends React.Component {
  constructor(props) {
    super(props);

    const currentDateTime = new Date()
    // ISO time is 5 hours ahead of EST - should account for local time
    if (props.mostRecentUpdate) {
      const value = props.mostRecentUpdate.created_at.slice(0, 10) < currentDateTime.toISOString().slice(0, 10)
      this.state = {
        visible: value,
        completed: !value
      }
    } else {
      this.state = {
        visible: true,
        completed: false
      }
    }
  }

  handleDismiss = () => {
    this.setState({ visible: false})
  }

  formClick = () => {
    this.props.history.push("/profile/newUpdate")
  }

  render() {
    return (
      <div>
        {this.state.visible ? <Message 
          onDismiss={this.handleDismiss}>
          {<h3>Welcome Back!</h3>}
          Would you like to complete your daily check-in now?
          {<p></p>}
          {<button
            onClick={this.formClick}
            className="ui positive basic button">Let's Do it!</button>}
          </Message> : null}
          {this.state.visible === false ? (this.state.completed ? <Message>You have already completed your daily check in. Great work!</Message> : <button className="ui positive basic button" onClick={this.formClick}>Check In Now</button>) : null }
      </div>
    )
  }
  
}

const mapStateToProps = ({ updates }) => {
  return {
    mostRecentUpdate: updates[updates.length - 1]
  }
}

export default withRouter(connect(mapStateToProps)(DailyUpdateContainer));
