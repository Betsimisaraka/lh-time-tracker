import React from 'react'
import InputRange from './components/InputRange'
import Tasks from './components/Tasks'
import useRange from './useRange'

const App = () => {
  const {
    firstRangeValue,
    secondRangeValue,
    thirdRangeValue,
    onChangeFirstThumb,
    onChangeMiddleRange,
    onChangeSecondThumb,
  } = useRange()

  return (
    <div className='container'>
      <h1>How did you divide your time?</h1>
      <InputRange
        firstRangeValue={firstRangeValue}
        thirdRangeValue={thirdRangeValue}
        onChangeFirstThumb={onChangeFirstThumb}
        onChangeSecondThumb={onChangeSecondThumb}
      />
      <Tasks
        firstRangeValue={firstRangeValue}
        thirdRangeValue={thirdRangeValue}
        secondRangeValue={secondRangeValue}
        onChangeFirstThumb={onChangeFirstThumb}
        onChangeMiddleRange={onChangeMiddleRange}
        onChangeSecondThumb={onChangeSecondThumb}
      />
    </div>
  )
}

export default App
