import React from 'react'
import MeditationCardDescription from './MeditationCardDescription'

const MeditationContainer = () => {
  return (
    <div>
      <h2 className="ui header">
        <i className="sound icon"></i>
        <div className="content">
        Guided Meditation Sessions
        </div>
      </h2>
      <div className="ui cards">
        <MeditationCardDescription />
      </div>
    </div>
  );
}

export default MeditationContainer