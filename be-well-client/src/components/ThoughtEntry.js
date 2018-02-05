import React from 'react'

class ThoughtEntry extends React.Component {
  render() {
    const labels = this.props.thot.cognitive_distortions.map((cog, index) => {
      return (<div key={index} className="ui label">
          <i className="comments"></i>{cog.title}
        </div>)
    })
    return (
      <div className="ui stacked segment">
      <h3>{new Date(this.props.thot.created_at).toDateString()}</h3>
      <div className="ui divider"></div>
        {this.props.thot.situation}<br />
        <div className="ui divider"></div>
        {labels}
        </div>
    )
  }
}

export default ThoughtEntry