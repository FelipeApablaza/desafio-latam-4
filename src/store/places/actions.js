import { ADD_PLACE } from './consts'

export const addPlaceAction = place =>
    dispatch => dispatch({ type: ADD_PLACE, payload: place })