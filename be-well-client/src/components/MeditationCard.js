import React from 'react';
import { Modal, Button, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class MeditationCard extends React.Component {
  constructor() {
    super();

    this.state = {
      modalOpen: false
    }
  }

  handleOpen = () => {
    this.setState({
      modalOpen: true
    })
  }

  handleClose = (ev) => {
    console.log(ev.target.name)
    if (ev.target.name === "done") {
      const meditationId = this.props.id
      const userId = this.props.userId
      console.log(meditationId, userId)
      this.props.newSession({meditation_id: meditationId, user_id: userId})
      // create function and resources for meditation session on backend
    }
    this.setState({
      modalOpen: false
    })
  }

  render() {
    return (
      <Modal 
      trigger={<button onClick={this.handleOpen} className="ui icon button" id="my-green">
          <i className="right chevron icon"></i> Begin
        </button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <Modal.Content>
          <h3 className="ui dividing header">Begin Meditation Session</h3>
          <p>Please find a quiet spot and relaxed position, press the play button when you are ready, and close your eyes. Earphones are recommended for a better quality of experience.</p>
          <audio controls>
            <source src={this.props.audio_url} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </Modal.Content>
        <Modal.Actions>
          <Button name="back" onClick={this.handleClose}>Back</Button>
          <Button name="done" id="my-green" onClick={this.handleClose}>
            <Icon name="check" /> Done
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return {userId: auth.currentUser.id}
}

export default connect(mapStateToProps, actions)(MeditationCard)