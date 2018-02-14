import React from 'react';
import { connect } from 'react-redux'
import { VictoryPie, VictoryLabel } from 'victory'

const PieCharts = (props) => {
  const completed = props.goals.completed.length
  const totalGoals = props.goals.active.length + completed
  const compRatio = completed / totalGoals * 100
  const totalRatio = 100 - compRatio

  const goalsData = [{x: "Goals Completed", y: compRatio}, {x: "Total Goals", y: totalRatio}]
 
  return (<div className="five wide column center aligned" style={{height: "350px"}}>
        <svg viewBox="0 0 400 400">
        <VictoryLabel style={{ fontSize: 10 }} x={200} y={16} textAnchor="middle" text="Goals Progress"/>
        <VictoryPie
          standalone={false}
          height={200}
          data={goalsData}
          colorScale={["#49C6B7", "#5E6063"]}
          innerRadius={55} 
          style={{
           labels: {fontSize: 0}
          }}
        />
        <VictoryLabel
          textAnchor="middle"
          style={{ fontSize: 12 }}
          x={200} y ={100}
          text={`${completed} of ${totalGoals} 
          completed`}
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