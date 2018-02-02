import React from 'react'
import { connect } from 'react-redux'
import GoalsList from './GoalsList'

class GoalsContainer extends React.Component {
    render() { 
  console.log(this.props)
      return (
      <div>
        <h3 className="ui header">Your Current Goals</h3>
        {this.props.goals ? <GoalsList goals={this.props.goals} /> : null}
        
      </div>
    )
  }
}

const mapStateToProps = ({ goals}) => {
  return {
    goals
  }
}

export default connect(mapStateToProps)(GoalsContainer)