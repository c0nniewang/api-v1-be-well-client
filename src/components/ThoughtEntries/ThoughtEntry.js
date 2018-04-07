import React from 'react'
import { Popup, Button, Icon } from 'semantic-ui-react'
import * as actions from '../../actions'
import { connect } from 'react-redux'

class ThoughtEntry extends React.Component {
  render() {
    const labels = this.props.thot.cognitive_distortions.map((cog, index) => {
      return (<Popup
                id="my-red"
                key={index}
                trigger={<div key={index} 
                id="my-button" 
                style={{"border-color": "#e7e7e7", color: "#6cja89"}}
                className="ui label">
                  <i className="comments">{cog.title}</i>
                  </div>}
                header={cog.title}
                content={cog.description}
                />)
    })

    const thot = this.props.thot

    let smiley
    if (thot.current_mood < 4) {
      smiley = (<Icon name="frown" color="yellow"></Icon>)
    } else if (thot.current_mood < 7) {
      smiley = (<Icon name="meh" color="yellow" />)
    } else if (thot.current_mood < 11) {
      smiley = (<Icon name="smile" color="yellow" />)
    }
    
    return (
      <div className="ui stacked segment">
      <h2 className="ui header">
        {smiley}
        <div className="content">
        {new Date(this.props.thot.created_at).toDateString()}
        </div></h2>
      <div className="ui divider"></div>
      <b>Title:</b><br />
      {thot.title}<br /><br />
      <b>Situation:</b><br />
      {thot.situation}<br /><br />
      <b>Emotions you were feeling?</b><br />
        {thot.emotions}<br /><br />
      <b>Any negative thoughts you had?</b><br />
        {thot.negative_thoughts}<br /><br />
      <b>What was the outcome?</b><br />
      {thot.outcome}<br /><br />
        <div className="ui divider"></div>
        {labels}
        <Button 
        onClick={(id) => this.props.deleteThought(this.props.thot.id)}
        floated="right" 
        color="red" 
        icon
        >
          <Icon name="remove" />
        </Button>
        </div>
    )
  }
}

export default connect(null, actions)(ThoughtEntry)