import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import {
  setFirstRangeValue,
  setSecondRangeValue,
  setThirdRangeValue,
} from '../redux/Actions'

const InputRange = () => {
  const firstRangeValue = useSelector((state) => state.firstRangeValue)
  const secondRangeValue = useSelector((state) => state.secondRangeValue)
  const thirdRangeValue = useSelector((state) => state.thirdRangeValue)
  const dispatch = useDispatch()

  const onChangeFirstThumb = (value) => {
    if (secondRangeValue <= 0) {
      return dispatch(setSecondRangeValue(100 - thirdRangeValue - value))
    } else {
      dispatch(setFirstRangeValue(value))
      dispatch(setSecondRangeValue(100 - thirdRangeValue - value))
    }
  }

  const onChangeSecondThumb = (value) => {
    if (secondRangeValue <= 0) {
      return dispatch(setSecondRangeValue(100 - firstRangeValue - value))
    } else {
      dispatch(setThirdRangeValue(value))
      dispatch(setSecondRangeValue(100 - firstRangeValue - value))
    }
  }

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
