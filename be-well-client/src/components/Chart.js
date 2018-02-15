import React from 'react'
import { VictoryGroup, VictoryChart, VictoryScatter, VictoryAxis, VictoryArea, VictoryTooltip, VictoryLabel, VictoryZoomContainer } from 'victory'
import { connect } from 'react-redux'
import { Icon } from 'semantic-ui-react'

class Chart extends React.Component {
  constructor() {
    super();

    this.state = {
      thoughtData: true,
      dailyEnergy: true,
      dailyMood: true,
      sleep: true,
      completedGoals: true
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
      return ({ x: date, y: 9, symbol: "star"})
    })

    // refactor code for creating buttons

    // console.log(Object.keys(this.state))
    // const state = Object.keys(this.state)
    // const toggles = state.map(state => {
    //   return 
    // })
    const tickValues = this.getTickValues();

    return (
  <div class="ui middle aligned stackable grid container">
    <div class="row">
      <div className="eight wide column">
        <VictoryChart
          domain={{y: [0, 11]}}
          containerComponent={<VictoryZoomContainer />}
          >
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
              style={{data: { stroke: "red", fill: "red", fillOpacity: 0.4 }}}
              data={dailyMood} /> : null}
            {this.state.dailyMood ? <VictoryScatter
              style={{
                data: { stroke: "red" }
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
                data: { stroke: "#49C6B7", fill: "#49C6B7" },
                labels: { fill: "#49C6B7" }}
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
            tickFormat={(x) => new Date(x).toDateString().slice(4, 10)}
            tickValues={tickValues}
            // label="Date"
            />
          <VictoryAxis 
            dependentAxis
            tickValues={[2, 4, 6, 8, 10]}
          />
        </VictoryChart>
      </div>
      <div className="six wide right floated column">
          {this.state.dailyMood ? <button
              style={{"border-color": "#de7885"}}
              onClick={(name) => this.handleClick("dailyMood")}
              className="ui button" id="my-button"><Icon style={{"color": "#de7885"}} name="circle"/> Mood Level</button>  :
            <button
              style={{"border-color": "#e7e7e7"}}
              onClick={(name) => this.handleClick("dailyMood")}
              className="ui button" id="my-button"><Icon style={{"color": "#de7885"}} name="circle thin"/> Mood Level</button>}<br /><br /> 
          {this.state.dailyEnergy ? <button
              style={{"border-color": "#f6cd98"}}
              onClick={(name) => this.handleClick("dailyEnergy")}
              className="ui button" id="my-button"><Icon style={{"color": "#f6cd98"}} name="circle"/> Energy Level</button>  :
            <button
              style={{"border-color": "#e7e7e7"}}
              onClick={(name) => this.handleClick("dailyEnergy")}
              className="ui button" id="my-button"><Icon style={{"color": "#f6cd98"}} name="circle thin"/> Energy Level</button>}<br /><br />
          {this.state.sleep ? <button
              style={{"border-color": "#fde4a4"}}
              onClick={(name) => this.handleClick("sleep")}
              className="ui button" id="my-button"><Icon style={{"color": "#fde4a4"}} name="circle"/> Hours of Sleep</button>  :
            <button
              style={{"border-color": "#e7e7e7"}}
              onClick={(name) => this.handleClick("sleep")}
              className="ui button" id="my-button"><Icon style={{"color": "#fde4a4"}} name="circle thin"/> Hours of Sleep</button>} <br /><br />
          {this.state.thoughtData ? <button
              style={{"border-color": "tomato"}}
              onClick={(name) => this.handleClick("thoughtData")}
              className="ui button" id="my-button"><Icon style={{"color": "tomato"}} name="square"/> Thought Entry Mood</button>  :
            <button
              style={{"border-color": "#e7e7e7"}}
              onClick={(name) => this.handleClick("thoughtData")}
              className="ui button" id="my-button"><Icon style={{"color": "tomato"}} name="square outline"/> Thought Entry Mood</button>}<br /><br />
          {this.state.completedGoals ? <button
              style={{"border-color": "#49C6B7"}}
              onClick={(name) => this.handleClick("completedGoals")}
              className="ui button" id="my-button"><Icon style={{"color": "#49C6B7"}} name="star"/> Completed Goals!</button>  :
            <button
              style={{"border-color": "#e7e7e7"}}
              onClick={(name) => this.handleClick("completedGoals")}
              className="ui button" id="my-button"><Icon style={{"color": "#49C6B7"}} name="empty star"/> Completed Goals!</button>}   
          </div>
        </div>
      </div>
    )
  }

  getTickValues() {
    const dates = this.props.updates.map(update => new Date(update.created_at))
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
