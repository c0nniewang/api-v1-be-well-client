import React from 'react'
import DailyUpdateForm from './DailyUpdateForm'
import { connect } from 'react-redux'
import { Message } from 'semantic-ui-react'

class DailyUpdateContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
      formDisplay: false
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log("CDM", nextProps)

    const currentDateTime = new Date()

    const value = nextProps.mostRecentUpdate.created_at.slice(0, 10) < currentDateTime.toISOString().slice(0, 10)
    console.log(value)
    this.setState({
      visible: value
    })
  }

  displayForm = () => {
    this.handleDismiss()
    this.setState({
      formDisplay: true
    })
  }

  handleDismiss = () => {
    this.setState({ visible: false})
  }

  formClick = () => {
    this.setState({ formDisplay: true})
  }

  render() {
      if (this.state.visible) {
        return (
          <Message 
          onDismiss={this.handleDismiss}>
          {<h3>Welcome Back!</h3>}
          Would you like to complete your daily check-in now?
          {<p></p>}
          {<button
            onClick={this.formClick}
            className="ui positive basic button">Let's Do it!</button>}
          </Message>
        )
      } else if (this.state.formDisplay) {
        return <DailyUpdateForm />
      }
    return (
      <button className="ui positive basic button">Check In Now</button>
    )


  }
}

const mapStateToProps = ({ updates }) => {
  return {
    mostRecentUpdate: updates[updates.length - 1]
  }
}

export default connect(mapStateToProps)(DailyUpdateContainer);
