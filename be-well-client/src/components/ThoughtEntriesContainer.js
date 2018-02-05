import React from 'react'
import { connect } from 'react-redux'
import ThoughtEntry from './ThoughtEntry'

class ThoughtEntriesContainer extends React.Component {
  render() {
    console.log('THOTS', this.props)

    const thots = this.props.thoughts.map((thot, index) => <ThoughtEntry key={index} thot={thot} />)
    return (
      <div className="container">
        <h2 className="ui header">
            <i className="cloud icon"></i>
            <div className="content">
            Thoughts
            </div>
          </h2>
        {thots}
      </div>
    )
  }
}

const mapStateToProps = ({ thoughts }) => {
  return {
    thoughts
  }
}

export default connect(mapStateToProps)(ThoughtEntriesContainer)