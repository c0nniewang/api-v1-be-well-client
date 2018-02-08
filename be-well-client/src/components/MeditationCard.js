import React from 'react';
import mp3 from '../audio/01_Breathing_Meditation.mp3'

const MeditationCard = () => {
  return (
    <div className="ui purple card">
      <h4>Meditation</h4>
      <audio controls>
        <source src={mp3} type="audio/mpeg" />
      Your browser does not support the audio element.
      </audio>
    </div>
  )
}

export default MeditationCard