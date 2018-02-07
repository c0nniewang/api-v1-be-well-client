import React from 'react'
import { VictoryGroup, VictoryChart, VictoryScatter, VictoryAxis, VictoryLine, VictoryPie, VictoryLabel} from 'victory'
import { connect } from 'react-redux'

class Chart extends React.Component {
  render() {
    console.log("CHART", this.props)
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

    return (
    <div className="ui attached stackable menu">
      <VictoryPie
        data={goalsData}
        colorScale={["#49C6B7", "#5E6063"]}
        innerRadius={130} 
      />
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
              data: { stroke: "#49C6B7" },
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
