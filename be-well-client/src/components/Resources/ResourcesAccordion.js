import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
import Happy from '../../images/Happy.gif'
import Sad from '../../images/Sad.gif'
import Neutral from '../../images/Neutral.gif'
import Dead from '../../images/Dead.gif'
import Asleep from '../../images/Asleep.gif'

class ResourcesAccordion extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Accordion fluid styled>
        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
          <Icon name='dropdown' />
          What is the function of Be Well?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>
            Be Well is built with principles of CBT, or Cognitive Behavioral Therapy. It is the most widely used evidence-based practice for improving mental health, and is something that everybody can easily apply to their own life. The hope is that through the use of Be Well, by tracking your mood and thoughts, you can increase self awareness, mindfulness, and emotional intelligence. Additionally, by linking these thoughts to your physical state, you can begin to identify thought patterns and emotional tendencies over time.
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
          <Icon name='dropdown' />
          What are thought entries for?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
            Thought Entries are a feature to allow one to reflect on any of their situations, whether it be positive or negative. The core feature of thought entries is to write out your thoughts, and then to read back on these thoughts and identify for yourself any cognitive distortions that you may see.
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
          <Icon name='dropdown' />
          What are cognitive distortions?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
            Cognitive Distortions are irrational thoughts and beliefs that we unknowingly reinforce over time. It's often difficult to recognize them because they are a feature of your day-to-day thoughts. These cognitive distortions are biased perspectives and are false or inaccurate. If internalized over time, they have the potential to cause lasting psychological damage. 
          </p>
          <p>
            The cognitive distortions identified in Be Well are taken from David Burns' book, The Feeling Good Handbook. For a more detailed description of these cognitive distortions, please see below.
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 4} index={4} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Why meditation sessions?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 4}>
          <p>
            Research has shown mindfulness to address health issues such as lower blood pressure and improving the immune system. Additionally, mindful awareness practices can aid in increasing attention and focus, foster well-being and less emotional reactivity, and can help with difficult mental states such as anxiety and depression.
          </p>
          <p>
            The guided meditation sessions on Be Well are taken from UCLA's Mindful Awareness Research Center, found here: <a target="_blank" href="http://marc.ucla.edu/">UCLA MARC</a>.
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}>
          <Icon name='dropdown' />
          What is the WellPal?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
          <p>
            The WellPal is your wellness buddy! The state of your WellPal is determined by your user activity. Postive acts such as meditation and goal completion increase the happiness of the WellPal, whereas negative acts such as low sleep hours may decrease the WellPal's happiness. The five states of the WellPal are: 
          </p>
          <div class="ui container">
          <img src={Happy}/> <img src={Neutral}/><img src={Asleep}/><img src={Sad}/><img src={Dead}/>
          </div>
        </Accordion.Content>

      </Accordion>
    )
  }
}

export default ResourcesAccordion