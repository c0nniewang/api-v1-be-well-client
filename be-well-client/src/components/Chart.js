import React from 'react'
import { VictoryGroup, VictoryChart, VictoryTooltip, VictoryScatter, VictoryTheme, VictoryAxis, VictoryLine, VictoryPie } from 'victory'
import { connect } from 'react-redux'

class Chart extends React.Component {
  render() {
    console.log("CHART", this.props)
    // debugger
    // const dates = this.props.thoughts.map(thought => {
    //   const date = new Date(thought.created_at).toLocaleDateString()
    //   return date
    // })

    const thoughtData = this.props.thoughts.map(thought => {
      const date = new Date(thought.created_at)
      return ({x: date, y: thought.current_mood})
    })
    console.log(thoughtData)
      // domain={{x: [0, 7], y: [0, 10] }}
      // theme={VictoryTheme.material}>

    // const labelSelector = p => parseFloat(p[1]) * 100;  
    // const xSelector = p => new Date(p[0]);  
    // const ySelector = p => parseFloat(p[1]) * 100;

    // const data = [{dataPoints: [
    //   { x: "2/6/2018", y: 2 },
    //   { x: "2/7/2018", y: 3 },
    //   { x: "2/8/2018", y: 5 },
    //   { x: "2/9/2018", y: 4 },
    //   { x: "2/6/2018", y: 7 }
    // ]}]
    //radial bar chart
    // const colors = {
    //    pink: ["#CB5599", "#5E6063"],
    //    teal: ["#49C6B7", "#5E6063"]
    // };
    return (
    <div>



    <VictoryChart>
        <VictoryGroup
          // data={chart.dataPoints}
          // x={xSelector}
          // y={ySelector}
          // labels={labelSelector}
          labelComponent={<VictoryTooltip />}
          scale={{x: 'time', y: 'linear'}}
          >
          <VictoryLine 
            style={{data: { stroke: "#49C6B7" }}}
            data={[
              { x: new Date("2018-02-5"), y: 2 },
              { x: new Date("2018-02-6"), y: 3 },
              { x: new Date("2018-02-7"), y: 5 },
              { x: new Date("2018-02-8"), y: 4 },
              { x: new Date("2018-02-9"), y: 7 }
            ]} />
          <VictoryScatter 
            style={{data: { fill: "#5E6063" }}}
            data={thoughtData} />
        </VictoryGroup>

      {/* Shared axis (time) */}
      <VictoryAxis
        fixLabelOverlap
        scale="time"
        // tickValues={["2/5/2018", "2/6/2018", "2/7/2018", "2/8/2018", "2/9/2018"]}
        tickFormat={(x) => new Date(x).toLocaleDateString()} />

      <VictoryAxis dependentAxis />
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

