import * as React from 'react'

import { Button } from '../../atoms/Button'

import {
  IAccountTile,
  IAccountHeader,
  IAccountBody
} from '../../../typeDefs/Interfaces'

import { LocaleCtx } from '../../../context/LocaleStore'

import './styles.scss'

export function AccountTile({
  className,
  children
}: IAccountTile): JSX.Element {
  return (
    <div className={`highlighted-tile highlighted-tile--${className}`}>
      <div className="account-tile">{children}</div>
    </div>
  )
}

function _Header({ children }: IAccountHeader): JSX.Element {
  return <div className="account-tile__header">{children}</div>
}

function _Body({ children }: IAccountBody): JSX.Element {
  return <div className="account-tile__body">{children}</div>
}

function _Footer(): JSX.Element {
  const Locale = React.useContext(LocaleCtx)
  const viewStatement = (e: React.SyntheticEvent) => {
    e.stopPropagation()
    const ACTIONS = {
      Manage: 'Manage',
      Payments: 'Payments',
      Statements: 'Statements'
    }
    const target = e.target as typeof e.target & {
      dataset: { ctaType: string }
    }
    console.log(`${ACTIONS[target.dataset.ctaType]} is clicked`)
  }

  return (
    <div className="account-tile__footer" onClick={viewStatement}>
      <Button ctaType="Statements">{Locale.VIEW_STATEMENTS_TEXT}</Button>
      <Button ctaType="Manage">{Locale.MANAGE_TEXT}</Button>
      <Button ctaType="Payments">{Locale.PAYMENT_TEXT}</Button>
    </div>
  )
}

AccountTile.Header = _Header
AccountTile.Body = _Body
AccountTile.Footer = _Footer
