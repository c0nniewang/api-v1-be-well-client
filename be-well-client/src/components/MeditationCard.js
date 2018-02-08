import React from 'react';
import mp3 from '../audio/01_Breathing_Meditation.mp3'
import { Modal, Button, Icon } from 'semantic-ui-react'

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
      // this.props.newSessionCompleted(meditationId)
    }
    this.setState({
      modalOpen: false
    })
  }

  render() {
    return (
      <Modal 
      trigger={<button onClick={this.handleOpen} className="ui icon button positive">
          <i className="right chevron icon"></i> Begin
        </button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <Modal.Content>
          <h3 className="ui dividing header">Begin Meditation Session</h3>
          <p>Please find a quiet spot and relaxed position, press the play button when you are ready, and close your eyes. Earphones are recommended for a better quality of experience.</p>
          <audio controls>
            <source src={mp3} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </Modal.Content>
        <Modal.Actions>
          <Button name="back" onClick={this.handleClose}>Back</Button>
          <Button name="done" positive onClick={this.handleClose}>
            <Icon name="check" /> Done
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default MeditationCard