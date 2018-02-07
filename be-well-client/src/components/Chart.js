import React from 'react'
import { VictoryStack, VictoryScatter, VictoryTheme, VictoryAxis, VictoryLine } from 'victory'
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
      const date = new Date(thought.created_at).toLocaleDateString()
      return ({date: date, y: thought.current_mood})
    })
    console.log(thoughtData)
      // domain={{x: [0, 7], y: [0, 10] }}
      // theme={VictoryTheme.material}>

    return (
      <VictoryStack  domain={{y: [0, 10] }}>
      <VictoryScatter
        // data={[{x: "a", y: 3}, {x: "b", y: 2}, {x: "c", y: 6}]}
        data={[{x: "2/6/2018", symbol: "star", y: 4}, {x: "2/7/2018", symbol: "star", y: 6}, {x: "2/8/2018", symbol: "star", y: 10}]}
        // data={thoughtData}
        />
        <VictoryLine
        data={[{x: "2/6/2018", y: 8}, {x: "2/7/2018", y: 7}, {x: "2/8/2018", y: 2}]}
        />

      </VictoryStack>
    )
  }
}

const mapStateToProps = ({ thoughts }) => {
  return {
    thoughts
  }
}

export default connect(mapStateToProps)(Chart);

