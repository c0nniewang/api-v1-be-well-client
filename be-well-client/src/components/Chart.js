import React from 'react'
import { VictoryChart, VictoryScatter, VictoryTheme } from 'victory'
import { connect } from 'react-redux'

class Chart extends React.Component {
  render() {
    console.log("CHART", this.props)
      // debugger

    const data = this.props.thoughts.map(thought => {
      const date = new Date(thought.created_at).toLocaleDateString()
      return ({x: date, y: thought.current_mood})
    })
    console.log(data)
    return (
    <VictoryChart theme={VictoryTheme.material}>
      <VictoryScatter
        style={{ data: { fill: "#c43a31" } }}
        size={7}
        data={data}
      />
    </VictoryChart>
    )
  }
}

const mapStateToProps = ({ thoughts }) => {
  return {
    thoughts
  }
}

export default connect(mapStateToProps)(Chart);

