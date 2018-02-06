import React from 'react'
import Chart from './Chart'

class ActivitiesContainer extends React.Component {
  render() {
    return (
      <div>
        <h2 className="ui header">
          <i className="area chart icon"></i>
          <div className="content">
          Your Activity
          </div>
        </h2>
        <div className="ui middle aligned stackable grid container">
          <Chart />
        </div>
      </div>
    )
  }
}

export default ActivitiesContainer