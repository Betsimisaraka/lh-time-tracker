import { createStore } from 'redux'

const initialState = {
  firstRangeValue: 25,
  secondRangeValue: 25,
  thirdRangeValue: 50,
}

const inputReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'FIRST_THUMB':
      return { ...state, firstRangeValue: action.payload }
    case 'MIDDLE_RANGE':
      return { ...state, secondRangeValue: action.payload }
    case 'SECOND_THUMB':
      return { ...state, thirdRangeValue: action.payload }
    default:
      return state
  }
}

const store = createStore(inputReducers)

export default store
