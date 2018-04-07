import React from 'react'
import { connect } from 'react-redux'
import ThoughtEntry from './ThoughtEntry'
import ThoughtEntryForm from './ThoughtEntryForm'
import { Button, Dropdown, Popup } from 'semantic-ui-react'

class ThoughtEntriesContainer extends React.Component {

  render() {

    const pageButton = (<Button 
      id="my-button" 
      style={{"border-color": "#e7e7e7"}} 
      >
        <i className="plus icon"></i>
        New Entry
      </Button>)

    const thots = this.props.thoughts.slice().reverse().map((thot, index) => <ThoughtEntry key={index} thot={thot} />)

    // count cognitive distortions used in thought entries    
    let distortions = {}

    this.props.thoughts.forEach(thought => {
      thought.cognitive_distortions.forEach(cog => {
        if (distortions[cog.title]) {
          distortions[cog.title] += 1
        } else {
          distortions[cog.title] = 1
        }
      })
    })

    // sort by cogDistortions by count; then take top 8 and iterate to create popups
    let keys = Object.keys(distortions)

    keys.sort(function(a, b) { return distortions[b] - distortions[a]})

    let index = 0
    const topDistortions = keys.slice(0, 8).map( i => {
      index++
      return (<Popup
                id="my-red"
                key={index}
                trigger={<div key={index} 
                id="my-button" 
                style={{"border-color": "#e7e7e7", color: "#6cja89"}}
                className="ui label">
                  <i className="comments">{i}</i> <div className="detail">{distortions[i]}</div>
                  </div>}
                content={(this.props.cogDistortions.find( el => el.title === i)).description}
                />
      )
    })

    return (
      <div className="ui container">
        <h2 className="ui header">
          <i className="cloud icon"></i>
          <div className="content">
          Thoughts
          </div>
        </h2>
        <div className="ui stacked segment">
          <h3 className="ui header center aligned">
            <ThoughtEntryForm 
            button={pageButton}
            />
          </h3>
        </div>
        <div className="ui stacked segment center aligned">
          <h3 className="ui header center aligned">
          Your most frequent cognitive distortions:
          </h3>
          {thots.length ? 
          {topDistortions} : <div className="content">Enter a thought entry to start tracking your cognitive distortions.</div>}
        </div>
        {thots.length ? thots : 
          <div className="ui stacked segment center aligned">
            <div className="ui header">
            You do not have any thought entries yet.
            </div>
            <div className="content">
            Create a new one now!
            </div>
          </div>}
      </div>
    )
  }
}

const mapStateToProps = ({ thoughts, cogDistortions }) => {
  return {
    thoughts,
    cogDistortions
  }
}

export default connect(mapStateToProps)(ThoughtEntriesContainer)