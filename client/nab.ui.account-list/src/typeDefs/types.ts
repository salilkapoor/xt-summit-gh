export type TButton = {
  clickHandler?(event: React.MouseEvent<HTMLButtonElement>): void
  children: string
  ctaType?: string
}

export type TAccountData = {
  accountNumber: number
  accountType: string
  balance: number
  businessEntity: string
  className?: string
}

export type Tlist = {
  list: TAccountData[]
}

export type TAccount = {
  account: TAccountData
}
