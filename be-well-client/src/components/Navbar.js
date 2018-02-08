import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions'
import { withRouter } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

class Navbar extends React.Component {
  state = {activeItem: 'home'}

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
        name='dashboard' 
        active={activeItem === 'dashboard'} 
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
          <Menu.Item name='logout' active={activeItem === 'logout'} onClick={() => this.props.logoutUser()} />
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