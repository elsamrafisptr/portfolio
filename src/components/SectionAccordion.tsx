'use client'

import { MainSection } from '@/common/types'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

import BlogGrid from './BlogGrid'
import EducationGrid from './EducationGrid'
import ExperienceGrid from './ExperienceGrid'
import NoData from './NoData'
import OrganizationGrid from './OrganizationGrid'
import ProjectGrid from './ProjectGrid'
import SkeletonCard from './SkeletonCard'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

const SectionAccordion = ({ data }: { data: MainSection[] }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      {data.map(section => (
        <AccordionItem key={section.id} value={section.id} className="border-none">
          <AccordionTrigger className="group cursor-pointer rounded border-2 border-black/5 bg-white p-4 transition-all hover:bg-black/1 hover:no-underline md:p-6">
            <span className="font-display text-2xl font-bold tracking-tight text-black">
              {section.title}
            </span>
          </AccordionTrigger>
          <AccordionContent className="p-0">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="mt-2 h-auto w-full cursor-pointer rounded border-2 border-black/5 bg-white p-4 md:p-6"
            >
              {isLoading ? (
                <SkeletonCard />
              ) : section.content &&
                section.content.status === 'fulfilled' &&
                section.content.value.length > 0 ? (
                <>
                  {section.id === 'projects' && <ProjectGrid data={section.content} />}
                  {section.id === 'experiences' && (
                    <ExperienceGrid data={section.content} />
                  )}
                  {section.id === 'education' && (
                    <EducationGrid data={section.content} />
                  )}
                  {section.id === 'organizations' && (
                    <OrganizationGrid data={section.content} />
                  )}
                  {section.id === 'blogs' && <BlogGrid data={section.content} />}
                </>
              ) : (
                <NoData />
              )}
            </motion.div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default SectionAccordion
