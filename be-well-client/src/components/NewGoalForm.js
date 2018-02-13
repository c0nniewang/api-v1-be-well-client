import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux';
import * as actions from '../actions'
import { withRouter } from 'react-router-dom';



class NewGoalForm extends React.Component {

  constructor() {
    super();

    this.state={
      title: '',
      action1: '',
      action2: '',
      action3: '',
      attainable: '',
      relevance: '',
      target_date: ''
    }
  }

  handleChange = (ev) => {
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }

  handleDayChange = (day) => {
    this.setState({
      target_date: day
    })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.newGoal({...this.state, user_id: this.props.id})

    this.setState({
      title: '',
      action1: '',
      action2: '',
      action3: '',
      attainable: '',
      relevance: '',
      target_date: ''
    })
  }
 
  render() {
    return (
      <div>
        <form className="ui form">
          <p></p>
          <h3 className="ui dividing header">New Goal</h3>
          <div className="field">
            <label>What is your goal?</label>
            <input 
            type="text" 
            onChange={this.handleChange}
            value={this.state.title}
            name="title"
            />
          </div>
          <div className="field">
            <label>How will you reach this goal? List 3 action steps you will take, being as specific as possible</label>
            <input 
            type="text" 
            onChange={this.handleChange}
            value={this.state.action1}
            name="action1"
            placeholder="First Action Step"
            /><p></p>
            <input 
            type="text" 
            onChange={this.handleChange}
            value={this.state.action2}
            name="action2"
            placeholder="Second Action Step"
            /><p></p>
            <input 
            type="text" 
            onChange={this.handleChange}
            value={this.state.action3}
            name="action3"
            placeholder="Third Action Step"
            />
          </div>
          <div className="field">
            <label>Make sure your goal is measureable. How will you track/measure your goal? How will you know when you've reached your goal?</label>
            <textarea 
            rows="3"
            onChange={this.handleChange}
            value={this.state.attainable}
            name="attainable"></textarea>
          </div>
          <div className="field">
            <label>Make your goal relevant. Why do you want to reach this goal?</label>
            <textarea 
            rows="3"
            onChange={this.handleChange}
            value={this.state.relevance}
            name="relevance"></textarea>
          </div>
          <div className="field">
            <label>Set a deadline for yourself to achieve this goal. When do you aim to reach your goal by?</label>
              <div>
                <input type="date"
                onChange={this.handleChange}
                value={this.state.target_date}
                name="target_date"
                >
                </input>
              </div>
          </div><br />
          <span className="right floated">
            <Button positive onClick={this.handleSubmit}> Submit <Icon name="right chevron" />
            </Button>
          </span>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    id: auth.currentUser.id
  }
}

export default withRouter(connect(mapStateToProps, actions)(NewGoalForm));