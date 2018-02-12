import React from 'react'
import { TagCloud } from 'react-tagcloud'
import { connect } from 'react-redux'

const data = [
  { value: "jQuery", count: 25 }, { value: "MongoDB", count: 18 },
  { value: "JavaScript", count: 38 }, { value: "React", count: 30 },
  { value: "Nodejs", count: 28 }, { value: "Express.js", count: 25 },
  { value: "HTML5", count: 33 }, { value: "CSS3", count: 20 },
  { value: "Webpack", count: 22 }, { value: "Babel.js", count: 7 },
  { value: "ECMAScript", count: 25 }, { value: "Jest", count: 15 },
  { value: "Mocha", count: 17 }, { value: "React Native", count: 27 },
  { value: "Angular.js", count: 30 }, { value: "TypeScript", count: 15 },
  { value: "Flow", count: 30 }, { value: "NPM", count: 11 },
];


class WordCloud extends React.Component {
  render() {
  // console.log("-------")
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

  // console.log(thoughtArr)

  let thoughtObj = {}

  thoughtArr.map(thought => {
    if (thoughtObj[thought] === undefined) {
      thoughtObj[thought] = 1
    } else {
      thoughtObj[thought] += 1
    }
  })

  // console.log(thoughtObj)
  let thoughtData = []

  Object.keys(thoughtObj).map(key => {
    let el = {value: key, count: thoughtObj[key]}
    thoughtData.push(el)
  })
  
  // console.log(thoughtData)
  return (
    <div className="six wide column center aligned">
    <h3>Most frequently used words</h3>

      <TagCloud minSize={14}
        maxSize={35}
        tags={thoughtData}
        className="simple-cloud"
        onClick={tag => alert(`'${tag.value}' was selected!`)} />
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