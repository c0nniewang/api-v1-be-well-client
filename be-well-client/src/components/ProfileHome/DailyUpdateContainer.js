import React from 'react'
import { connect } from 'react-redux'
import { Message } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';
import DailyUpdateForm from './DailyUpdateForm'

class DailyUpdateContainer extends React.Component {
  render() {
    return (
      <div>
        {!this.props.isCompleted ? (<Message>
                  {<h3>Welcome Back!</h3>}
                  Would you like to complete your daily check-in now?
                  {<p></p>}
                  <DailyUpdateForm />
                  </Message>) : <Message>You have already completed your daily check in. Great work!</Message>}
      </div>
    )
  }
}

function convertToLocalDate(date) {
  let newDate = new Date(date.getTime() + date.getTimezoneOffset()*60*1000)
  let offset = date.getTimezoneOffset()
  let minutes = date.getMinutes()

  newDate.setMinutes(minutes - offset)

  return newDate
}

const mapStateToProps = ({ updates }) => {
  let isCompleted = false

  if (updates.length) {
    let lastCompleted = convertToLocalDate(new Date(updates[updates.length - 1].created_at))
    let today = convertToLocalDate(new Date())

   isCompleted = (lastCompleted.toLocaleDateString() === today.toLocaleDateString())
  }

  return {
    isCompleted
  }
}

export default withRouter(connect(mapStateToProps)(DailyUpdateContainer));
