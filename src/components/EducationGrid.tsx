import { Education } from '@/common/types'
import { SanityDocument } from 'next-sanity'

import EducationCard from './EducationCard'

interface EducationGridProps {
  data: PromiseSettledResult<SanityDocument[]>
}

const EducationGrid = ({ data }: EducationGridProps) => {
  if (data.status !== 'fulfilled') return null

  return (
    <div className="space-y-6">
      {data.value.map(education => (
        <EducationCard key={education._id} {...(education as unknown as Education)} />
      ))}
    </div>
  )
}

export default EducationGrid
