import * as React from 'react'

import { List } from '../../organisms/List'
import { LocaleStore } from '../../../context/LocaleStore'

import { LocaleCtx } from '../../../context/LocaleStore'

import useFetch from '../../../hooks/useFetch'
import { SERVICE_URL } from '../../../config'

import { Tlist } from '../../../typeDefs/types'
import { IAccounts } from '../../../typeDefs/Interfaces'

import { GET_ACCOUNTS } from '../../../graphql'

import '../../../styles/base.scss'
import './styles.scss'

function AccountList({ list }: Tlist): JSX.Element {
  const [accountList, setAccountList] = React.useState(() => list)
  const Locale = React.useContext(LocaleCtx)

  React.useEffect(() => {
    if (window?.['NABdashboard']) {
      window?.['NABdashboard'].register(
        'ACCOUNTLIST_UPDATE',
        (data: { amount: number; to: number; from: number }) => {
          setAccountList((prevList) => {
            return prevList.map((list) => {
              if (list.accountNumber === data.from) {
                list.balance = list.balance - data.amount
                list.className = 'from'
              }
              if (list.accountNumber === data.to) {
                list.balance = list.balance + data.amount
                list.className = 'to'
              }
              return list
            })
          })
        }
      )
    }
  }, [])
  return (
    <>
      <h2 className="accounts-section__header">{Locale.ACCOUNT_LIST_TITLE}</h2>
      <List list={accountList} />
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
  if (data) {
    return (
      <LocaleStore>
        <AccountList list={data.data.getAccounts} />
      </LocaleStore>
    )
  }
}

export default App
