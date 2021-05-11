import { useState } from 'react'

function useRange() {
  const [firstRangeValue, setFirstRangeValue] = useState(25)
  const [secondRangeValue, setSecondRangeValue] = useState(25)
  const [thirdRangeValue, setThirdRangeValue] = useState(50)

  const onChangeFirstThumb = (value) => {
    setFirstRangeValue(value)
    setSecondRangeValue(100 - thirdRangeValue - value)
  }

  const onChangeSecondThumb = (value) => {
    setSecondRangeValue(value)
    setThirdRangeValue(100 - firstRangeValue - value)
  }

  const onChangeThirdThumb = (value) => {
    setThirdRangeValue(value)
    setSecondRangeValue(100 - firstRangeValue - value)
  }

  return {
    firstRangeValue,
    secondRangeValue,
    thirdRangeValue,
    onChangeFirstThumb,
    onChangeThirdThumb,
    onChangeSecondThumb,
  }
}

export default useRange
