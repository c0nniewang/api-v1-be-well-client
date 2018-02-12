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
  weekday[0] = "S"
  weekday[1] = "M"
  weekday[2] = "T"
  weekday[3] = "W"
  weekday[4] = "Th"
  weekday[5] = "F"
  weekday[6] = "Sa"

  const index = weekday[today.getDay()]
  const date = today.getDate()

  console.log(today.toISOString().slice(0, 10))
  const arr = [...Array(8).keys()]
  const offset = arr.map( el => {
    return el - index
  })

  console.log(offset)

  return (
    <div className="five wide column center aligned">
      <h3>Meditation Streak</h3>
    </div>
  )}
}

const mapStateToProps = ({ sessions }) => {
  return { sessions }
}

export default connect(mapStateToProps)(MeditationCounter)