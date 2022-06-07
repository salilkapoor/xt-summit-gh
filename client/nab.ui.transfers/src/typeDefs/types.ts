import React from 'react'

export type TButton = {
  clickHandler?(event: React.MouseEvent<HTMLButtonElement>): void
  children: string
  ctaType?: string
}

export type TDataList = {
  inputLabel: string
  listFor: string
  listFrom?: string
  listName: string
  selectedAccount?: (value: number) => void
  children: JSX.Element | JSX.Element[]
}

export type TOptions = {
  value: number
  children: string
}

export type TAccountData = {
  accountNumber: number
  accountType: string
  balance: number
  businessEntity: string
}

export type Tlist = {
  list: TAccountData[]
}

export type TFrom = {
  list: TAccountData[]
}

export type TTo = {
  list: TAccountData[]
}

export type TInput = {
  labelFor: string
  inputLabel: string
  inputType: string
  className?: string
  defaultValue?: number
}
