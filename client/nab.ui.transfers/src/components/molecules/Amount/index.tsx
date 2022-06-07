import * as React from 'react'

import { Input } from '../../atoms/Input'

import { LocaleCtx } from '../../../context/LocaleStore'

export function Amount(): JSX.Element {
  const Locale = React.useContext(LocaleCtx)

  return (
    <>
      <Input
        className="list__amount list__amount--margin"
        inputType="number"
        labelFor="amount"
        inputLabel={Locale.AMOUNT_LABEL}
        defaultValue={0.0}
      />
    </>
  )
}
