import React from 'react'
import Chart from './Chart'
import PieCharts from './PieCharts'
import WordCloud from './WordCloud'
import MeditationCounter from './MeditationCounter'

const ActivitiesContainer = () => {
  return (
    <div>
      <p></p>
        <h4 className="ui horizontal divider header">
          <i className="sun icon" color="olive"></i>
          Your Recent Activity
        </h4>
        <p></p>
      <div className="ui three column aligned stackable grid container">
        <PieCharts />
        <WordCloud />
        <MeditationCounter/>
        <Chart />
      </div>
    </div>
  )
}

export default ActivitiesContainer