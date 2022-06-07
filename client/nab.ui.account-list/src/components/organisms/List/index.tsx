import * as React from 'react'

import { Tile } from '../../molecules/Tile'

import { Tlist, TAccountData } from '../../../typeDefs/types'

export function List({ list }: Tlist): JSX.Element {
  return (
    <>
      {list.map((account: TAccountData) => (
        <Tile key={account.accountNumber} account={account} />
      ))}
    </>
  )
}
