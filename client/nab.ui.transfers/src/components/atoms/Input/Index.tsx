import * as React from 'react'

import { useManageStore } from '../../../context/ManageStore'

import { TInput } from '../../../typeDefs/types'

export function Input({
  labelFor,
  inputLabel,
  inputType,
  className,
  defaultValue
}: TInput): JSX.Element {
  const { dispatchers } = useManageStore()

  const saveAmount = (e: React.SyntheticEvent) => {
    const target = e.target as typeof e.target & {
      valueAsNumber: number
    }
    dispatchers.AMOUNT(target.valueAsNumber)
  }

  return (
    <>
      <label className="list__label" htmlFor={labelFor}>
        {inputLabel}
      </label>
      <div className="list__amount-container">
        <p>&#x20B9;</p>
        <input
          className={`list__input ${className}`}
          onBlur={saveAmount}
          type={inputType}
          defaultValue={defaultValue}
          id={labelFor}
          name={labelFor}
        />
      </div>
    </>
  )
}
