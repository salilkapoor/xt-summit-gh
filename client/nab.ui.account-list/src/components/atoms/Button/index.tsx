import * as React from 'react'

import { TButton } from '../../../typeDefs/types'

export function Button({
  ctaType,
  clickHandler,
  children
}: TButton): JSX.Element {
  return (
    <button
      data-cta-type={ctaType}
      className="account-tile__footer__cta"
      type="button"
      onClick={clickHandler}
    >
      {children}
    </button>
  )
}
