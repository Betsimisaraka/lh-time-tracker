import React from 'react'
import useRange from '../useRange'

const InputRange = () => {
  const { firstRange } = useRange()
  return (
    <div className='wrapper'>
      <label className='wrapper_label' for='range1'>
        <input
          className='wrapper_label'
          type='range'
          id='range1'
          min='0'
          max='100'
        />
      </label>
      <label className='wrapper_label' for='range2'>
        <input
          className='wrapper_input'
          type='range'
          id='range2'
          min='0'
          max='100'
        />
      </label>
    </div>
  )
}

export default InputRange
