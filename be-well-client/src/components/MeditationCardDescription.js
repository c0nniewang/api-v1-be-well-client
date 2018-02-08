import React from 'react';
import MeditationCard from './MeditationCard'


const MeditationCardDescription = () => {
  return (
    <div className="ui card">
      <div className="content">
        <div className="header">Session Title here</div>
      </div>
      <div className="content">
        <h4 className="ui sub header">Session Length: </h4>
        <div className="meta">Date Created:</div>
        <div className="description">
          <p>desc here</p>
        </div>
      </div>
      <div className="extra content">
        <span className="right floated">
          <MeditationCard />
        </span>
      </div>
    </div>
  )
}

export default MeditationCardDescription