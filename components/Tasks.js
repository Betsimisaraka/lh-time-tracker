import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  setFirstRangeValue,
  setSecondRangeValue,
  setThirdRangeValue,
} from '../redux/Actions'

const Tasks = () => {
  const firstRangeValue = useSelector((state) => state.firstRangeValue)
  const thirdRangeValue = useSelector((state) => state.thirdRangeValue)
  const secondRangeValue = useSelector((state) => state.secondRangeValue)

  const dispatch = useDispatch()

  const onChangeFirstThumb = (value) => {
    if (secondRangeValue <= 0) {
      return dispatch(setSecondRangeValue(100 - thirdRangeValue - value))
    } else {
      dispatch(setFirstRangeValue(value))
      dispatch(setSecondRangeValue(100 - thirdRangeValue - value))
    }
  }

  const onChangeMiddleRange = (value) => {
    if (thirdRangeValue <= 0) {
      return dispatch(setThirdRangeValue(100 - firstRangeValue - value))
    }
    dispatch(setSecondRangeValue(value))
    dispatch(setThirdRangeValue(100 - firstRangeValue - value))
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
    <div className='tasks'>
      <label htmlFor='design' className='tasks__label'>
        LH: Website: Design
        <input
          type='number'
          id='design'
          min='0'
          max='100'
          value={firstRangeValue}
          onChange={(e) => onChangeFirstThumb(Number(e.target.value))}
        />
        <span className='tasks__label--design tasks__label--span'></span>
      </label>
      <label htmlFor='paceport' className='tasks__label'>
        TCS: Paceport CMI
        <input
          type='number'
          id='paceport'
          min='0'
          max='100'
          value={secondRangeValue <= 0 ? 0 : secondRangeValue}
          onChange={(e) => onChangeMiddleRange(Number(e.target.value))}
        />
        <span className='tasks__label--paceport tasks__label--span'></span>
      </label>
      <label htmlFor='sprints' className='tasks__label'>
        IHS: Sprints
        <input
          type='number'
          id='sprints'
          min='0'
          max='100'
          value={thirdRangeValue <= 0 ? 0 : thirdRangeValue}
          onChange={(e) => onChangeSecondThumb(Number(e.target.value))}
        />
        <span className='tasks__label--sprints tasks__label--span'></span>
      </label>
    </div>
  )
}

export default Tasks
