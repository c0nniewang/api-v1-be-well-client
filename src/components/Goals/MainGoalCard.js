import React from 'react'
import { Progress, Button, Icon, Modal } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import GoalReflection from './GoalReflection'
import NewGoalForm from './NewGoalForm'

class MainGoalCard extends React.Component {
  
  render() {
  // calculate days left for progress bar
  let today = new Date()
  today = today.setMinutes(today.getMinutes() - today.getTimezoneOffset())

  // get date goal was created on and account for timezone
  const created = new Date(this.props.goal.created_at)
  const createdMin = created.setMinutes(created.getMinutes() - created.getTimezoneOffset())

  // get target date user set for goal completion
  const targetDate = this.props.goal.target_date
  const formattedDate = `${targetDate.slice(0, 4)}, ${targetDate.slice(5, 7)}, ${targetDate.slice(8, 10)}`

  const target = new Date(formattedDate);

  const targetMinutes = target.setMinutes(target.getMinutes() - target.getTimezoneOffset())

  // calculate days left
  const days = Math.round((today - createdMin) / (24*60*60*1000))
  const totalDays = Math.round((targetMinutes - createdMin) / (24*60*60*1000))
  const daysLeft = (totalDays - days) + 1

  // calculate percentage of time elapsed
  const percent = (100 - (daysLeft / (totalDays + 2))* 100)

  const goalsModal = <Modal trigger={<Button>Edit Goal</Button>}>
    <Modal.Content >
    <NewGoalForm goalId = {this.props.goal.id}/>
    </Modal.Content>
    <Modal.Actions>
    </Modal.Actions>
  </Modal>

    return (
      <div className="item">
        <div className="content">
          <div className="header">Goal: {this.props.goal.title}</div>
          <div className="meta">Date created: {created.toDateString()}</div>
          <div className="description">
            <b>Your 3 action steps you'll take to reaching this goal: </b><br />
            1. {this.props.goal.action1} <br />
            2. {this.props.goal.action2} <br />
            3. {this.props.goal.action3} <br />
            <p></p>
            <b>How will you track your goal? When will you know you've reached your goal?</b><br />
            {this.props.goal.attainable}<br />
            <p></p>
            <b>Why is this goal important to you?</b><br />
            {this.props.goal.relevance}<br />
            <p></p>
            <b>Your target date for achieving this goal:</b><br />
            {new Date(formattedDate).toDateString()}<br />
            <p></p>
            {daysLeft >= 0 ? 
              <Progress 
              color="yellow" 
              percent={percent} 
              label={`${daysLeft} ${daysLeft === 1 ? "day" : "days"} until your target date for goal completion!`}
              /> : 
              <Progress
              color="orange"
              percent={100}
              label={`${Math.abs(daysLeft)} ${Math.abs(daysLeft) === 1 ? "day" : "days"} over your target date for goal completion`}
              />}
          </div>
          <div className="extra content">
          <Button 
            onClick={(id) => this.props.deleteGoal(this.props.goal.id)}
            floated="left" 
            color="red" 
            icon
            >
              <Icon name="remove" />
            </Button>
            <span className="right floated">
              {goalsModal}
              <GoalReflection goal={this.props.goal} />
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, actions)(MainGoalCard);
