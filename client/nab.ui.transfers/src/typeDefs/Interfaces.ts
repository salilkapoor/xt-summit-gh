import { TAccountData } from './types'

export declare interface IContextProvider {
  children: JSX.Element[]
}

export declare interface IAccounts {
  data: { getAccounts: TAccountData[] }
}
