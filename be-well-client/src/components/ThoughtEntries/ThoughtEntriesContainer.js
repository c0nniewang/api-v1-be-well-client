import React from 'react'
import { connect } from 'react-redux'
import ThoughtEntry from './ThoughtEntry'
import ThoughtEntryForm from './ThoughtEntryForm'
import { Button, Dropdown, Popup } from 'semantic-ui-react'

// <Dropdown text="Filter Entries" multiple icon='filter' onChange={this.handleDropChange}>
//   <Dropdown.Menu>
//     <Dropdown.Header icon='tags' content="tag" />
//     <Dropdown.Menu scrolling>
//       {tagOptions.map(option => <Dropdown.Item key={option.value} {...option} />)}
//     </Dropdown.Menu>
//   </Dropdown.Menu>
// </Dropdown>
class ThoughtEntriesContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      current: 'All',
    }
  }

  handleDropChange = (value, key) => {
    console.log(value, key)
    // this.setState({
    //   [key]: value
    // })
  }

  render() {
    console.log('THOTS', this.props.thoughts)
    const pageButton = (<Button 
      id="my-button" 
      style={{"border-color": "#e7e7e7"}} 
      >
        <i className="plus icon"></i>
        New Entry
      </Button>)



    const thots = this.props.thoughts.slice().reverse().map((thot, index) => <ThoughtEntry key={index} thot={thot} />)
    
    const tagOptions = [
      {
        text: <i className="frown icon"></i>,
        value: 'sad',
        label: { color: 'red', empty: true, circular: true },
      },
        {
        text: <i className="smile icon"></i>,
        value: 'meh',
        label: { color: 'blue', empty: true, circular: true },
      },
      {
        text: <i className="meh icon"></i>,
        value: 'happy',
        label: { color: 'black', empty: true, circular: true },
      },
    ]

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



    let index = -1
    const topDistortions = Object.entries(distortions).map(arr => {
      index++
      return (<Popup
                id="my-red"
                key={index}
                trigger={<div key={index} 
                id="my-button" 
                style={{"border-color": "#e7e7e7", color: "#6cja89"}}
                className="ui label">
                  <i className="comments">{arr[0]}</i> <div className="detail">{arr[1]}</div>
                  </div>}
                content={(this.props.cogDistortions.find( el => el.title === arr[0])).description}
                />)
    })

    console.log(Object.entries(distortions))

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
          {topDistortions}
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