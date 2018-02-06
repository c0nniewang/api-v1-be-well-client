import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions'

class GoalCard extends React.Component {
  handleDoneClick = (id) => {
    this.props.completedGoal(id)
  }

  render() {
    return (<div className="ui card">
        <div className="content">
          <div className="header">Goal: {this.props.goal.title}</div>
        </div>
        <div className="content">
          <h4 className="ui sub header">Target Date: {this.props.goal.target_date}</h4>
          <div className="meta">Date Created: {this.props.goal.created_at.slice(0, 10)}</div>
          <div className="description">
            <b>What are your action steps to reaching this goal?</b>
            <br/>
            1. {this.props.goal.action1} <br />
            2. {this.props.goal.action2} <br />
            3. {this.props.goal.action3} <br />
            <b>How are you tracking your progress in reaching your goal?</b><br />
            //need to add to backend<br />
            <b>What do you need to do to reach this goal?</b><br />
            {this.props.goal.attainable}<br />
            <b>Why is this goal important to you?</b><br />
            {this.props.goal.relevance}
          </div>
        </div>
        <div className="extra content">
          <button className="ui button">Edit Goal</button>
          <span className="right floated">
            <button className="ui icon button positive" onClick={() => this.handleDoneClick(this.props.goal.id)}>
              <i className="check icon"></i>
            </button>
          </span>
        </div>
      </div>)
  }
}

export default connect(null, actions)(GoalCard)