import React from 'react'
import { Dropdown, Modal, Icon, Divider } from 'semantic-ui-react'
import { connect } from 'react-redux';
import * as actions from '../../actions'

class DailyUpdateForm extends React.Component {

  constructor() {
    super();

    this.state={
      energy_level: '',
      mood_desc: '',
      grateful1: '',
      grateful2: '',
      grateful3: '',
      sleep: '',
      modalOpen: false,
      errors: false
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
        this.props.newDailyUpdate({...this.state, user_id: this.props.id})
        this.setState({
          modalOpen: false
        })
      } else {
        this.setState({ errors: true })
      }
    } else {
      this.setState({ modalOpen: false})
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
      <Modal trigger={<button
            onClick={this.handleOpen}
            className="ui positive basic button">Let's Do it!</button>}
            open={this.state.modalOpen}
            onClose={this.handleClose}>
        <Modal.Header><Icon name="sun" />Daily Update</Modal.Header>
        <Modal.Content>
        <form className="ui form">
        {this.state.errors ? required : null}
          <div className="field">
            <label>On a scale of 1-10, with 1 being the lowest and 10 being the highest, how would you rate your current energy level?</label>
            <Dropdown placeholder="Select Number" 
            fluid selection options={numberOptions}
            value={this.state.energy_level}
            onChange={(e, {value}) => {this.handleDropChange(value, 'energy_level')}}
            />
          </div>
          <div className="field">
            <label>How would you describe your current mood in a couple key words?</label>
            <input 
            type="text" 
            onChange={this.handleChange}
            value={this.state.mood_desc}
            name="mood_desc"
            />
          </div>
          <div className="field">
            <label>Again on a scale from 1-10, with 1 being the least positive, and 10 being the most positive, how would you rate your current mood?</label>
            <Dropdown 
            placeholder="Select Number" 
            fluid selection options={numberOptions}
            onChange={(e, {value}) => {this.handleDropChange(value, 'mood_num')}}
            value={this.state.mood_num}
            />
          </div>
          <div className="field">
            <label>How would you briefly describe your overall day?</label>
            <textarea 
            rows="3"
            onChange={this.handleChange}
            value={this.state.day_desc}
            name="day_desc"></textarea>
          </div>
          <div className="field">
            <label>How many hours did you sleep last night?</label>
            <Dropdown 
            placeholder="Select Number" 
            fluid selection options={numberOptions}
            onChange={(e, {value}) => {this.handleDropChange(value, 'sleep')}}
            value={this.state.sleep}
            />
          </div>
          <h4 className="ui dividing header">And lastly, please list three things that you are grateful for today.</h4>
          <div className="inline field">
            <label>1.</label>
            <input 
            type="text"
            onChange={this.handleChange}
            value={this.state.grateful1}
            name="grateful1"
            />
          </div>
          <div className="inline field">
            <label>2.</label>
            <input 
            type="text"
            onChange={this.handleChange}
            value={this.state.grateful2}
            name="grateful2"
            />
          </div>
          <div className="inline field">
            <label>3.</label>
            <input 
            type="text"
            onChange={this.handleChange}
            value={this.state.grateful3}
            name="grateful3"
            />
          </div>
        </form>
        </Modal.Content>
        <Modal.Actions>
          <button 
          className="ui button right floated positive" 
          onClick={this.handleClose}
          name="submit"
          >Submit</button>
        </Modal.Actions>
        <Divider hidden /> 
      </Modal>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    id: auth.currentUser.id
  }
}

export default connect(mapStateToProps, actions)(DailyUpdateForm);