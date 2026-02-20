import { Client, MainSection, Profile } from '@/common/types'
import { client } from '@/sanity/client'
import { SanityDocument } from 'next-sanity'

import Hero from '@/components/Hero'
import SectionAccordion from '@/components/SectionAccordion'

const PROFILE_QUERY = `*[_type == "profile" && defined(_id)]|order(_createdAt asc)[0...12]{_id, avatar, name, description, email}`
const CLIENTS_QUERY = `*[_type == "client" && defined(_id)]|order(_createdAt asc)[0...12]{_id, avatar, name}`
const EXPERIENCES_QUERY = `*[_type == "experience" && defined(slug.current)]|order(_createdAt asc)[0...12]{_id, company, role, image, slug}`
const PROJECTS_QUERY = `*[_type == "project" && defined(slug.current)]|order(_createdAt asc)[0...12]`
const EDUCATIONS_QUERY = `*[_type == "education" && defined(slug.current)]|order(_createdAt asc)[0...12]{_id, institution, degree, image, slug}`
const ORGANIZATIONS_QUERY = `*[_type == "organization" && defined(slug.current)]|order(_createdAt asc)[0...12]{_id, organization, role, image, slug}`
const BLOGS_QUERY = `*[_type == "blog" && defined(slug.current)]|order(_createdAt asc)[0...12]`

const options = { next: { revalidate: 30 } }

export default async function Home() {
  const [profile, clients, experiences, projects, educations, organizations, blogs] =
    await Promise.allSettled([
      client.fetch<SanityDocument[]>(PROFILE_QUERY, {}, options),
      client.fetch<SanityDocument[]>(CLIENTS_QUERY, {}, options),
      client.fetch<SanityDocument[]>(EXPERIENCES_QUERY, {}, options),
      client.fetch<SanityDocument[]>(PROJECTS_QUERY, {}, options),
      client.fetch<SanityDocument[]>(EDUCATIONS_QUERY, {}, options),
      client.fetch<SanityDocument[]>(ORGANIZATIONS_QUERY, {}, options),
      client.fetch<SanityDocument[]>(BLOGS_QUERY, {}, options)
    ])

  const profileData =
    profile.status === 'fulfilled' && profile.value.length > 0
      ? (profile.value[0] as unknown as Profile)
      : null
  const clientsData =
    clients.status === 'fulfilled' && clients.value.length > 0
      ? (clients.value as unknown as Client[])
      : []

  const data: MainSection[] = [
    {
      id: 'experiences',
      title: 'Experiences',
      content: experiences
    },
    {
      id: 'projects',
      title: 'Projects',
      content: projects
    },
    {
      id: 'education',
      title: 'Education',
      content: educations
    },
    {
      id: 'organizations',
      title: 'Organizations',
      content: organizations
    },
    {
      id: 'blogs',
      title: 'Blogs',
      content: blogs
    }
  ]

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <div className="flex min-h-screen max-w-full flex-col md:grid md:h-screen md:grid-cols-12 md:overflow-hidden">
        <aside className="flex flex-col justify-end p-4 md:p-6 md:col-span-4 md:h-screen">
          <Hero profile={profileData} clients={clientsData} />
        </aside>

        <div className="scrollbar-hide flex-1 p-4 md:col-span-8 md:overflow-y-auto md:p-6">
          <SectionAccordion data={data} />

          <footer className="py-12 text-center">
            <p className="text-sm font-medium tracking-tight text-black/20">
              © {new Date().getFullYear()} Elsam Rafi Saputra.
            </p>
          </footer>
        </div>
      </div>
    </main>
  )
}
