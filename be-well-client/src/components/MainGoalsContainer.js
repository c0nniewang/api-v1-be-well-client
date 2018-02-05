import React from 'react'
import { connect } from 'react-redux'
import MainGoalCard from './MainGoalCard'
import { Menu } from 'semantic-ui-react'
import NewGoalForm from './NewGoalForm'

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
    console.log("MAIN GOALS CONTAINER")
    const goals = this.props.goals.map( (goal, index) => <MainGoalCard key={index} goal={goal} />)
    return (
      <div className="container">
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

        {activeItem === 'current' ? (<div className="ui divided items">
          {goals}
        </div>) : <NewGoalForm />}
        

      </div>
    )
  }

}

const mapStateToProps = ({ goals }) => {
  return { goals }
}

export default connect(mapStateToProps)(MainGoalsContainer)