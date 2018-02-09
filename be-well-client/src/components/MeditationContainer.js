import React from 'react'
import MeditationCardDescription from './MeditationCardDescription'
import { connect } from 'react-redux'


class MeditationContainer extends React.Component{
  render() {

  console.log(this.props.meditations)

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
      <div className="ui four cards">
        {sessions}
      </div>
    </div>
  )};
}

const mapStateToProps = ({ meditations}) => {
  return {
    meditations
  }
}

export default connect(mapStateToProps)(MeditationContainer)