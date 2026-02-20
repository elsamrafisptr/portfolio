import { Experience } from '@/common/types'
import { SanityDocument } from 'next-sanity'

import ExperienceCard from './ExperienceCard'

interface ExperienceGridProps {
  data: PromiseSettledResult<SanityDocument[]>
}

const ExperienceGrid = ({ data }: ExperienceGridProps) => {
  if (data.status !== 'fulfilled') return null

  return (
    <div className="space-y-6">
      {data.value.map(experience => (
        <ExperienceCard
          key={experience._id}
          {...(experience as unknown as Experience)}
        />
      ))}
    </div>
  )
}

export default ExperienceGrid
