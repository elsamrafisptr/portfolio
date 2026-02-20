import { Organization } from '@/common/types'
import { SanityDocument } from 'next-sanity'

import OrganizationCard from './OrganizationCard'

interface OrganizationGridProps {
  data: PromiseSettledResult<SanityDocument[]>
}

const OrganizationGrid = ({ data }: OrganizationGridProps) => {
  if (data.status !== 'fulfilled') return null

  return (
    <div className="space-y-6">
      {data.value.map(organization => (
        <OrganizationCard
          key={organization._id}
          {...(organization as unknown as Organization)}
        />
      ))}
    </div>
  )
}

export default OrganizationGrid
