import { JSX } from 'react'
import GitHub from './svg/GitHub'
import LinkedIn from './svg/LinkedIn'

export const fullName = 'My Name'

export interface Position {
  name: string
  url?: string
}

export const currentPositions: Position[] = [
  {
    name: 'A position',
    url: 'https://google.com',
  },
  {
    name: 'Another position',
  },
]

export type SocialType = 'GitHub' | 'LinkedIn'

export interface Social {
  type: SocialType
  url: string
  iconComponent: JSX.Element
}

export const socials: Social[] = [
  {
    type: 'GitHub',
    url: 'https://github.com',
    iconComponent: <GitHub />,
  },
  {
    type: 'LinkedIn',
    url: 'https://linkedin.com',
    iconComponent: <LinkedIn />,
  },
]

export type WorkType = 'project' | 'experience' | 'other'

export interface Work {
  name: string
  dateRange?: string
  url: string
  description: string
  type: WorkType
  tags: string[]
}

export const works: Work[] = [
  {
    name: 'My project',
    url: 'https://cloudflare.com',
    description: 'An application I created',
    type: 'project',
    tags: ['Tech A', 'Tech B'],
  },
  {
    name: 'My experience',
    dateRange: 'Jan 2025 - May 2025',
    url: 'https://apple.com',
    description: 'A place I worked',
    type: 'experience',
    tags: ['Tech B', 'Tech C'],
  },
  {
    name: 'My other position',
    url: 'https://stackoverflow.com',
    description: 'Something else I was involved in',
    type: 'other',
    tags: ['Tech C', 'Tech A'],
  },
]

export const tags = ['Tech A', 'Tech B', 'Tech C']
