import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions'

// import { Link } from 'react-router-dom'

class Navbar extends React.Component {
  render() {
    return (<div className="ui secondary pointing menu fixed">
        <a className="active item">
          <div className="content">Home</div>
        </a>
        <a className="item">Your Activity</a>
        <a className="item">Goals</a>
        <a className="item">Thoughts</a>
        <div className="right menu">
          <div className="item">Welcome, {this.props.name}</div>
          <div className="right aligned item">
            <div 
            className="ui floated button"
            onClick={() => this.props.logoutUser()}>
              Log Out
            </div>
          </div>
        </div>
      </div>
  )}
}

const mapStateToProps = ({ user }) => {
  return {
    name: user.profile.name
  }
}

export default connect(mapStateToProps, actions)(Navbar)
