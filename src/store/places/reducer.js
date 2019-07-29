import { initialState } from './initialState'
import { ADD_PLACE } from './consts'

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_PLACE: {
            return {
                ...state,
                placesList: state.placesList.concat(action.payload)
            }
        }
        default: {
            return state
        }
    }
}