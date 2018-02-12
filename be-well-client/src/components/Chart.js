import React from 'react'
import { VictoryGroup, VictoryChart, VictoryScatter, VictoryAxis, VictoryArea, VictoryTooltip} from 'victory'
import { connect } from 'react-redux'
import { Button, Icon } from 'semantic-ui-react'

class Chart extends React.Component {
  constructor() {
    super();

    this.state = {
      thoughtData: true,
      dailyEnergy: true,
      dailyMood: true,
      sleep: true,
      completedGoals: false
    }
  }

  handleClick = (name) => {
    this.setState({
      [name]: !this.state[name]
    })
  }

  render() {
    const thoughtData = this.props.thoughts.map(thought => {
      const date = new Date(thought.created_at)
      return ({x: date, y: thought.current_mood, symbol: "square"})
    })

    const dailyEnergy = this.props.updates.map(update => {
      const date = new Date(update.created_at)
      return ({x: date, y: update.energy_level})
    })

    const dailyMood = this.props.updates.map(update => {
      const date = new Date(update.created_at)
      return ({ x: date, y: update.mood_num})
    })

    const sleep = this.props.updates.map(update => {
      const date = new Date(update.created_at)
      return ({ x: date, y: update.sleep})
    })

    const completedGoals = this.props.goals.completed.map(goal => {
      const date = new Date(goal.date_completed)
      return ({ x: date, y: 10, symbol: "star"})
    })

    // refactor code for creating buttons

    // console.log(Object.keys(this.state))
    // const state = Object.keys(this.state)
    // const toggles = state.map(state => {
    //   return 
    // })
    const tickValues = this.getTickValues();

    return (
      <div className="row">
      <div className="ten wide column">
        <VictoryChart>
          <VictoryGroup
            scale={{x: 'time', y: 'linear'}}
            style={{
              data: { strokeWidth: 2}
            }}
            animate={{
              onExit: {
                duration: 200,
              },
            }}
            >
            {this.state.dailyEnergy ? <VictoryArea 
              style={{data: { stroke: "orange", fill: "orange", fillOpacity: 0.4 }}}
              data={dailyEnergy}
              /> : null}
            {this.state.dailyEnergy ? <VictoryScatter 
              style={{data: { stroke: "orange" }}}
              data={dailyEnergy}
              size={(datum, active) => active ? 5 : 3}
              labels={(d) => `energy level: ${d.y}`}
              labelComponent={<VictoryTooltip />}
              /> : null}
            {this.state.dailyMood ? <VictoryArea 
              style={{data: { stroke: "cyan", fill: "cyan", fillOpacity: 0.4 }}}
              data={dailyMood} /> : null}
            {this.state.dailyMood ? <VictoryScatter
              style={{
                data: { stroke: "cyan" }
              }}
              data={dailyMood}
              size={(datum, active) => active ? 5 : 3}
              labels={(d) => `mood: ${d.y}`}
              labelComponent={<VictoryTooltip />}
              /> : null}
            {this.state.sleep ? <VictoryArea 
              style={{data: { stroke: "gold", fill: "gold", fillOpacity: 0.4 }}}
              data={sleep} /> : null}
            {this.state.sleep ?
            <VictoryScatter 
              style={{
                data: { stroke: "gold" },
                labels: { size: 11 }
              }}
              data={sleep}
              size={(datum, active) => active ? 5 : 3}
              labels={(d) => `sleep: ${d.y} hours`}
              labelComponent={<VictoryTooltip />}
              /> : null }
            {this.state.thoughtData ? <VictoryScatter 
              data={thoughtData}
              style={{
                data: { stroke: "tomato", fill: "tomato" },
                labels: { fill: "tomato" }}
                }
              size={3}
              labels={(d) => `thought entry mood: ${d.y}`}
              labelComponent={<VictoryTooltip />}
              /> : null}
            {this.state.completedGoals ? <VictoryScatter 
              data={completedGoals}
              style={{
                data: { stroke: "magenta", fill: "magenta" },
                labels: { fill: "tomato" }}
                }
              size={3}
              labels={(d) => `Goal Completed!`}
              labelComponent={<VictoryTooltip />}
              /> : null}
          </VictoryGroup>
          {/* Shared axis (time) */}
          <VictoryAxis
            fixLabelOverlap
            scale="time"
            tickFormat={(x) => new Date(x).toDateString()}
            tickValues={tickValues}
            // label="Date"
            />
          <VictoryAxis 
            dependentAxis
            tickValues={[0, 2, 4, 6, 8, 10]}
          />
        </VictoryChart>
      </div>
      <div className="six wide column">
          {this.state.dailyEnergy ? <button
              onClick={(name) => this.handleClick("dailyEnergy")}
              className="ui button"><Icon name="circle"/> Energy Level</button>  :
            <button
              onClick={(name) => this.handleClick("dailyEnergy")}
              className="ui button"><Icon name="circle thin"/> Energy Level</button>}<br /><br />
          {this.state.dailyMood ? <button
              onClick={(name) => this.handleClick("dailyMood")}
              className="ui button"><Icon name="circle"/> Mood Level</button>  :
            <button
              onClick={(name) => this.handleClick("dailyMood")}
              className="ui button"><Icon name="circle thin"/> Mood Level</button>}<br /><br /> 
          {this.state.sleep ? <button
              onClick={(name) => this.handleClick("sleep")}
              className="ui button"><Icon name="circle"/> Hours of Sleep</button>  :
            <button
              onClick={(name) => this.handleClick("sleep")}
              className="ui button"><Icon name="circle thin"/> Hours of Sleep</button>} <br /><br />
          {this.state.thoughtData ? <button
              onClick={(name) => this.handleClick("thoughtData")}
              className="ui button"><Icon name="square"/> Thought Entry Mood</button>  :
            <button
              onClick={(name) => this.handleClick("thoughtData")}
              className="ui button"><Icon name="square outline"/> Thought Entry Mood</button>}<br /><br />
          {this.state.completedGoals ? <button
              onClick={(name) => this.handleClick("completedGoals")}
              className="ui button"><Icon name="star"/> Completed Goals!</button>  :
            <button
              onClick={(name) => this.handleClick("completedGoals")}
              className="ui button"><Icon name="empty star"/> Completed Goals!</button>}   
          </div>
        </div>
    )
  }

  getTickValues() {
    const dates = this.props.updates.map(update => new Date(update.created_at))
    console.log("CHART", dates)
    return dates
  }
}

const mapStateToProps = ({ thoughts, updates, goals }) => {
  return {
    thoughts,
    updates,
    goals
  }
}

export default connect(mapStateToProps)(Chart);
