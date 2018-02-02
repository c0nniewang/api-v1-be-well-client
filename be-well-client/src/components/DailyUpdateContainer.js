import React from 'react'
import { connect } from 'react-redux'
import { Message } from 'semantic-ui-react'
import { Route, withRouter } from 'react-router-dom';


class DailyUpdateContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
      completed: false
    }
  }

  componentWillReceiveProps(nextProps) {
    const currentDateTime = new Date()
    
    if (nextProps.mostRecentUpdate) {
      const value = nextProps.mostRecentUpdate.created_at.slice(0, 10) < currentDateTime.toISOString().slice(0, 10)
      console.log(value)
      this.setState({
        visible: value,
        completed: !value
      })
    }
  }

  handleDismiss = () => {
    this.setState({ visible: false})
  }

  formClick = () => {
    this.props.history.push("/profile/newUpdate")
  }

  render() {
    console.log("DAILY UPDATE", this.state)
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
    //   if (this.state.visible) {
    //     return (
    //       <Message 
    //       onDismiss={this.handleDismiss}>
    //       {<h3>Welcome Back!</h3>}
    //       Would you like to complete your daily check-in now?
    //       {<p></p>}
    //       {<button
    //         onClick={this.formClick}
    //         className="ui positive basic button">Let's Do it!</button>}
    //       </Message>
    //     )
    //   } else if (this.state.formDisplay) {
    //     return <DailyUpdateForm />
    //   }
    // return (
    //   <button className="ui positive basic button">Check In Now</button>
    // )
