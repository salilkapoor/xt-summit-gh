import * as React from 'react'

import { TSkeleton } from '../../../typeDefs/types'

export const Skeleton: React.FC = ({ className, children }: TSkeleton) => {
  const Tags = {
    header: <header className={className}>{children}</header>,
    footer: <footer className={className}>{children}</footer>,
    base: <section className={className}>{children}</section>
  }
  return Tags[className]
}
