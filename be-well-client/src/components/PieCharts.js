import React from 'react';
import { connect } from 'react-redux'
import { VictoryPie, VictoryLabel } from 'victory'

const PieCharts = (props) => {
  const completed = props.goals.completed.length
  const totalGoals = props.goals.active.length + completed
  const compRatio = completed / totalGoals * 100
  const totalRatio = 100 - compRatio

  const goalsData = [{x: "Goals Completed", y: compRatio}, {x: "Total Goals", y: totalRatio}]

  return (<div className="five wide column center aligned">
        <h3>Goals Progress</h3>
        <svg viewBox="0 0 400 400">
        <VictoryPie
          // width={400} height={400}
          standalone={false}
          height={300}
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
  )
}

const mapStateToProps = ({ goals }) => {
  return {
    goals
  }
}

export default connect(mapStateToProps)(PieCharts)