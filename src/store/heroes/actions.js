import { ADD_HERO } from './consts'

export const addHeroAction = hero =>
    dispatch => dispatch({ type: ADD_HERO, payload: hero })