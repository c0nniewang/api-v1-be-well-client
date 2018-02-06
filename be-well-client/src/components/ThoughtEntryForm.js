import React from 'react';
import { Modal, Button, Icon, Header, Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux'
import * as actions from '../actions'


class ThoughtEntryForm extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      situation: '',
      emotions: '',
      negative_thoughts: '',
      outcome: '',
      cognitive_distortions: []
    }
  }

  handleChange = (ev) => {
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }

  handleDropChange = (value, key) => {
    console.log("value", value, "key", key)
    this.setState({
      [key]: value
    })
  }

  render() {
    console.log(this.state)

    const cogOptions= this.props.cogDistortions.map( cog => ({key: cog.id, text: cog.title, value: cog.id}))

    return (
    <Modal trigger={<Button>
        <i className="plus icon"></i>
        New Entry
      </Button>}>
      <Modal.Header><Icon name="cloud" /> New Thought Entry</Modal.Header>
      <Modal.Content >
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label>Title</label>
            <input 
            type="text" 
            onChange={this.handleChange}
            value={this.state.title}
            name="title"
            />
          </div>
          <div className="field">
            <label>What happened?</label>
            <input 
            type="text" 
            onChange={this.handleChange}
            value={this.state.situation}
            name="situation"
            />
          </div>
          <div className="field">
            <label>What emotions were you feeling?</label>
            <input 
            type="text" 
            onChange={this.handleChange}
            value={this.state.emotions}
            name="emotions"
            />
          </div>
          <div className="field">
            <label>Were there any negative thoughts that immediately came to mind? If so, what were they?</label>
            <input 
            type="text" 
            onChange={this.handleChange}
            value={this.state.negative_thoughts}
            name="negative_thoughts"
            />
          </div>
          <div className="field">
            <label>Looking back at your previous answer, are there any cognitive distortions that you can identify in your negative thoughts?</label>
            <Dropdown 
            placeholder="Select Options" 
            fluid multiple selection options={cogOptions}
            onChange={(e, {value}) => {this.handleDropChange(value, 'cognitive_distortions')}}
            value={this.state.cognitive_distortions}
            />
          </div>
          <div className="field">
            <label>What was the outcome of the situation? Is there anything you wish you could have handled differently?</label>
            <input 
            type="text" 
            onChange={this.handleChange}
            value={this.state.outcome}
            name="outcome"
            />
          </div>

        </form>

      </Modal.Content>
      <Modal.Actions>
        <Button positive>
          Submit <Icon name="right chevron" />
        </Button>
      </Modal.Actions>
    </Modal>
    )
  }
}

const mapStateToProps = ({auth, cogDistortions}) => {
  return {
    id: auth.currentUser.id,
    cogDistortions
  }
}

export default connect(mapStateToProps, actions)(ThoughtEntryForm)