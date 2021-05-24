import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  setFirstRangeValue,
  setSecondRangeValue,
  setThirdRangeValue,
  setIsHovered,
} from '../redux/Actions'

const InputFields = () => {
  const firstRangeValue = useSelector((state) => state.firstRangeValue)
  const thirdRangeValue = useSelector((state) => state.thirdRangeValue)
  const secondRangeValue = useSelector((state) => state.secondRangeValue)

  const dispatch = useDispatch()

  const onChangeFirstRange = (value) => {
    if (value < 0) return (value = 0)
    if (value > 100) return (value = 100)
    if (secondRangeValue <= 0) {
      dispatch(setSecondRangeValue(100 - thirdRangeValue - value))
    } else {
      dispatch(setFirstRangeValue(value))
      dispatch(setSecondRangeValue(100 - thirdRangeValue - value))
    }
  }

  const onChangeSecondRange = (value) => {
    if (value < 0) return (value = 0)
    if (value > 100) return (value = 100)
    if (secondRangeValue <= 0 && thirdRangeValue <= 0) {
      dispatch(setThirdRangeValue(100 - firstRangeValue - value))
    } else {
      dispatch(setSecondRangeValue(value))
      dispatch(setThirdRangeValue(100 - firstRangeValue - value))
    }
  }

  const onChangeThirdRange = (value) => {
    if (value < 0) return (value = 0)
    if (value > 100) return (value = 100)
    if (secondRangeValue <= 0) {
      dispatch(setSecondRangeValue(100 - firstRangeValue - value))
    } else {
      dispatch(setThirdRangeValue(value))
      dispatch(setSecondRangeValue(100 - firstRangeValue - value))
    }
  }

  return (
    <div className='tasks'>
      <label htmlFor='design' className='tasks__label'>
        LH: Website: Design
        <div className='tasks__input--wrapper'>
          <input
            type='number'
            id='design'
            min='0'
            max='100'
            value={firstRangeValue}
            onChange={(e) => {
              onChangeFirstRange(Number(e.target.value))
            }}
            onClick={(e) => {
              e.target.select()
            }}
            onMouseOver={() => dispatch(setIsHovered(true))}
            onMouseOut={() => dispatch(setIsHovered(false))}
          />
          %
        </div>
        <span className='tasks__label--design tasks__label--span'></span>
      </label>
      <label htmlFor='paceport' className='tasks__label'>
        TCS: Paceport CMI
        <div className='tasks__input--wrapper'>
          <input
            type='number'
            id='paceport'
            min='0'
            max='100'
            value={secondRangeValue <= 0 ? 0 : secondRangeValue}
            onChange={(e) => {
              onChangeSecondRange(Number(e.target.value))
            }}
            onClick={(e) => {
              e.target.select()
            }}
            onMouseOver={() => dispatch(setIsHovered(true))}
            onMouseOut={() => dispatch(setIsHovered(false))}
          />
          %
        </div>
        <span className='tasks__label--paceport tasks__label--span'></span>
      </label>
      <label htmlFor='sprints' className='tasks__label'>
        IHS: Sprints
        <div className='tasks__input--wrapper'>
          <input
            type='number'
            id='sprints'
            min='0'
            max='100'
            value={thirdRangeValue <= 0 ? 0 : thirdRangeValue}
            onChange={(e) => {
              onChangeThirdRange(Number(e.target.value))
            }}
            onClick={(e) => {
              e.target.select()
            }}
            onMouseOver={() => dispatch(setIsHovered(true))}
            onMouseOut={() => dispatch(setIsHovered(false))}
          />
          %
        </div>
        <span className='tasks__label--sprints tasks__label--span'></span>
      </label>
    </div>
  )
}

export default InputFields
