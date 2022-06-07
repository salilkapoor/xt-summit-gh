import * as React from 'react'

import { DisplayBalance } from '../../atoms/DisplayBalance'
import { TDataList, TOptions } from '../../../typeDefs/types'

import './styles.scss'

export function DataList({
  inputLabel,
  listFor,
  listName,
  selectedAccount,
  children
}: TDataList): JSX.Element {
  const valueRef = React.useRef(null)
  const changeHandler = (
    e: React.ChangeEvent<
      HTMLInputElement & { value: string; list: { options: Array<string> } }
    >
  ): void => {
    selectedAccount(+e.target.value)

    const opt = [].find.call(
      e.target.list.options,
      (o) => o.value === e.target.value
    )

    if (opt) {
      valueRef.current.listValue = opt.textContent
    }
  }

  return (
    <>
      <label className="list__label" htmlFor={listFor}>
        {inputLabel}
      </label>
      <input
        className="list__input"
        list={listName}
        id={listFor}
        name={listFor}
        ref={valueRef}
        onChange={changeHandler}
      />
      <datalist id={listName}>{children}</datalist>
      <DisplayBalance>{valueRef.current?.listValue}</DisplayBalance>
    </>
  )
}

DataList.Option = function Option({ value, children }: TOptions) {
  return <option value={value}>{children}</option>
}
