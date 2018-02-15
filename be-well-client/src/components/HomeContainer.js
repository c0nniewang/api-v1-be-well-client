
import React from 'react';
import DailyUpdateContainer from './DailyUpdateContainer'
import { connect } from 'react-redux'
import * as actions from '../actions'
import WordCloud from './WordCloud'
import PieCharts from './PieCharts'
import MeditationCounter from './MeditationCounter'
import Chart from './Chart'
import WellPalContainer from './WellPalContainer'

class HomeContainer extends React.Component {
  render() {
    console.log(this.props)
    return (<div className="pusher">
        <div className="row">
        <div className="ui raised very padded text container segment">
          <h2 className="ui header">Hi, {this.props.user.profile.name}.</h2>
          <DailyUpdateContainer />
          </div>
        </div>
        <div className="ui middle aligned stackable grid container">
          <WellPalContainer />
        </div>
        <h3 className="ui horizontal divider header">
          <i className="sun icon"></i>
          Your Recent Activity
        </h3>
        <Chart />
        <br /><br />
        <div className="ui divider" />
        <div className="ui vertical stripe quote segment">
          <div className="ui equal width stackable internally celled grid">
            <div className="center aligned row">
              <div className="column">
                <PieCharts />
              </div>
              <div className="column">
                <MeditationCounter />
              </div>
            </div>
          </div>
        </div>
        <div className="ui text container center aligned">
          <br /><br />
          <h3>Most Frequently Used Words</h3>
          <WordCloud />
          <br /><br />
          <button 
          className="ui large button" 
          id="my-button" 
          style={{"border-color": "#e7e7e7"}}
          onClick={() => this.props.history.push('/profile/thought-entries')}>See Thought Entries</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ user }) => {
  return {
    user: user
  }
}

export default (connect(mapStateToProps, actions)(HomeContainer))

