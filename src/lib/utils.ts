import { client } from '@/sanity/client'
import { SanityImageSource, createImageUrlBuilder } from '@sanity/image-url'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

const { projectId, dataset } = client.config()

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? createImageUrlBuilder({ projectId, dataset }).image(source)
    : null
