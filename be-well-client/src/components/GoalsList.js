import React from 'react';
import GoalCard from './GoalCard'

const GoalsList = ({goals}) => {
  const goalsList = goals.map(goal => <GoalCard key={goal.id} goal={goal} />)
  return <div className="ui relaxed divided list scroll">{goalsList}</div>
}

export default GoalsList