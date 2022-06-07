import { TAccountData } from './types'

export declare interface IAccountTile {
  children: JSX.Element[]
  className?: string
}

export declare interface IContextProvider {
  children: JSX.Element[]
}

export declare interface IAccounts {
  data: {
    getAccounts: TAccountData[]
  }
}

export type IAccountHeader = IAccountTile
export type IAccountBody = IAccountTile
