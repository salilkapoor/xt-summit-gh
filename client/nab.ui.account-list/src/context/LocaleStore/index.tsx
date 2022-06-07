import * as React from 'react'

import Locale from '../../locale/index.json'

import { IContextProvider } from '../../typeDefs/Interfaces'

export const LocaleCtx = React.createContext(null)

export const LocaleStore: React.FC = ({ children }: IContextProvider) => {
  return <LocaleCtx.Provider value={Locale}>{children}</LocaleCtx.Provider>
}
