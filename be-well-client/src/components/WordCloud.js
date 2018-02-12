import React from 'react'
import { TagCloud } from 'react-tagcloud'
import { connect } from 'react-redux'

class WordCloud extends React.Component {
  render() {
  const thoughtArr = []

  const formatData = (str) => {
    return str.replace(/[,.! ]+/g, " ").trim().split(" ")
  }

  const createWordArr = (arr) => {
    formatData(arr).map(word => {
      thoughtArr.push(word)
    })
  }

  this.props.thoughts.map(thot => createWordArr(thot.emotions))
  this.props.goals.completed.map(goal => {
    createWordArr(goal.goal_reflections[0].emotions)
  })
  this.props.updates.map(update => {
    createWordArr(update.mood_desc)
    createWordArr(update.grateful1)
    createWordArr(update.grateful2)
    createWordArr(update.grateful3)
  })

  let thoughtObj = {}

  thoughtArr.map(thought => {
    if (thoughtObj[thought] === undefined) {
      thoughtObj[thought] = 1
    } else {
      thoughtObj[thought] += 1
    }
  })

  let thoughtData = []

  Object.keys(thoughtObj).map(key => {
    let el = {value: key, count: thoughtObj[key]}
    thoughtData.push(el)
  })
  
  // WORDCLOUD ONCLICK 
  // onClick={tag => alert(`'${tag.value}' was selected!`)} />
  return (
    <div className="six wide column center aligned">
    <h3>Your Recent Activity</h3>
      <TagCloud minSize={16}
        maxSize={35}
        tags={thoughtData}
        className="simple-cloud" />
    </div>
    )
  }
}

const mapStateToProps = ({ goals, thoughts, updates }) => {
  return {
    goals,
    thoughts,
    updates
  }
}

export default connect(mapStateToProps)(WordCloud)