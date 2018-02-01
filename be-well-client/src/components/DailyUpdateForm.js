import React from 'react'
import { Dropdown } from 'semantic-ui-react'

export default class DailyUpdateForm extends React.Component {

  constructor() {
    super();

    this.state={
      energy: '',
      moodDesc: '',
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
    this.setState({
      [key]: value
    })
  }
  render() {
    const numArray = [...Array(11).keys()]
    const numberOptions = numArray.slice(1).map(num => ({text: num, value: num}))
    return (
      <form className="ui form">
        <h3 className="ui dividing header">Daily Update</h3>
        <div className="field">
          <label>On a scale of 1-10, with 1 being the lowest and 10 being the highest, how would you rate your current energy level?</label>
          <Dropdown placeholder="Select Number" 
          fluid selection options={numberOptions}
          value={this.state.energy}
          onChange={(e, {value}) => {this.handleDropChange(value, 'energy')}}
          />
        </div>
        <div className="field">
          <label>How would you describe your current mood in a couple key words?</label>
          <input 
          type="text" 
          onChange={this.handleChange}
          value={this.state.moodDesc}
          name="moodDesc"
          />
        </div>
        <div className="field">
          <label>Again on a scale from 1-10, with 1 being the least positive, and 10 being the most positive, how would you rate your current mood?</label>
          <Dropdown 
          placeholder="Select Number" 
          fluid selection options={numberOptions}
          onChange={(e, {value}) => {this.handleDropChange(value, 'moodNum')}}
          value={this.state.moodNum}
          />
        </div>
        <div className="field">
          <label>How would you briefly describe your overall day?</label>
          <textarea 
          rows="3"
          onChange={this.handleChange}
          value={this.state.dayDesc}
          name="dayDesc"></textarea>
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
        <button className="ui button" type="submit">Submit</button>
      </form>
    )
  }
}