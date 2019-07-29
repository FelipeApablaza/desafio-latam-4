import { initialState } from './initialState'
import { ADD_HERO } from './consts'

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_HERO: {
            return {
                ...state,
                heroesList: state.heroesList.concat(action.payload)
            }
        }
        default: {
            return state
        }
    }
}