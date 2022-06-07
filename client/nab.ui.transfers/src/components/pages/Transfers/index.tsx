import * as React from 'react'

import { Widget } from '../../organisms/Widget'

import useFetch from '../../../hooks/useFetch'
import { LocaleStore } from '../../../context/LocaleStore'
import { LocaleCtx } from '../../../context/LocaleStore'
import { SERVICE_URL } from '../../../config'

import { IAccounts } from '../../../typeDefs/Interfaces'
import { Tlist } from '../../../typeDefs/types'

import { GET_ACCOUNTS } from '../../../graphql'

import '../../../styles/base.scss'
import './styles.scss'

function Transfers({ list }: Tlist): JSX.Element {
  const Locale = React.useContext(LocaleCtx)
  return (
    <>
      <h2 className="transfers-section__header">{Locale.TRANSFERS_TITLE}</h2>
      <Widget list={list} />
    </>
  )
}

const App: React.FC = () => {
  const { error, data } = useFetch<IAccounts>(SERVICE_URL.GET_ACCOUNTS, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({ query: GET_ACCOUNTS })
  })

  if (error) {
    return <p>Error occured in Component</p>
  }
  if (!data) return <p>Loading...</p>

  return (
    <LocaleStore>
      <Transfers list={data.data.getAccounts} />
    </LocaleStore>
  )
}

export default App
