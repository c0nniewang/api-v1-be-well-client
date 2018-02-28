import React from 'react'
import MeditationCardDescription from './MeditationCardDescription'
import { connect } from 'react-redux'
import { Statistic, Menu } from 'semantic-ui-react'


class MeditationContainer extends React.Component{
  state = { activeItem: 'main'}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
  const { activeItem } = this.state;

  // grab data statistics for the current month
  const currentMonth = new Date().getMonth()
  // calculate how many sessions completed
  const count = this.props.sessions.filter(sesh => new Date(sesh.created_at).getMonth() === currentMonth).length
  // calculate total minutes of meditation sessions
  const totalMin = this.props.sessions.map(session => {
    return parseInt(session.meditation.length.slice(0, 2).replace(/[: ]+/g, " ").trim())
  })

  let sumMin
  {totalMin.length ? sumMin = totalMin.reduce((acc, current) => acc + current) : null}
  // grab longest streak
  let streak
  {this.props.sessions.length ? streak = this.props.sessions[this.props.sessions.length - 1].streak : null}
  
  const stats = <div className="ui container center aligned">
        <Statistic.Group widths='three'>
          <Statistic>
            <Statistic.Value style={{"color": "#3fc380"}}>{count}</Statistic.Value>
            <Statistic.Label>Sessions Completed</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value style={{"color": "#3fc380"}}>{sumMin === undefined ? 0 : sumMin}</Statistic.Value>
            <Statistic.Label>Total Minutes</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value style={{"color": "#3fc380"}}>{streak === undefined ? 0 : streak}{streak === 1 ? "Day" : "Days"}</Statistic.Value>
            <Statistic.Label>Longest Streak</Statistic.Label>
          </Statistic>
        </Statistic.Group>
      </div>

  // organize meditation sessions for different tab views
  const allSessions = this.props.meditations.all.map(session => {
    return <MeditationCardDescription key={session.id} session={session} />
  })

  // grab most recently complete sessions and remove duplicates
  const uniq = {}
  const recentSessions = this.props.sessions.slice().reverse().map(session => {
    if (uniq[session.meditation.id] === undefined && Object.keys(uniq).length < 4) {
      uniq[session.meditation.id] = session.id
      return <MeditationCardDescription key={session.id} session={session.meditation} />
    }
  })

  const quickSesh = this.props.meditations.all.filter(session => {
    const min = session.length.slice(0, 2).replace(/[: ]+/g, " ").trim()
    if (parseInt(min) < 6)
    return session
  })

  const quickCards = quickSesh.map(el => <MeditationCardDescription key={el.id} session={el} />)

  const favorites = this.props.meditations.favorites.map(el => <MeditationCardDescription key={el.id} session={el.meditation} />)
  
  let display;

  if (this.state.activeItem === "main") {
    display = (<div>
      <h3>This month: </h3>
          {stats}
        <br /><br />
        <h3>Most Recently Completed Sessions:</h3>
        <div className="ui four cards">
          {recentSessions.length ? recentSessions : 
            <h4>You have not completed any meditation sessions yet.</h4>}
        </div>
      </div>)
  } else if (this.state.activeItem === 'all') {
    display = (<div><h3>All Sessions</h3><div className="ui four cards">{allSessions}</div></div>)
  } else if (this.state.activeItem === 'sessions-under-six-minutes') {
    display = (<div><h3>Quick Sessions</h3><div className="ui four cards">{quickCards}</div></div>)
  } else if (this.state.activeItem === 'your-favorites') {
    display = (<div>
        <h3>Favorite Sessions</h3>
        {favorites.length ? 
          <div className="ui four cards">
          {favorites}
          </div> : 
          <div className="ui warning message">
          <div className="ui header">You do not have any favorited meditation sessions yet!
          </div>
           Click on the star at the bottom corner of the meditation session card to add one to your favorites.
           </div>} 
      </div>)
  }

  return (
    <div className="ui container" id="white">
        <h2 className="ui header">
          <i className="sound icon"></i>
          <div className="content">
          Guided Meditation Sessions
          </div>
        </h2>
        <br />
      <div className="ui grid">
        <div className="ui three wide column">
        <Menu pointing secondary vertical>
          <Menu.Item name='main' active={activeItem === 'main'} onClick={this.handleItemClick} />
          <Menu.Item name='your-favorites' active={activeItem === 'your-favorites'} onClick={this.handleItemClick} />
          <Menu.Item name='sessions-under-six-minutes' active={activeItem === 'sessions-under-six-minutes'} onClick={this.handleItemClick} />
          <Menu.Item name='all' active={activeItem === 'all'} onClick={this.handleItemClick} />
        </Menu>
        </div>
        <div className="ui thirteen wide column">
          <div className="ui container" id="meditation">
          {display}
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