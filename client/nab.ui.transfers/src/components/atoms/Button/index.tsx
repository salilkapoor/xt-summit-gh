import * as React from 'react'

import { TButton } from '../../../typeDefs/types'

import './styles.scss'

export function Button({
  ctaType,
  clickHandler,
  children
}: TButton): JSX.Element {
  return (
    <button
      data-cta-type={ctaType}
      className="transfer__cta"
      type="button"
      onClick={clickHandler}
    >
      {children}
    </button>
  )
}
