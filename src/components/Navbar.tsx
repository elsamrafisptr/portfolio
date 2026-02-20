'use client'

import Link from 'next/link'

import { motion } from 'motion/react'

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-6 left-1/2 z-50 w-full max-w-xl -translate-x-1/2 px-4"
    >
      <nav className="flex items-center justify-between rounded-full border border-black/5 bg-white/70 px-6 py-3 shadow-sm backdrop-blur-md">
        <Link href="/" className="font-display text-xl font-semibold tracking-tight">
          Portfolio
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="#work"
            className="text-sm font-medium text-black/60 transition-colors hover:text-black"
          >
            Work
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium text-black/60 transition-colors hover:text-black"
          >
            About
          </Link>
          <Link
            href="mailto:hello@example.com"
            className="rounded-full bg-black px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-black/80"
          >
            Hire Me
          </Link>
        </div>
      </nav>
    </motion.header>
  )
}

export default Navbar
