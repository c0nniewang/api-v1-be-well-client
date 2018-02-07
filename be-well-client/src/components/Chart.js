import React from 'react'
import { VictoryGroup, VictoryChart, VictoryScatter, VictoryAxis, VictoryLine, VictoryPie, VictoryLabel} from 'victory'
import { connect } from 'react-redux'

class Chart extends React.Component {
  render() {
    console.log("CHART", this.props)
    // formatting data for chart data
    const completed = this.props.goals.completed.length
    const totalGoals = this.props.goals.active.length + completed
    const compRatio = completed / totalGoals * 100
    const totalRatio = 100 - compRatio

    const goalsData = [{x: "Goals Completed", y: compRatio}, {x: "Total Goals", y: totalRatio}]

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

    // console.log(thoughtData, dailyEnergy, dailyMood, sleep)
    console.log(completed, totalGoals)
    return (
    <div className="ui two column stackable grid container">
      <div className="column center aligned">
        <h3>Goals Progress</h3>
        <svg viewBox="0 0 400 400">
        <VictoryPie
          // width={400} height={400}
          standalone={false}
          height={300} height={300}
          data={goalsData}
          colorScale={["#49C6B7", "#5E6063"]}
          innerRadius={115} 
          style={{
           labels: {fontSize: 0}
          }}
        />
        <VictoryLabel
          textAnchor="middle"
          style={{ fontSize: 20 }}
          x={200} y ={150}
          text={`${completed} of ${totalGoals} completed`}
        />
        </svg>
      </div>
      <div className="column center aligned">
        <h3>Your Activity</h3>
        <VictoryChart>
          <VictoryGroup
            scale={{x: 'time', y: 'linear'}}
            >
            <VictoryLine 
              style={{data: { stroke: "#c43a31"}}}
              data={dailyEnergy} />
            <VictoryScatter 
              style={{data: { stroke: "#c43a31" }}}
              data={dailyEnergy}
              />
            <VictoryLine 
              style={{data: { stroke: "#CB5599"}}}
              data={dailyMood} />
            <VictoryScatter 
              style={{data: { stroke: "#CB5599" }}}
              data={dailyMood}
              />
            <VictoryLine 
              style={{data: { stroke: "#5E6063"}}}
              data={sleep} />
            <VictoryScatter 
              style={{data: { stroke: "#5E6063" }}}
              data={sleep}
              />
            <VictoryScatter 
              data={thoughtData}
              style={{
                data: { stroke: "#5E6063" },
                labels: { fill: "white", fontSize: 10}}
                }
              labels={ (datum) => datum.y}
              labelComponent={<VictoryLabel dy={14} />}
              size={7}
              />
          </VictoryGroup>
          {/* Shared axis (time) */}
          <VictoryAxis
            fixLabelOverlap
            scale="time"
            tickFormat={(x) => new Date(x).toLocaleDateString()}
            // label="Date"
            />
          <VictoryAxis 
            dependentAxis
            tickValues={[0, 2, 4, 6, 8, 10]}
          />
        </VictoryChart>
      </div>
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
