import React from 'react';

class CompletedGoalCard extends React.Component {
  render() {
  return (
    <div>{this.props.goal.title}</div>
  )}
}

export default CompletedGoalCard;