import { combineReducers } from 'redux';
import heroesReducer from './heroes/reducer'
import placesReducer from './places/reducer'

export default combineReducers({
    heroesReducer,
    placesReducer
})