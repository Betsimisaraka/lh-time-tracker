import { useState } from 'react'

function useRange() {
  const [firstRange, setFirstRange] = useState('10%')

  return { firstRange, setFirstRange }
}

export default useRange
