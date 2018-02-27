import React from 'react'
import ResourcesAccordion from './ResourcesAccordion'
import CogDistortionsAcc from './CogDistortionsAcc'

const ResourcesContainer = () => {
  return (
    <div className="ui container">
      <h3>FAQ</h3>
      <ResourcesAccordion />
      <br />
      <h3>Cognitive Distortions</h3>
      <CogDistortionsAcc />
    </div>
  )
}

export default ResourcesContainer;