import React from 'react';
import { Icon } from 'semantic-ui-react'

class CompletedGoalCard extends React.Component {
  render() {
  return (<div className="item">
        <div className="content">
          <div className="header"><Icon name="star" 
          color="olive"/>Goal: {this.props.goal.title} <Icon name="check" color="green"/></div>
          <div className="meta">Date completed: {new Date(this.props.goal.date_completed).toDateString()} </div>
          <div className="description">
            <b>Your 3 action steps you took to reach this goal: </b><br />
            1. {this.props.goal.action1} <br />
            2. {this.props.goal.action2} <br />
            3. {this.props.goal.action3} <br />
            <p></p>
            <b>How did you know you reached your goal?</b><br />
            {this.props.goal.attainable}<br />
            <p></p>
            <b>Why did you want to reach this goal?</b><br />
            {this.props.goal.relevance}<br />
            <p></p>
          </div>
        </div>
      </div>
    )
  }
}

export default CompletedGoalCard;