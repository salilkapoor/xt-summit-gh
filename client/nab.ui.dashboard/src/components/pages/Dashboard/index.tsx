import React, { Suspense } from 'react'

import { Skeleton } from '../../atoms/skeleton'
import { Zone } from '../../molecules/zone'
import { GlobalMessage } from '../../atoms/GlobalMessage'

import '../../../styles/base.scss'
import './styles.scss'

const AccountList = React.lazy(() => import('accountlist/Accountlist'))
const Transfers = React.lazy(() => import('transfers/Transfer'))

export const Dashboard: React.FC = () => {
  return (
    <>
      <Skeleton className="header">Header</Skeleton>
      <main className="dashboard__main">
        <GlobalMessage />
        <h1 className="dashboard__main__header">Raam's Dashboard</h1>
        <section className="dashboard__main-content">
          <section>
            <Suspense fallback="loading...">
              <AccountList />
            </Suspense>
          </section>
          <Zone />
          <section>
            <Suspense fallback="loading...">
              <Transfers />
            </Suspense>
          </section>
        </section>
      </main>
      <Skeleton className="footer">Footer</Skeleton>
    </>
  )
}
