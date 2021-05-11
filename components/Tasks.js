import React from 'react'
import useRange from '../useRange'

const Tasks = ({
  firstRangeValue,
  secondRangeValue,
  thirdRangeValue,
  onChangeFirstThumb,
  onChangeSecondThumb,
  onChangeThirdThumb,
}) => {
  return (
    <form>
      <label for='design'>
        LH: Website: Design
        <input
          type='number'
          id='design'
          min='0'
          value={firstRangeValue}
          onChange={(e) => onChangeFirstThumb(Number(e.target.value))}
        />
        <span></span>
      </label>
      <label for='paceport'>
        TCS: Paceport CMI
        <input
          type='number'
          id='paceport'
          min='0'
          value={secondRangeValue <= 0 ? 0 : secondRangeValue}
          onChange={(e) => onChangeSecondThumb(Number(e.target.value))}
        />
        <span></span>
      </label>
      <label for='sprints'>
        IHS: Sprints
        <input
          type='number'
          id='sprints'
          min='0'
          value={thirdRangeValue}
          onChange={(e) => onChangeThirdThumb(Number(e.target.value))}
        />
        <span></span>
      </label>
    </form>
  )
}

export default Tasks
