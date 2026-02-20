import { Project } from '@/common/types'
import { SanityDocument } from 'next-sanity'

import ProjectCard from './ProjectCard'

interface ProjectGridProps {
  data: PromiseSettledResult<SanityDocument[]>
}

const ProjectGrid = ({ data }: ProjectGridProps) => {
  if (data.status !== 'fulfilled') return null

  return (
    <div className="space-y-12">
      {data.value.map(project => (
        <ProjectCard key={project._id} {...(project as unknown as Project)} />
      ))}
    </div>
  )
}

export default ProjectGrid
