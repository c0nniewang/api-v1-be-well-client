import React from 'react';
import { Icon, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class CompletedGoalCard extends React.Component {
  render() {
    console.log('completed', this.props)
  return (<div className="item">
        <div className="content">
          <div className="header"><Icon name="star" 
          color="olive"/>Goal: {this.props.goal.title} <Icon name="check" color="green"/></div>
          <div className="meta">Date completed: {new Date(this.props.goal.date_completed).toDateString()} </div>
          <div className="description">
            <b>Why was this goal important to you?</b><br />
            {this.props.goal.relevance}<br />
            <p></p>
            <b>How did you feel upon completion of this goal?</b><br />
            {this.props.reflection[0] ? this.props.reflection[0].emotions : null} <br />
            <p></p>
            <b>Did you feel like you were successful in your completion of this goal?</b><br />
            {this.props.reflection[0] ? this.props.reflection[0].success : null}<br />
            <button
            onClick={(id) => this.props.deleteGoal(this.props.goal.id)}
            className="ui button negative"><Icon name="trash"/></button>
            <p></p>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, actions)(CompletedGoalCard);