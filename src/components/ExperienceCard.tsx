'use client'

import Image from 'next/image'

import { Experience } from '@/common/types'
import { motion } from 'motion/react'

import { urlFor } from '@/lib/utils'

const ExperienceCard = (props: Experience) => {
  const ImageUrl =
    props.image &&
    urlFor(props.image)?.width(480).height(480).auto('format').quality(80).url()

  if (!ImageUrl) return null

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="group h-full cursor-pointer"
    >
      <div className="relative flex h-full items-center gap-4 rounded">
        <Image
          src={ImageUrl}
          alt={props.role}
          width={1024}
          height={1024}
          className="aspect-square h-12 w-12 rounded object-cover"
        />
        <div className="flex h-full flex-col gap-1">
          <h1 className="text-sm leading-none font-medium text-black/40">
            {props.company}
          </h1>
          <h2 className="font-display text-lg leading-none font-semibold tracking-tight text-black">
            {props.role}
          </h2>
        </div>
      </div>
    </motion.div>
  )
}

export default ExperienceCard
