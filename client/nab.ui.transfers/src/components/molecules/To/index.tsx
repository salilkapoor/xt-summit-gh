import * as React from 'react'

import { DataList } from '../../atoms/Datalist'

import { useManageStore } from '../../../context/ManageStore'
import { LocaleCtx } from '../../../context/LocaleStore'

import { TTo, TAccountData } from '../../../typeDefs/types'

export function To({ list }: TTo): JSX.Element {
  const { state, dispatchers } = useManageStore()
  const [filteredList, setFilteredList] = React.useState(null)
  const Locale = React.useContext(LocaleCtx)

  React.useEffect(() => {
    setFilteredList(list.filter((l) => l.accountNumber !== state?.from))
  }, [list, state.from])

  return (
    <DataList
      inputLabel={Locale.TO_LABEL}
      listFor="to-accounts"
      selectedAccount={dispatchers.TO}
      listName="to-accounts-list"
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
