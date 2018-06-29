import { combineReducers } from 'redux'
import dogReducer from './dog'
import catReducer from './cat'

export default combineReducers({
  dog: dogReducer,
  cat: catReducer
})
