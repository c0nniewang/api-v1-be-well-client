import React from 'react';
import GoalCard from './GoalCard'

const GoalsList = ({goals}) => {
  const goalsList = goals.map(goal => <GoalCard key={goal.id} goal={goal} />)
  return <div className="ui cards">{goalsList}</div>
}

export default GoalsList