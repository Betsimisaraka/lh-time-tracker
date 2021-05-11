import React from 'react'
import useRange from '../useRange'

const InputRange = ({
  firstRangeValue,
  thirdRangeValue,
  onChangeFirstThumb,
  onChangeSecondThumb,
}) => {
  return (
    <div className='wrapper'>
      <label className='wrapper_label' for='range1'>
        <input
          className='wrapper_label'
          type='range'
          id='range1'
          min='0'
          max='100'
          value={firstRangeValue}
          onChange={(e) => onChangeFirstThumb(Number(e.target.value))}
        />
      </label>
      <label className='wrapper_label' for='range2'>
        <input
          className='wrapper_input'
          type='range'
          id='range2'
          min='0'
          max='100'
          value={100 - thirdRangeValue}
          onChange={(e) => onChangeSecondThumb(100 - Number(e.target.value))}
        />
      </label>
    </div>
  )
}

export default InputRange
