import { ACTIONTYPE } from './actions'
import * as TYPES from './types'

export const initialState = { to: null, from: null, amount: null }

const reducers = {
  [TYPES.TO_FILTER]: function to(
    state: typeof initialState,
    action: ACTIONTYPE
  ) {
    return { ...state, to: action.payload }
  },
  [TYPES.FROM_FILTER]: function from(
    state: typeof initialState,
    action: ACTIONTYPE
  ) {
    return { ...state, from: action.payload }
  },
  [TYPES.AMOUNT]: function amount(
    state: typeof initialState,
    action: ACTIONTYPE
  ) {
    return { ...state, amount: action.payload }
  }
}

export function getReducer(
  state: typeof initialState,
  action: ACTIONTYPE
): typeof initialState {
  return reducers[action.type](state, action)
}
