import * as React from 'react'

import { Skeleton } from '../../atoms/skeleton'

export const Zone: React.FC = () => (
  <section>
    <h2 className="dashboard__main__zone">Offers and Personalization</h2>
    <Skeleton className="base">Placeholder 1</Skeleton>
    <Skeleton className="base">Placeholder 2</Skeleton>
  </section>
)
