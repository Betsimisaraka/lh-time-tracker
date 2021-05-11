import React from 'react'
import InputRange from './components/InputRange'
import Tasks from './components/Tasks'
import { Provider } from 'react-redux'
import store from './redux/Reducers'

const App = () => {
  return (
    <Provider store={store}>
      <div className='container'>
        <h1>How did you divide your time?</h1>
        <InputRange />
        <Tasks />
      </div>
    </Provider>
  )
}

export default App
