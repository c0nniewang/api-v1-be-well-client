import React from 'react'
import { connect } from 'react-redux'
import GoalsList from './GoalsList'


class GoalsContainer extends React.Component {
    render() { 
      return (
      <div>
        <p></p>
        <h4 className="ui horizontal divider header">
          <i className="star icon" color="olive"></i>
          Your Ongoing Goals
        </h4>
        <p></p>
        {this.props.goals ? <GoalsList goals={this.props.goals} /> 
        : 'You do not have any goals at this time.'}
      </div>
    )
  }
}

const mapStateToProps = ({ goals }) => {
  return {
    goals
  }
}

export default (connect(mapStateToProps)(GoalsContainer))