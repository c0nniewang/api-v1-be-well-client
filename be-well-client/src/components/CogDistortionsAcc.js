import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'

class CogDistortionsAcc extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    console.log('COGS')
    const { activeIndex } = this.state

    let acc
    let i = 0
    {this.props.cogDistortions ? (acc = this.props.cogDistortions.map(cog => {
      i++
      return (
        <div>
       <Accordion.Title active={activeIndex === i} index={i} onClick={this.handleClick}>
          <Icon name='dropdown' />
          {cog.title}
        </Accordion.Title>
        <Accordion.Content active={activeIndex === i}>
          <p>
            {cog.description}
          </p>
        </Accordion.Content></div>)
    })) : null }

    return (
      <Accordion fluid styled>
        {acc}
      </Accordion>
    )
  }
}

const mapStateToProps = ({ cogDistortions }) => {
  return { cogDistortions }
}

export default connect(mapStateToProps)(CogDistortionsAcc)