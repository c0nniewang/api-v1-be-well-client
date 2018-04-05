import React from 'react';
import { Modal, Button, Icon, Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux'
import * as actions from '../../actions'


class GoalReflection extends React.Component {
  constructor() {
    super();

    this.state = {
      success: '',
      emotions: '',
      mood_num: '',
      modalOpen: false,
      errors: false,
    }
  }

  handleOpen = () => {
    this.setState({
      modalOpen: true
    })
  }

  handleClose = (ev) => {
    if (ev.target.name === "submit") {
      let error = false

      Object.entries(this.state).forEach(([k,v]) => {
        if (v.length === 0) {
          error = true
        }
      })

      if (error === false) {
      const id = this.props.goal.id
      this.props.completedGoal({ ...this.state, goal_id: id})

      this.setState({ modalOpen: false})
      } else {
        this.setState({ errors: true})
      }
    } else {
      this.setState({ modalOpen: false })
    }
  }

  handleChange = (ev) => {
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }

  handleDropChange = (value, key) => {
    this.setState({
      [key]: value
    })
  }

  render() {
    const numArray = [...Array(11).keys()]
    const numberOptions = numArray.slice(1).map(num => ({text: num, value: num}))

    const required = 
      <div className="ui negative message">
        <div className="header">
        All fields must be completed.
        </div>
        <p>Please try again.</p>
      </div>

    return (
    <Modal 
    trigger={<button onClick={this.handleOpen} className="ui icon button" id="my-green">
        <i className="check icon"></i>
      </button>}
      open={this.state.modalOpen}
      onClose={this.handleClose}
    >
      <Modal.Header><Icon name="star" /> Great Job on Achieving Your Goal!</Modal.Header>
      <Modal.Content >
        <form className="ui form">
        {this.state.errors ? required : null}
          <div className="field">
            <label>Do you feel like you were successful upon completion of this goal? Why or why not?</label>
            <textarea 
            rows="3" 
            onChange={this.handleChange}
            value={this.state.success}
            name="success"
            />
          </div>
          <div className="field">
            <label>What emotions do you feel as you reflect on the work it took to complete this goal?</label>
            <input 
            type="text" 
            onChange={this.handleChange}
            value={this.state.emotions}
            name="emotions"
            />
          </div>
          <div className="field">
            <label>On a scale from 1-10, with 1 being the least positive, and 10 being the most positive, how would you rate your current mood?</label>
            <Dropdown 
            placeholder="Select Number" 
            fluid selection options={numberOptions}
            onChange={(e, {value}) => {this.handleDropChange(value, 'mood_num')}}
            value={this.state.mood_num}
            />
          </div>
        </form>
      </Modal.Content>
      <Modal.Actions>
        <Button name="submit" positive onClick={this.handleClose}>
          Submit <Icon name="right chevron" />
        </Button>
      </Modal.Actions>
    </Modal>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    id: auth.currentUser.id
  }
}

export default connect(mapStateToProps, actions)(GoalReflection)