import React from 'react'
import { VictoryGroup, VictoryChart, VictoryScatter, VictoryAxis, VictoryArea, VictoryTooltip} from 'victory'
import { connect } from 'react-redux'

class Chart extends React.Component {
  render() {
    // console.log("CHART", this.props)

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

    // console.log(thoughtData, dailyEnergy, dailyMood, sleep)

    return (
      <div className="ten wide column column center aligned">
        <h3>Your Activity</h3>
        <VictoryChart>
          <VictoryGroup
            scale={{x: 'time', y: 'linear'}}
            style={{
              data: { strokeWidth: 2}
            }}
            >
            <VictoryArea 
              style={{data: { stroke: "orange", fill: "orange", fillOpacity: 0.4 }}}
              data={dailyEnergy}
              />
            <VictoryScatter 
              style={{data: { stroke: "orange" }}}
              data={dailyEnergy}
              size={(datum, active) => active ? 5 : 3}
              labels={(d) => `energy level: ${d.y}`}
              labelComponent={<VictoryTooltip />}
              />
            <VictoryArea 
              style={{data: { stroke: "cyan", fill: "cyan", fillOpacity: 0.4 }}}
              data={dailyMood} />
            <VictoryScatter
              style={{
                data: { stroke: "cyan" }
              }}
              data={dailyMood}
              size={(datum, active) => active ? 5 : 3}
              labels={(d) => `mood: ${d.y}`}
              labelComponent={<VictoryTooltip />}
              />
            <VictoryArea 
              style={{data: { stroke: "gold", fill: "gold", fillOpacity: 0.4 }}}
              data={sleep} />
            <VictoryScatter 
              style={{
                data: { stroke: "gold" },
                labels: { size: 11 }
              }}
              data={sleep}
              size={(datum, active) => active ? 5 : 3}
              labels={(d) => `sleep: ${d.y} hours`}
              labelComponent={<VictoryTooltip />}
              />
            <VictoryScatter 
              data={thoughtData}
              style={{
                data: { stroke: "tomato", fill: "tomato" },
                labels: { fill: "tomato" }}
                }
              // labels={ (datum) => datum.y}
              // labelComponent={<VictoryLabel dy={14} />}
              size={3}
              // size={(datum, active) => active ? 5 : 7}
              labels={(d) => `thought entry mood: ${d.y}`}
              labelComponent={<VictoryTooltip />}
              />
            <VictoryScatter 
              data={completedGoals}
              style={{
                data: { stroke: "magenta", fill: "magenta" },
                labels: { fill: "tomato" }}
                }
              // labels={ (datum) => datum.y}
              // labelComponent={<VictoryLabel dy={14} />}
              size={3}
              // size={(datum, active) => active ? 5 : 7}
              labels={(d) => `Goal Completed!`}
              labelComponent={<VictoryTooltip />}
              />
          </VictoryGroup>
          {/* Shared axis (time) */}
          <VictoryAxis
            fixLabelOverlap
            scale="time"
            tickFormat={(x) => new Date(x).toDateString()}
            // tickValues={(x) => new Date(x).toDateString()}
            // label="Date"
            />
          <VictoryAxis 
            dependentAxis
            tickValues={[0, 2, 4, 6, 8, 10]}
          />
        </VictoryChart>
      </div>
    )
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
