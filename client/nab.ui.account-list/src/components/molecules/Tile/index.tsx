import * as React from 'react'

import { AccountTile } from '../../molecules/Accounttile'
import { TAccount } from '../../../typeDefs/types'

import { currencyFormatter, accountNumberFormatter } from '../../../utils'

export function Tile({ account }: TAccount): JSX.Element {
  return (
    <AccountTile className={account.className}>
      <AccountTile.Header>
        <h3 className="account-tile__header__type">{account.accountType}</h3>
        <h4 className="account-tile__header__entity">
          <em>{account.businessEntity}</em>
        </h4>
      </AccountTile.Header>
      <AccountTile.Body>
        <p className="account-tile__body__number">
          {accountNumberFormatter(account.accountNumber)}
        </p>
        <p className="account-tile__body__balance">
          {currencyFormatter(account.balance)}
        </p>
      </AccountTile.Body>
      <AccountTile.Footer />
    </AccountTile>
  )
}
