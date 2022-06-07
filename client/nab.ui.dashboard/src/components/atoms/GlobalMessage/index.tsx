import * as React from 'react'

import { register } from '../../../PageController'

import './styles.scss'

export const GlobalMessage: React.FC = () => {
  const [showMessage, setShowMessage] = React.useState({ show: false })

  React.useEffect(() => {
    register(
      'TRANSFER_INITIATE',
      (data: { amount: number; to: number; from: number }) => {
        setShowMessage({ ...data, show: true })
      }
    )
  }, [])

  React.useEffect(() => {
    let timerID = null
    if (showMessage.show) {
      timerID = setTimeout(() => {
        setShowMessage((prevState) => {
          window?.['NABdashboard']
            .publish()
            .emit('ACCOUNTLIST_UPDATE', prevState)
          return { ...prevState, show: false }
        })
      }, 2000)
    }
    return () => clearTimeout(timerID)
  }, [showMessage.show])

  return (
    <>
      {showMessage.show ? (
        <div className="global-message">
          <h2>Transfer Request</h2>
          <p>
            Transfer has been iniated, it while be completed in a while. Watch
            out for for <mark className="from">FROM</mark> and{' '}
            <mark className="to">TO</mark> accounts in next frame.
          </p>
        </div>
      ) : null}
    </>
  )
}
