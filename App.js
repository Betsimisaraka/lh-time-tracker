import React from 'react'
import { Provider } from 'react-redux'
import InputFields from './components/InputFields'
import InputRange from './components/InputRange'
import store from './redux/Reducers'

const App = () => {
  return (
    <Provider store={store}>
      <div className='container'>
        <header tabIndex='1'>
          <h1 className='container__heading'>How did you divide your time?</h1>
        </header>
        <InputRange />
        <InputFields />
      </div>
    </Provider>
  )
}

export default App
