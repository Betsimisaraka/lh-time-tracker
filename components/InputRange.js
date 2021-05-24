import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  setFirstRangeValue,
  setSecondRangeValue,
  setThirdRangeValue,
  setIsHovered,
} from '../redux/Actions'

const InputRange = () => {
  const firstRangeValue = useSelector((state) => state.firstRangeValue)
  const secondRangeValue = useSelector((state) => state.secondRangeValue)
  const thirdRangeValue = useSelector((state) => state.thirdRangeValue)
  const isHovered = useSelector((state) => state.isHovered)

  const dispatch = useDispatch()

  const onFirstThumbSlide = (value) => {
    if (secondRangeValue <= 0) {
      dispatch(setSecondRangeValue(100 - thirdRangeValue - value))
    } else {
      dispatch(setFirstRangeValue(value))
      dispatch(setSecondRangeValue(100 - thirdRangeValue - value))
    }
  }

  const onSecondThumbSlide = (value) => {
    if (secondRangeValue <= 0) {
      dispatch(setSecondRangeValue(100 - firstRangeValue - value))
    } else {
      dispatch(setThirdRangeValue(value))
      dispatch(setSecondRangeValue(100 - firstRangeValue - value))
    }
  }

  return (
    <form className='wrapper'>
      <label className='wrapper__label' htmlFor='firstRange'>
        <div
          className='mask background1'
          style={{
            width: `${firstRangeValue}%`,
            transition: 'width',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease-out',
          }}></div>
        <input
          className={isHovered ? 'hovered' : 'wrapper__input--thumb2'}
          role='slider'
          type='range'
          id='firstRange'
          min='0'
          max='100'
          value={firstRangeValue}
          aria-valuetext='firstRangeValue'
          onChange={(e) => {
            onFirstThumbSlide(Number(e.target.value))
          }}
          onMouseOver={() => dispatch(setIsHovered(true))}
          onMouseOut={() => dispatch(setIsHovered(false))}
        />
      </label>
      <label className='wrapper__label' htmlFor='secondRange'>
        <div
          className=' mask background2'
          style={{
            width: `${100 - thirdRangeValue}%`,
            transition: 'width',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease-out',
          }}></div>
        <input
          className={isHovered ? 'hovered' : 'wrapper__input--thumb2'}
          type='range'
          role='slider'
          id='secondRange'
          min='0'
          max='100'
          value={100 - thirdRangeValue}
          aria-valuetext='thirdRangeValue'
          onChange={(e) => {
            onSecondThumbSlide(100 - Number(e.target.value))
          }}
          onMouseOver={() => dispatch(setIsHovered(true))}
          onMouseOut={() => dispatch(setIsHovered(false))}
        />
      </label>
    </form>
  )
}

export default InputRange
