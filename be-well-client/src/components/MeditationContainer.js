import React from 'react'
import MeditationCardDescription from './MeditationCardDescription'
import { connect } from 'react-redux'
import { Statistic } from 'semantic-ui-react'


class MeditationContainer extends React.Component{
  render() {

  console.log(this.props.sessions)

  const sessions = this.props.meditations.map(session => {
    return <MeditationCardDescription key={session.id} session={session} />
  })


  return (
    <div>
      <h2 className="ui header">
        <i className="sound icon"></i>
        <div className="content">
        Guided Meditation Sessions
        </div>
      </h2>
      <h3>This month: </h3>
      <div className="ui container center aligned">
        <Statistic>
          <Statistic.Value>8</Statistic.Value>
          <Statistic.Label>Sessions Completed</Statistic.Label>
        </Statistic>
      </div>

      <div className="ui four cards">
        {sessions}
      </div>
    </div>
  )};
}

const mapStateToProps = ({ meditations, sessions}) => {
  return {
    meditations,
    sessions
  }
}

export default connect(mapStateToProps)(MeditationContainer)