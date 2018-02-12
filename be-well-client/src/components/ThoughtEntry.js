import React from 'react'
import { Popup } from 'semantic-ui-react'

class ThoughtEntry extends React.Component {
  render() {
    const labels = this.props.thot.cognitive_distortions.map((cog, index) => {
      return (<Popup
                key={index}
                trigger={<div key={index} className="ui label">
                  <i className="comments"></i>{cog.title}
                  </div>}
                header={cog.title}
                content={cog.description}
                />)
    })

    const thot = this.props.thot

    let smiley
    if (thot.current_mood < 4) {
      smiley = (<i className="frown icon"></i>)
    } else if (thot.current_mood < 7) {
      smiley = (<i className="meh icon"></i>)
    } else if (thot.current_mood < 11) {
      smiley = (<i className="smile icon"></i>)
    }
    
    return (
      <div className="ui stacked segment">
      <h2 className="ui header">
        {smiley}
        <div className="content">
        {new Date(this.props.thot.created_at).toDateString()}
        </div></h2>
      <div className="ui divider"></div>
        {thot.situation}<br />
        {thot.emotions}<br />
        {thot.negative_thoughts}<br />
        <div className="ui divider"></div>
        {labels}
        </div>
    )
  }
}

export default ThoughtEntry