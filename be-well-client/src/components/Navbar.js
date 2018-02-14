import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions'
import { withRouter } from 'react-router-dom'
import { Menu, Dropdown, Modal } from 'semantic-ui-react'
import ThoughtEntryForm from './ThoughtEntryForm'
import NewGoalForm from './NewGoalForm'

class Navbar extends React.Component {
  state = {activeItem: 'home'}
  //match URL from params

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })

    this.props.history.push(`/profile/${name}`)
  }

  render() {
  const { activeItem } = this.state

  const goalsModal = <Modal trigger={<Dropdown.Item icon="star" text="New Goal"/>}>
      <Modal.Content >
      <NewGoalForm />
      </Modal.Content>
      <Modal.Actions>
      </Modal.Actions>
    </Modal>

    console.log(this.props.match)

    return (<div>
      <Menu pointing secondary>
        <img
          alt=""
          height="30"
          src={require("../images/Logo.png")}
          active={activeItem==='home'}
        />

        <Menu.Item 
        name='home' 
        active={activeItem==='home'} 
        onClick={this.handleItemClick}
        />
        <Menu.Item 
        name='thought-entries' 
        active={activeItem === 'thought-entries'} 
        onClick={this.handleItemClick} 
        />
        <Menu.Item 
        name='goals' 
        active={activeItem === 'goals'} 
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
          style={{
            background: "rgba(255, 255, 255, 0.9)",
            "border-bottom": "2px solid rgba(34,36,38,.15)"
          }}
          />
          <Dropdown 
          style={{
            background: "rgba(255, 255, 255, 0.9)",
            "border-bottom": "2px solid rgba(34,36,38,.15)"
          }}
          item icon="user circle">
            <Dropdown.Menu>
              <ThoughtEntryForm button={<Dropdown.Item icon="cloud" text="New Thought Entry" />}/>
              {goalsModal}
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