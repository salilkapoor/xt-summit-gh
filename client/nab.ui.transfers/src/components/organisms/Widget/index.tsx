import * as React from 'react'

import { From } from '../../molecules/From'
import { To } from '../../molecules/To'
import { Amount } from '../../molecules/Amount'
import { CTA } from '../../molecules/cta'

import { ManageStore } from '../../../context/ManageStore'

import { Tlist } from '../../../typeDefs/types'

import './styles.scss'

export function Widget({ list }: Tlist): JSX.Element {
  return (
    <ManageStore>
      <div className="transfer-widget">
        <From list={list} />
        <To list={list} />
        <Amount />
        <CTA />
      </div>
    </ManageStore>
  )
}
