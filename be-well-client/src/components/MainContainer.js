import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class MainContainer extends React.Component {


  

  render() {
    return (<div className="main">
      <div className="ui raised very padded text container segment">
        <h2 className="ui header"></h2>
        <p>form here</p>
      </div>




    </div>)
    
    // const { profile } = this.props
    // if (profile.name) {
    //   return <div className="main">{profile.name}</div>
    // } else {
    //   return null
    // }
    // return <div className="main">hello</div>
  }
}


export default MainContainer