import React from 'react'
import MeditationCardDescription from './MeditationCardDescription'
import { connect } from 'react-redux'
import { Statistic, Grid, Menu, Segment } from 'semantic-ui-react'


class MeditationContainer extends React.Component{
  state = { activeItem: 'main'}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    const currentMonth = new Date().getMonth()

    const count = this.props.sessions.filter(sesh => new Date(sesh.created_at).getMonth() === currentMonth).length

    console.log(count)

    const sessions = this.props.meditations.map(session => {
      return <MeditationCardDescription key={session.id} session={session} />
    })

  return (
    <div>
        <h2 className="ui header">
          <i className="sound icon"></i>
          <div className="content">
          Guided Meditation Sessions
          </div>
        </h2>
        <br />
      <div className="ui grid">
        <div className="ui two wide column">
        <Menu pointing secondary vertical>
          <Menu.Item name='main' active={activeItem === 'main'} onClick={this.handleItemClick} />
          <Menu.Item name='sessions-under-five-minutes' active={activeItem === 'sessions-under-five-minutes'} onClick={this.handleItemClick} />
          <Menu.Item name='favorites' active={activeItem === 'favorites'} onClick={this.handleItemClick} />
          <Menu.Item name='all' active={activeItem === 'all'} onClick={this.handleItemClick} />
        </Menu>
        </div>
        <div className="ui fourteen wide column">
          <h3>This month: </h3>
          <div className="ui container center aligned">
            <Statistic color='green'>
              <Statistic.Value>{count}</Statistic.Value>
              <Statistic.Label>Sessions Completed</Statistic.Label>
            </Statistic>
          </div>
          <div className="ui four cards">
            {sessions}
          </div>
        </div>
      </div>
    </div>
  )};
}

const mapStateToProps = ({ meditations, sessions}) => {
  return {
    meditations,
    sessions
  }
}

export default connect(mapStateToProps)(MeditationContainer)