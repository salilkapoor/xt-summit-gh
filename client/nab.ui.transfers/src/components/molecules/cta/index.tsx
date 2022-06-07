import * as React from 'react'

import { Button } from '../../atoms/Button'
import { LocaleCtx } from '../../../context/LocaleStore'

import { useManageStore } from '../../../context/ManageStore'
import { fetchWrapper } from '../../../utils'

import { SERVICE_URL } from '../../../config'

export function CTA(): JSX.Element {
  const Locale = React.useContext(LocaleCtx)
  const { state } = useManageStore()

  const transferHandler = () => {
    const amount = state.amount
    const from = state.from
    const to = state.to

    fetchWrapper(SERVICE_URL.TRANSFER, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ amount, to, from })
    })
  }

  return <Button clickHandler={transferHandler}>{Locale.TRANSFER_TEXT}</Button>
}
