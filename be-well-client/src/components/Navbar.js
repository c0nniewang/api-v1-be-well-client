import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions'
import { withRouter } from 'react-router-dom'
import { Menu, Dropdown } from 'semantic-ui-react'
import ThoughtEntryForm from './ThoughtEntryForm'

class Navbar extends React.Component {
  state = {activeItem: 'home'}
  //match URL from params

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })

    this.props.history.push(`/profile/${name}`)
  }

  render() {
    const { activeItem } = this.state
    return (<div>
      <Menu pointing secondary>
        <Menu.Item 
        name='home' 
        active={activeItem==='home'} 
        onClick={this.handleItemClick}
        />
        <Menu.Item 
        name='goals' 
        active={activeItem === 'goals'} 
        onClick={this.handleItemClick} 
        />
        <Menu.Item 
        name='thought-entries' 
        active={activeItem === 'thought-entries'} 
        onClick={this.handleItemClick} 
        />
        <Menu.Item 
        name='meditation' 
        active={activeItem === 'meditation'} 
        onClick={this.handleItemClick} 
        />
        <Menu.Menu position='right'>
          <Menu.Item 
          name='resources' 
          active={activeItem === 'resources'} 
          onClick={this.handleItemClick} 
          />
          <Dropdown item icon="user circle">
            <Dropdown.Menu>
              <ThoughtEntryForm button={<Dropdown.Item icon="cloud" text="New Thought Entry" />}/>
              <Dropdown.Item icon="star" text="New Goal"/>
              <Dropdown.Item icon="sound" text="New Meditation Session" onClick={() => this.props.history.push('/profile/meditation')}/>
              <Dropdown.Item name='logout' active={activeItem === 'logout'} onClick={() => this.props.logoutUser()} icon="power" text="Logout"/>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    </div>
  )}
}

const mapStateToProps = ({ user }) => {
  return {
    name: user.profile.name
  }
}

export default withRouter(connect(mapStateToProps, actions)(Navbar))