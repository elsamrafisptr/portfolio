'use client'

import Image from 'next/image'

import { Blog } from '@/common/types'
import { motion } from 'motion/react'

const BlogCard = (props: Blog) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="group cursor-pointer space-y-6"
    >
      <div className="relative aspect-video overflow-hidden rounded bg-[#f5f5f7] p-6">
        <div className="relative h-full w-full overflow-hidden rounded transition-transform duration-500 group-hover:scale-[1.02]">
          <Image
            src={props.image}
            alt={props.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex items-start justify-between px-4">
        <div className="space-y-1">
          <h3 className="font-display text-lg font-semibold tracking-tight text-black">
            {props.title}
          </h3>
          <p className="text-sm font-medium text-black/40">{props.detail}</p>
        </div>
        <div className="text-sm font-medium text-black/20 tabular-nums">
          {props.date}
        </div>
      </div>
    </motion.div>
  )
}

export default BlogCard
