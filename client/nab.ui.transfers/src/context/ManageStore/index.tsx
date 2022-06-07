import * as React from 'react'

import { getReducer, initialState } from './reducers'
import * as TYPES from './types'

import { IContextProvider } from '../../typeDefs/Interfaces'

const ManageCtx = React.createContext(null)

type IManageStore = {
  state: typeof initialState
  dispatchers: {
    TO: (value: number) => void
    FROM: (value: number) => void
    AMOUNT: (value: number) => void
  }
}

export const useManageStore = (): IManageStore => React.useContext(ManageCtx)

export const ManageStore: React.FC = ({ children }: IContextProvider) => {
  const [state, dispatcher] = React.useReducer(getReducer, initialState)

  const dispatchers = {
    [TYPES.TO_FILTER]: function (value: string) {
      dispatcher({ type: TYPES.TO_FILTER, payload: +value })
    },
    [TYPES.FROM_FILTER]: function (value: string) {
      dispatcher({ type: TYPES.FROM_FILTER, payload: +value })
    },
    [TYPES.AMOUNT]: function (value: number) {
      dispatcher({ type: TYPES.AMOUNT, payload: value })
    }
  }

  return (
    <ManageCtx.Provider value={{ state, dispatchers }}>
      {children}
    </ManageCtx.Provider>
  )
}
