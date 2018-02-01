import React from 'react'

export default class DailyUpdateForm extends React.Component {
  render() {
    return (
      <form className="ui form">
        <h3 className="ui dividing header">Daily Update</h3>
        <div class="field">
          <label>On a scale of 1-10, with 1 being the lowest and 10 being the highest, how would you rate your current mood level?</label>
          </div>
      </form>
    )
  }
}