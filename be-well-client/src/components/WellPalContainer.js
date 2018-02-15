import React from 'react'
import { connect } from 'react-redux'
import Happy from '../images/Happy.gif'
import Sad from '../images/Sad.gif'
import Neutral from '../images/Neutral.gif'
import Dead from '../images/Dead.gif'
import Asleep from '../images/Asleep.gif'

const WellPalContainer = (props) => {
  console.log(props)
  let wellPal
  let total = 80
  let desc

  const oneWeekAgo = new Date()
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)

  const completedGoals = props.goals.completed.filter( goal => {
    return new Date(goal.date_completed) > oneWeekAgo
  }).length


  const createdGoals = props.goals.active.filter(goal => {
    return new Date(goal.created_at) > oneWeekAgo
  }).length

  const medSessions = props.sessions.filter( med => {
    return new Date(med.created_at) > oneWeekAgo
  }).length

  let sleepAvg
  const sleepArr = props.updates.map(update => update.sleep)

  {sleepArr.length ? sleepAvg = Math.round(sleepArr.reduce((acc, current) => acc + current) / sleepArr.length) : null}

  let moodAvg1
  const moodArr = props.updates.map(update => update.mood_num)

  {moodArr.length ? moodAvg1 = (moodArr.reduce((acc, current) => acc + current) / moodArr.length) : null}

  let moodAvg2
  const moods = props.thoughts.map(thought => thought.current_mood)
  {moods.length ? moodAvg2 = (moods.reduce((acc, current) => acc + current) / moods.length) : null}

  const finalmood = Math.round(moodAvg1 + moodAvg2) / 2

  const moodDiff = (finalmood * 10) - 50

  let sleepGrade
  {sleepAvg < 8 ? sleepGrade = -10 : sleepGrade = 10}

  console.log('HEY', completedGoals, createdGoals, medSessions, sleepAvg, finalmood)

  total = (completedGoals * 5) + (createdGoals * 3) + (medSessions * 5) + sleepGrade + moodDiff

  {Number.isInteger(total) ? total : total = 75}
  console.log('HI', finalmood, moodDiff, total)

  if (total < 20) {
    wellPal = <img src={Dead} />
    desc = "fairly dead"
  } else if (total < 40) {
    wellPal = <img src={Sad} />
    desc = "sad"
  } else if (total < 60) {
    wellPal = <img src={Asleep} />
    desc = "sleepy"
  } else if (total < 80) {
    wellPal = <img src={Neutral} />
    desc = "okay"
  } else if (total > 80) {
    wellPal = <img src={Happy} />
    desc = "happy!"
  }

  return (
    <div className="row">
      <div className="eight wide center aligned column">
      <div id="wellPalContainer">
        <br /><br /><br />
        {wellPal}</div>
      </div>
      <div className="eight wide column">
        <h3 className="ui header">Your WellPal is feeling {desc} today.</h3>
      </div>
    </div>
  )
}

const mapStateToProps = ({ goals, thoughts, updates, sessions }) => {
  return {
    goals,
    thoughts,
    updates,
    sessions
  }
}

export default connect(mapStateToProps)(WellPalContainer)