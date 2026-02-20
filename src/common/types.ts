import { SanityDocument } from 'next-sanity'
import { ReactNode } from 'react'

export interface Experience {
  company: string
  description: string
  role: string
  location: string
  period: string
  image: string
  detail: string
}

export interface Project {
  title: string
  description: string
  tags: string[]
  year: string
  image: string
  detail: string
}

export interface Education {
  institution: string
  degree: string
  grade: string
  location: string
  period: string
  image: string
  detail: string
}

export interface Organization {
  organization: string
  sector: string
  role: string
  location: string
  period: string
  image: string
  detail: string
}

export interface Blog {
  title: string
  description: string
  tags: string[]
  date: string
  image: string
  detail: string
}

export interface Social {
  name: string
  color: string
  href: string
  icon: ReactNode
}

export interface Client {
  name: string
  avatar: {
    _type: string
    asset: {
      _ref: string
      _type: string
    }
  }
}

export interface Profile {
  avatar: {
    _type: string
    asset: {
      _ref: string
      _type: string
    }
  }
  name: string
  email: string
  description: string
}

export interface SideData {
  socials: Social[]
}

export interface MainSection {
  id: string
  title: string
  content: PromiseSettledResult<SanityDocument[]>
}

export interface Data {
  side: SideData
}
