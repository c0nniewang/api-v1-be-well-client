import React from 'react'
import Chart from './Chart'
import PieCharts from './PieCharts'
import WordCloud from './WordCloud'

const ActivitiesContainer = () => {
  return (
    <div>
      <h2 className="ui header">
        <i className="area chart icon"></i>
        <div className="content">
        Your Activity
        </div>
      </h2>
      <div className="ui two column aligned stackable grid container">
        <div className="column">
        <WordCloud /></div>
        <PieCharts />
        <Chart />
      </div>
    </div>
  )
}

export default ActivitiesContainer