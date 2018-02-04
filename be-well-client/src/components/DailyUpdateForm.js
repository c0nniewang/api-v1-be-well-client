import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { connect } from 'react-redux';
import * as actions from '../actions'
import { withRouter } from 'react-router-dom';



class DailyUpdateForm extends React.Component {

  constructor() {
    super();

    this.state={
      energy_level: '',
      mood_desc: '',
      moodNum: '',
      dayDesc: '',
      grateful1: '',
      grateful2: '',
      grateful3: '',
      sleep: ''
    }
  }

  handleChange = (ev) => {
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }

  handleDropChange = (value, key) => {
    console.log(value, key)
    this.setState({
      [key]: value
    })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    console.log(this.state)
    this.props.newDailyUpdate({...this.state, user_id: this.props.id})

    this.setState({
      energy_level: '',
      mood_desc: '',
      mood_num: '',
      day_desc: '',
      grateful1: '',
      grateful2: '',
      grateful3: '',
      sleep: ''
    })
    this.props.history.push('/profile')
  }

  handleClick = () => {
    this.props.history.push('/profile')
  }

  render() {
    const numArray = [...Array(11).keys()]
    const numberOptions = numArray.slice(1).map(num => ({text: num, value: num}))
    return (
      <div>
        <form className="ui form" onSubmit={this.handleSubmit}>
          <p></p>
          <h3 className="ui dividing header">Daily Update</h3>
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
          </div><br />
          <button className="ui button left floated positive" type="submit">Submit</button>
        </form>
        <button onClick={this.handleClick} className="ui button right floated">Back</button>
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    id: auth.currentUser.id
  }
}

export default withRouter(connect(mapStateToProps, actions)(DailyUpdateForm));