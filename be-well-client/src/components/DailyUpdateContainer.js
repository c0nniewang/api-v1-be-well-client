import React from 'react'
import { connect } from 'react-redux'
import { Message } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';

class DailyUpdateContainer extends React.Component {

  formClick = () => {
    this.props.history.push("/profile/newUpdate")
  }

  render() {
    return (
      <div>
        {!this.props.isCompleted ? <Message>
          {<h3>Welcome Back!</h3>}
          Would you like to complete your daily check-in now?
          {<p></p>}
          {<button
            onClick={this.formClick}
            className="ui positive basic button">Let's Do it!</button>}
          </Message> : <Message>You have already completed your daily check in. Great work!</Message>}
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
    isCompleted
  }
}

export default withRouter(connect(mapStateToProps)(DailyUpdateContainer));
