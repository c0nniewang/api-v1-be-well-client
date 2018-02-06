import React from 'react'
import { connect } from 'react-redux'
import MainGoalCard from './MainGoalCard'
import { Menu } from 'semantic-ui-react'
import NewGoalForm from './NewGoalForm'
import CompletedGoalCard from './CompletedGoalCard'

class MainGoalsContainer extends React.Component {
  constructor() {
    super() 
    this.state = {
      activeItem: 'current'
    }
  }

  handleItemClick = (e, { name }) => {
    this.setState({
      activeItem: name
    })
  }

  render() {
    const { activeItem } = this.state
    const goals = this.props.goals.active.map( (goal, index) => <MainGoalCard key={index} goal={goal} />)

    const completedGoals = this.props.goals.completed.map((goal, index) => <CompletedGoalCard key={index} goal={goal} />)
    
    let display;
    if (this.state.activeItem === 'current') {
      display = (<div className="ui divided items">
          {goals}
        </div>
      )
    } else if (this.state.activeItem === 'completed') {
      display = (<div className="ui divided items">
        {completedGoals}
        </div>
      )
    } else if (this.state.activeItem === 'new-goal') {
      display = <NewGoalForm />
    }
  
    return (
      <div className="row">
      <div className="three wide column"><p></p></div>
      <div className="ten wide column">
        <h2 className="ui header">
          <i className="star icon"></i>
          <div className="content">
          Your Goals
          </div>
        </h2>

        <Menu tabular>
          <Menu.Item name="current" active={activeItem === 'current'} onClick={this.handleItemClick} />
          <Menu.Item name='completed' active={activeItem === 'completed'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item  name="new-goal" active={activeItem === 'new-goal'} onClick={this.handleItemClick}>
              <i className="write icon" />
              New Goal
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        {display}
      </div>
      <div className="three wide column"><p></p></div>
      </div>
    )
  }

}

const mapStateToProps = ({ goals }) => {
  return { goals }
}

export default connect(mapStateToProps)(MainGoalsContainer)
        // {activeItem === 'current' ? (<div className="ui divided items">
        //   {goals}
        // </div>) : <NewGoalForm />}