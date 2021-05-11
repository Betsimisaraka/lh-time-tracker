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
          onChange={(e) => onChangeMiddleRange(Number(e.target.value))}
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
          onChange={(e) => onChangeSecondThumb(Number(e.target.value))}
        />
        <span></span>
      </label>
    </form>
  )
}

export default Tasks
