import React from 'react'
import { connect } from 'react-redux'
import ThoughtEntry from './ThoughtEntry'
import ThoughtEntryForm from './ThoughtEntryForm'
import { Button, Dropdown } from 'semantic-ui-react'

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
    console.log('THOTS', this.props)
    const pageButton = (<Button 
      id="my-button" 
      style={{"border-color": "#e7e7e7"}} 
      >
        <i className="plus icon"></i>
        New Entry
      </Button>)



    const thots = this.props.thoughts.map((thot, index) => <ThoughtEntry key={index} thot={thot} />)

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

    this.props.thoughts.map(thought => thought.cognitive_distortions)

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