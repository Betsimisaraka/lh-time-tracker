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
      <label className='wrapper__label' htmlFor='firstRange'>
        <input
          className='wrapper__input--thumb1'
          type='range'
          id='firstRange'
          min='0'
          max='100'
          value={firstRangeValue}
          tabIndex='1'
          onChange={(e) => onChangeFirstThumb(Number(e.target.value))}
        />
      </label>
      <label className='wrapper__label' htmlFor='secondRange'>
        <input
          className='wrapper__input--thumb2'
          type='range'
          id='secondRange'
          min='0'
          max='100'
          value={100 - thirdRangeValue}
          tabIndex='2'
          onChange={(e) => onChangeSecondThumb(100 - Number(e.target.value))}
        />
      </label>
    </div>
  )
}

export default InputRange
