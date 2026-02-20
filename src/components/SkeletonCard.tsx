import React from 'react'

import { Skeleton } from './ui/skeleton'

const SkeletonCard = () => {
  return (
    <div className="space-y-6">
      <Skeleton className="aspect-3/1 h-full w-full rounded" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[90%]" />
        <Skeleton className="h-4 w-[80%]" />
      </div>
    </div>
  )
}

export default SkeletonCard
