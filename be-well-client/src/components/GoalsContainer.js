import React from 'react'
import { connect } from 'react-redux'
import GoalsList from './GoalsList'

class GoalsContainer extends React.Component {
    render() { 
  console.log(this.props)
      return (
      <div>
        <p></p>
        <h4 class="ui horizontal divider header">
          <i class="star icon"></i>
          Your Ongoing Goals
        </h4>
        <p></p>
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