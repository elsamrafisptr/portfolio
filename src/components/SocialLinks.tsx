'use client'

import { Social } from '@/common/types'
import { motion } from 'motion/react'

const SocialLinks = ({ socials }: { socials: Social[] }) => {
  return (
    <div className="flex items-center gap-2">
      {socials.map(social => (
        <motion.a
          key={social.name}
          href={social.href}
          target="_blank"
          aria-label={`Contact me on ${social.name}`}
          className={`${social.color} flex h-10 w-10 items-center justify-center rounded text-sm font-bold text-white`}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  )
}

export default SocialLinks
