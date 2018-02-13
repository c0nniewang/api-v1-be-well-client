import React from 'react';
import MeditationCard from './MeditationCard'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { Icon } from 'semantic-ui-react'


class MeditationCardDescription extends React.Component {
  render() {
    console.log(this.props.meditations.favorites)
  let star;
  if (this.props.meditations.favorites.find( el => el.meditation.id === this.props.session.id)) {
    star = (<Icon name="star" color="yellow" onClick={({data}) => this.props.removeFavoriteMeditation({meditation_id: this.props.session.id, user_id: this.props.id})} size="large"/>)
  } else {
    star = (<Icon name="star" onClick={({data}) => this.props.addFavoriteMeditation({meditation_id: this.props.session.id, user_id: this.props.id})} size="large" />)
  }

    return (
      <div className="ui card">
        <div className="content">
          <div className="header">{this.props.session.name}</div>
        </div>
        <div className="content">
          <h4 className="ui sub header">Session Length: {this.props.session.length}</h4>
          <div className="description">
            <p>{this.props.session.description}</p>
          </div>
        </div>
        <div className="extra content">
          <span className="right floated">
            <MeditationCard audio_url={this.props.session.audio_url} id={this.props.session.id}/>
          </span>
            {star}
            Favorite
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ auth, meditations }) => {
  return { 
    id: auth.currentUser.id,
    meditations
  }
}

export default connect(mapStateToProps, actions)(MeditationCardDescription)