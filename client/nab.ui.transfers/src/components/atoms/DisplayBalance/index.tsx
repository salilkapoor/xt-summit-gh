import * as React from 'react'

import { LocaleCtx } from '../../../context/LocaleStore'

type IDisplayBalance = {
  children: string
}

export function DisplayBalance({ children }: IDisplayBalance): JSX.Element {
  const Locale = React.useContext(LocaleCtx)

  return (
    <p className="list__displayBalance">
      <em>{children ?? Locale.EMPTY_ACCOUNT}</em>
    </p>
  )
}
