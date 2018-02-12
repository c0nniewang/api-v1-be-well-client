import React from 'react'
import { connect } from 'react-redux'
import { Message } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';

class DailyUpdateContainer extends React.Component {
  // constructor(props) {
  //   super(props);

  //   const currentDateTime = new Date()
  //   // ISO time is 5 hours ahead of EST - should account for local time
  //   // on first load - state is not being updated
  //   if (props.mostRecentUpdate) {
  //     const value = props.mostRecentUpdate.created_at.slice(0, 10) < currentDateTime.toISOString().slice(0, 10)
  //     this.state = {
  //       visible: value,
  //       completed: !value
  //     }
  //   } else {
  //     this.state = {
  //       visible: true,
  //       completed: false
  //     }
  //   }
  // }

  // componentWillReceiveProps(nextProps) {
  //   const currentDateTime = new Date()

  //   const value = nextProps.mostRecentUpdate.created_at.slice(0, 10) < currentDateTime.toISOString().slice(0, 10)
  //     this.state = {
  //       visible: value,
  //       completed: !value
  //     }
  // }

  handleDismiss = () => {
    this.setState({ visible: false})
  }

  formClick = () => {
    this.props.history.push("/profile/newUpdate")
  }

  render() {
    console.log("DAILY", this.props.isCompleted)
    return (
      <div>
        {!this.props.isCompleted ? <Message 
          onDismiss={this.handleDismiss}>
          {<h3>Welcome Back!</h3>}
          Would you like to complete your daily check-in now?
          {<p></p>}
          {<button
            onClick={this.formClick}
            className="ui positive basic button">Let's Do it!</button>}
          </Message> : null}
          {!this.props.isCompleted === false ? (this.props.isCompleted ? <Message>You have already completed your daily check in. Great work!</Message> : <button className="ui positive basic button" onClick={this.formClick}>Check In Now</button>) : null }
      </div>
    )
  }
}

const mapStateToProps = ({ updates }) => {
  const currentDateTime = new Date()

  let isCompleted = false

  if (updates.length) {
   isCompleted = !(updates[updates.length - 1].created_at.slice(0, 10) < currentDateTime.toISOString().slice(0, 10))
  }

  return {
    mostRecentUpdate: updates[updates.length - 1],
    isCompleted
  }
}

export default withRouter(connect(mapStateToProps)(DailyUpdateContainer));
