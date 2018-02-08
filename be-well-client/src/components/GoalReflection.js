import React from 'react';
import { Modal, Button, Icon, Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux'
import * as actions from '../actions'


class GoalReflection extends React.Component {
  constructor() {
    super();

    this.state = {
      success: '',
      emotions: '',
      current_mood: ''
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

  handleSubmit = (ev) => {
    ev.preventDefault()
    const id = this.props.goal.id
    console.log('GOAL REF', id)
    // this.props.completedGoal(id)
    // this.props.newGoalReflection( ...this.state, goal_id: id)
  }

  render() {

    const numArray = [...Array(11).keys()]
    const numberOptions = numArray.slice(1).map(num => ({text: num, value: num}))

    return (
    <Modal trigger={<button className="ui icon button positive">
        <i className="check icon"></i>
      </button>}>
      <Modal.Header><Icon name="star" /> Great Job on Achieving Your Goal!</Modal.Header>
      <Modal.Content >
        <form className="ui form">
          <Modal.Description>testing</Modal.Description>
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
            onChange={(e, {value}) => {this.handleDropChange(value, 'current_mood')}}
            value={this.state.current_mood}
            />
          </div>
        </form>
      </Modal.Content>
      <Modal.Actions>
        <Button positive onClick={this.handleSubmit}>
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