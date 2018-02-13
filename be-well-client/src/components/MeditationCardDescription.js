import React from 'react';
import MeditationCard from './MeditationCard'


const MeditationCardDescription = (props) => {
  // console.log(props.audio)
  return (
    <div className="ui card">
      <div className="content">
        <div className="header">{props.session.name}</div>
      </div>
      <div className="content">
        <h4 className="ui sub header">Session Length: {props.session.length}</h4>
        <div className="description">
          <p>{props.session.description}</p>
        </div>
      </div>
      <div className="extra content">
        <span className="right floated">
          <MeditationCard audio_url={props.session.audio_url} id={props.session.id}/>
        </span>
        <span className="left floated star">
          <i class="star icon"></i>
          Favorite
        </span>
      </div>
    </div>
  )
}

export default MeditationCardDescription