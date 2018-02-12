import React from 'react'
import { Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'

class MeditationCounter extends React.Component {

  // const boxes

  render() {
  console.log("COUNTER", this.props)
  // grab current month, render boxes for each day, color box if meditated on that day
  const today = new Date()

  const weekday = new Array(7)
  weekday[0] = "Sunday"
  weekday[1] = "Monday"
  weekday[2] = "Tuesday"
  weekday[3] = "Wednesday"
  weekday[4] = "Thursday"
  weekday[5] = "Friday"
  weekday[6] = "Saturday"

  const index = weekday[today.getDay()]
  const date = today.getDate()

  weekday[today.getDay()] = "Today!"

  const format = today.toISOString().slice(0, 10)

  const arr = [...Array(7).keys()]
  const offset = arr.map( el => {
    return el - today.getDay()
  })

  const week = offset.map(day => {
    const newDay = date + day
    const newDate = format.slice().substr(0, 8) + newDay
    console.log(newDate)
    return newDate
  })

  const sessionDates = {}

  this.props.sessions.map(session => {
    if (sessionDates[session.created_at.slice(0, 10)] === undefined) {
      sessionDates[session.created_at.slice(0, 10)] = 1
    } else {
      sessionDates[session.created_at.slice(0, 10)] += 1
    }
  })

  const buttons = week.map((day, index) => {
    if (sessionDates[day] !== undefined) {
      return <div key={index} className="row"><div className="column right aligned">{weekday[index]}</div><div className="column left aligned"><Icon name="heart" color="purple"/></div></div>
    }
    else {
      return <div key={index} className="row"><div className="column right aligned">{weekday[index]}</div><div className="column left aligned"><Icon name="empty heart" color="purple"/></div></div>
    }
  })

  console.log(sessionDates)

  return (
    <div className="five wide column center aligned">
      <h3>Meditation Streak</h3>
      <div className="ui two column aligned stackable grid container">
      {buttons}
      </div>
    </div>
  )}
}

const mapStateToProps = ({ sessions }) => {
  return { sessions }
}

export default connect(mapStateToProps)(MeditationCounter)