import { Blog } from '@/common/types'
import { SanityDocument } from 'next-sanity'

import BlogCard from './BlogCard'

interface BlogGridProps {
  data: PromiseSettledResult<SanityDocument[]>
}

const BlogGrid = ({ data }: BlogGridProps) => {
  if (data.status !== 'fulfilled') return null

  return (
    <div className="space-y-12">
      {data.value.map(blog => (
        <BlogCard key={blog._id} {...(blog as unknown as Blog)} />
      ))}
    </div>
  )
}

export default BlogGrid
