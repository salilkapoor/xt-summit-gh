import * as React from 'react'

import { DataList } from '../../atoms/Datalist'

import { LocaleCtx } from '../../../context/LocaleStore'
import { useManageStore } from '../../../context/ManageStore'

import { TFrom, TAccountData } from '../../../typeDefs/types'

export function From({ list }: TFrom): JSX.Element {
  const Locale = React.useContext(LocaleCtx)
  const { state, dispatchers } = useManageStore()
  const [filteredList, setFilteredList] = React.useState(null)

  React.useEffect(() => {
    setFilteredList(list.filter((l) => l.accountNumber !== state?.to))
  }, [list, state.to])

  return (
    <DataList
      inputLabel={Locale.FROM_LABEL}
      listFor="from-accounts"
      selectedAccount={dispatchers.FROM}
      listName="from-accounts-list"
    >
      {filteredList?.map((l: TAccountData) => (
        <DataList.Option
          key={l.accountNumber}
          value={l.accountNumber}
        >{`${l.accountType} ...${l.accountNumber}`}</DataList.Option>
      ))}
    </DataList>
  )
}
