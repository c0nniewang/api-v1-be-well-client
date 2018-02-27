import React from 'react';
import { Modal, Button, Icon, Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux'
import * as actions from '../../actions'


class ThoughtEntryForm extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      situation: '',
      emotions: '',
      negative_thoughts: '',
      outcome: '',
      cognitive_distortions: [],
      current_mood: '',
      modalOpen: false
    }
  }

  componentDidMount = () => {
    if (this.props.click) {
      this.setState({
        modalOpen: true
      })
    }
  }

  handleChange = (ev) => {
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }

  // handleOpen = () => {
  //   this.setState({
  //     modalOpen: true
  //   })
  // }

  // handleClose = (ev) => {
  //   this.setState({
  //     modalOpen: false
  //   })

  //   if (ev.target.name === "submit") {
  //     this.props.newThoughtEntry({...this.state, user_id: this.props.id})
  //   }
  // }

  handleDropChange = (value, key) => {
    this.setState({
      [key]: value
    })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()

    console.log(this.state)
    this.props.newThoughtEntry({...this.state, user_id: this.props.id})

    this.setState({
      title: '',
      situation: '',
      emotions: '',
      negative_thoughts: '',
      outcome: '',
      cognitive_distortions: [],
      current_mood: '',
      modalOpen: false
    })
  }

  render() {
    const cogOptions= this.props.cogDistortions.map( cog => ({key: cog.id, text: cog.title, value: cog.id}))

    const numArray = [...Array(11).keys()]
    const numberOptions = numArray.slice(1).map(num => ({text: num, value: num}))

    // open={this.state.modalOpen}
    // onClose={this.state.handleClose}
    return (
    <Modal 
    trigger={this.props.button}
    >
      <Modal.Header><Icon name="cloud" /> New Thought Entry</Modal.Header>
      <Modal.Content >
        <form className="ui form">
          <div className="field">
            <label>Title</label>
            <input 
            type="text" 
            onChange={this.handleChange}
            value={this.state.title}
            name="title"
            required
            />
          </div>
          <div className="field">
            <label>What happened?</label>
            <textarea 
            rows="3" 
            onChange={this.handleChange}
            value={this.state.situation}
            name="situation"
            required
            />
          </div>
          <div className="field">
            <label>What emotions were you feeling?</label>
            <input 
            type="text" 
            onChange={this.handleChange}
            value={this.state.emotions}
            name="emotions"
            required
            />
          </div>
          <div className="field">
            <label>On a scale from 1-10, with 1 being the least positive, and 10 being the most positive, how would you rate your current mood?</label>
            <Dropdown 
            placeholder="Select Number" 
            fluid selection options={numberOptions}
            onChange={(e, {value}) => {this.handleDropChange(value, 'current_mood')}}
            value={this.state.current_mood}
            />
          </div>
          <div className="field">
            <label>Were there any negative thoughts that immediately came to mind? If so, what were they?</label>
            <textarea 
            rows="3" 
            onChange={this.handleChange}
            value={this.state.negative_thoughts}
            name="negative_thoughts"
            required
            />
          </div>
          <div className="field">
            <label>Looking back at your previous answer, are there any cognitive distortions that you can identify in your negative thoughts?</label>
            <Dropdown 
            placeholder="Select Options" 
            fluid multiple selection options={cogOptions}
            onChange={(e, {value}) => {this.handleDropChange(value, 'cognitive_distortions')}}
            value={this.state.cognitive_distortions}
            />
          </div>
          <div className="field">
            <label>What was the outcome of the situation? Is there anything you wish you could have handled differently?</label>
            <textarea 
            rows="3" 
            onChange={this.handleChange}
            value={this.state.outcome}
            name="outcome"
            required
            />
          </div>
        </form>
      </Modal.Content>
      <Modal.Actions>
        <Button id="my-green" onClick={this.handleClose} name="submit">
          Submit <Icon name="right chevron" />
        </Button>
      </Modal.Actions>
    </Modal>
    )
  }
}

const mapStateToProps = ({auth, cogDistortions}) => {
  return {
    id: auth.currentUser.id,
    cogDistortions
  }
}

export default connect(mapStateToProps, actions)(ThoughtEntryForm)