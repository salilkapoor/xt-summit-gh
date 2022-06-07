import * as TYPES from './types'

export type ACTIONTYPE =
  | { type: typeof TYPES.TO_FILTER; payload: number }
  | { type: typeof TYPES.FROM_FILTER; payload: number }
  | { type: typeof TYPES.AMOUNT; payload: number }
