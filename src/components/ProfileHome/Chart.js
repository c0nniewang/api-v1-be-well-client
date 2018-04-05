import React from 'react'
import { VictoryGroup, VictoryChart, VictoryScatter, VictoryAxis, VictoryArea, VictoryTooltip, VictoryZoomContainer } from 'victory'
import { connect } from 'react-redux'
import { Icon, Button } from 'semantic-ui-react'

class Chart extends React.Component {
  constructor() {
    super();

    this.state = {
      thoughtData: true,
      dailyEnergy: true,
      dailyMood: true,
      sleep: true,
      completedGoals: true,
      view: "week"
    }
  }

  handleClick = (name) => {
    this.setState({
      [name]: !this.state[name]
    })
  }

  handleToggle = (ev) => {
    console.log(ev.target.name)

    this.setState({
      view: ev.target.name
    })
  }



  render() {
    const currentMonth = new Date().getMonth()
    const today = new Date()
    let oneWeekAgo = new Date()
    oneWeekAgo.setDate(today.getDate() - 7)

    let thoughts; 

    {this.state.view === "week" ?
    thoughts = this.currentWeek(this.props.thoughts) : 
    thoughts = this.currentMonth(this.props.thoughts)    }

    const thoughtData = thoughts.map(thought => {
      const date = new Date(thought.created_at)
      return ({x: date, y: thought.current_mood, symbol: "square"})
    })

    let daily;

    {this.state.view === "week" ? 
    daily = this.currentWeek(this.props.updates) :
    daily = this.currentMonth(this.props.updates)}

    const dailyEnergy = daily.map(update => {
      const date = new Date(update.created_at)
      return ({x: date, y: update.energy_level})
    })

    const dailyMood = daily.map(update => {
      const date = new Date(update.created_at)
      return ({ x: date, y: update.mood_num})
    })

    const sleep = daily.map(update => {
      const date = new Date(update.created_at)
      return ({ x: date, y: update.sleep})
    })

    let goals;
    {this.state.view === "week" ? 
    goals = this.props.goals.completed.filter(goal => oneWeekAgo <= new Date(goal.date_completed))
     : goals = this.props.goals.completed.filter(goal => new Date(goal.date_completed).getMonth() === currentMonth)}

    const completedGoals = goals.map(goal => {
      const date = new Date(goal.date_completed)
      return ({ x: date, y: 9, symbol: "star"})
    })

    const tickValues = this.getTickValues();
    
    return (
  <div className="ui middle aligned stackable grid container">
    <div className="ui container center aligned">
    <h3>{this.month()}</h3>
    <h4>{daily.length ? null : "You do not have enough user data at this moment. Please complete a daily update."}</h4>
    {this.state.view === "week" ?
      <div>
        <Button id="my-button">Week</Button>
        <Button
        name="month"
        onClick={this.handleToggle}
        id="my-button" 
        style={{"borderColor": "#e7e7e7"}}
        >Month</Button>
      </div> :
      <div>
        <Button 
        id="my-button"
        style={{"borderColor": "#e7e7e7"}}
        name="week"
        onClick={this.handleToggle}
        >Week</Button>
        <Button id="my-button">Month</Button>
      </div>
    }
      
    </div>
    <div className="row">
      <div className="eight wide column">
        <VictoryChart
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
            {this.state.dailyEnergy && dailyEnergy.length ? <VictoryArea 
              style={{data: { stroke: "orange", fill: "orange", fillOpacity: 0.4 }}}
              data={dailyEnergy}
              /> : null}
            {this.state.dailyEnergy && dailyEnergy.length ? <VictoryScatter 
              style={{data: { stroke: "orange" }}}
              data={dailyEnergy}
              size={(datum, active) => active ? 5 : 3}
              labels={(d) => `energy level: ${d.y}`}
              labelComponent={<VictoryTooltip />}
              /> : null}
            {this.state.dailyMood && dailyMood.length ? <VictoryArea 
              style={{data: { stroke: "red", fill: "red", fillOpacity: 0.4 }}}
              data={dailyMood} /> : null}
            {this.state.dailyMood && dailyMood.length ? <VictoryScatter
              style={{
                data: { stroke: "red" }
              }}
              data={dailyMood}
              size={(datum, active) => active ? 5 : 3}
              labels={(d) => `mood: ${d.y}`}
              labelComponent={<VictoryTooltip />}
              /> : null}
            {this.state.sleep && sleep.length ? <VictoryArea 
              style={{data: { stroke: "gold", fill: "gold", fillOpacity: 0.4 }}}
              data={sleep} /> : null}
            {this.state.sleep && sleep.length ?
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
            {(this.state.thoughtData && thoughtData.length) ? <VictoryScatter 
              data={thoughtData}
              style={{
                data: { stroke: "tomato", fill: "tomato" },
                labels: { fill: "tomato" }}
                }
              size={3}
              labels={(d) => `thought entry mood: ${d.y}`}
              labelComponent={<VictoryTooltip />}
              /> : null}
            {(this.state.completedGoals && completedGoals.length) ? <VictoryScatter 
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
            tickFormat={(x) => new Date(x).toDateString().slice(8, 10)}
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
          {this.state.dailyMood && dailyMood.length ? <button
              style={{"borderColor": "#de7885"}}
              onClick={(name) => this.handleClick("dailyMood")}
              className="ui button" id="my-button"><Icon style={{"color": "#de7885"}} name="circle"/> Mood Level</button>  :
            <button
              style={{"borderColor": "#e7e7e7"}}
              onClick={(name) => this.handleClick("dailyMood")}
              className="ui button" id="my-button"><Icon style={{"color": "#de7885"}} name="circle thin"/> Mood Level</button>}<br /><br /> 
          {this.state.dailyEnergy && dailyEnergy.length ? <button
              style={{"borderColor": "#f6cd98"}}
              onClick={(name) => this.handleClick("dailyEnergy")}
              className="ui button" id="my-button"><Icon style={{"color": "#f6cd98"}} name="circle"/> Energy Level</button>  :
            <button
              style={{"borderColor": "#e7e7e7"}}
              onClick={(name) => this.handleClick("dailyEnergy")}
              className="ui button" id="my-button"><Icon style={{"color": "#f6cd98"}} name="circle thin"/> Energy Level</button>}<br /><br />
          {this.state.sleep && sleep.length ? <button
              style={{"borderColor": "#fde4a4"}}
              onClick={(name) => this.handleClick("sleep")}
              className="ui button" id="my-button"><Icon style={{"color": "#fde4a4"}} name="circle"/> Hours of Sleep</button>  :
            <button
              style={{"borderColor": "#e7e7e7"}}
              onClick={(name) => this.handleClick("sleep")}
              className="ui button" id="my-button"><Icon style={{"color": "#fde4a4"}} name="circle thin"/> Hours of Sleep</button>} <br /><br />
          {this.state.thoughtData && thoughtData.length ? <button
              style={{"borderColor": "tomato"}}
              onClick={(name) => this.handleClick("thoughtData")}
              className="ui button" id="my-button"><Icon style={{"color": "tomato"}} name="square"/> Thought Entry Mood</button>  :
            <button
              style={{"borderColor": "#e7e7e7"}}
              onClick={(name) => this.handleClick("thoughtData")}
              className="ui button" id="my-button"><Icon style={{"color": "tomato"}} name="square outline"/> Thought Entry Mood</button>}<br /><br />
          {this.state.completedGoals && completedGoals.length ? <button
              style={{"borderColor": "#49C6B7"}}
              onClick={(name) => this.handleClick("completedGoals")}
              className="ui button" id="my-button"><Icon style={{"color": "#49C6B7"}} name="star"/> Completed Goals!</button>  :
            <button
              style={{"borderColor": "#e7e7e7"}}
              onClick={(name) => this.handleClick("completedGoals")}
              className="ui button" id="my-button"><Icon style={{"color": "#49C6B7"}} name="empty star"/> Completed Goals!</button>}   
          </div>
        </div>
      </div>
    )
  }

  month = () => {
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let today = new Date();
    return monthNames[today.getMonth()]
  }

  currentWeek = (arr) => {
    const today = new Date()
    let oneWeek = new Date()
    oneWeek.setDate(today.getDate() - 7)
    console.log("FX", arr)
    return arr.filter(el => oneWeek <= new Date(el.created_at))
  }

  currentMonth = (arr) => {
    const currentMonth = new Date().getMonth()

    return arr.filter(el => new Date(el.created_at).getMonth() === currentMonth
    )
  }

  getTickValues() {
    const today = new Date()
    if (this.state.view === "week") {
      const week = []
        for (var i = 0; i < 7; i++) {
          let temp = new Date()
          temp.setDate(today.getDate() - i)
          week.push(temp)
        }
      return week
    } else {
      const month = new Date().getMonth()
      const date = new Date(new Date().getFullYear(), new Date().getMonth(), 1)
      const days = []

      while (date.getMonth() === month) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1)
      }
      return days;
    }
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