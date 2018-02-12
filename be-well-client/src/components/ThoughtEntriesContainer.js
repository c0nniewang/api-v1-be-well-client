import React from 'react'
import { connect } from 'react-redux'
import ThoughtEntry from './ThoughtEntry'
import ThoughtEntryForm from './ThoughtEntryForm'
import { Button } from 'semantic-ui-react'

class ThoughtEntriesContainer extends React.Component {
  constructor() {
    super();


  }
  render() {
    console.log('THOTS', this.props)
    const pageButton = (<Button>
            <i className="plus icon"></i>
            New Entry
          </Button>)
    const thots = this.props.thoughts.reverse().map((thot, index) => <ThoughtEntry key={index} thot={thot} />)
    return (
      <div className="container">
        <h2 className="ui header">
          <i className="cloud icon"></i>
          <div className="content">
          Thoughts
          </div>
        </h2>
        <div className="ui stacked segment">
          <h3 className="ui header center aligned">
            <ThoughtEntryForm button={pageButton}/>
          </h3>
        </div>
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