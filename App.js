import React from 'react'
import InputRange from './components/InputRange'
import Tasks from './components/Tasks'
import { ContextProvider } from './useRange'

const App = () => {
  return (
    <div className='container'>
      <h1>How did you divide your time?</h1>
      <InputRange />
      {/* <Tasks /> */}
    </div>
  )
}

export default App
