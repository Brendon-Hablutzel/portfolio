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
    name: 'NCSU Library Busyness',
    url: 'https://lib-occupancy.brendonhab.com',
    description:
      'An application that records real-time data about how many people are in the libraries at NC State and uses that data to predict future occupancy',
    type: 'project',
    tags: ['TypeScript', 'React', 'AWS', 'Python'],
  },
  {
    name: 'Seg UI',
    url: 'https://seg-ui.brendonhab.com',
    description: 'TODO: description',
    type: 'project',
    tags: ['TypeScript', 'Next.js', 'React', 'AWS'],
  },
  {
    name: 'Full Stack Software Engineering Intern @ Epic Hire',
    dateRange: 'Jan 2025 - May 2025',
    url: 'https://epichire.com',
    description: 'TODO: a description of my work at Epic Hire',
    type: 'experience',
    tags: ['TypeScript', 'Next.js', 'React', 'Java', 'Spring Boot'],
  },
  {
    name: 'President of NC State App Development Club',
    dateRange: 'Fall 2025 - present',
    url: 'https://appdevncsu.notion.site',
    description: 'TODO: description',
    type: 'other',
    tags: ['TypeScript', 'React Native'],
  },
]

export const tags = ['React', 'TypeScript']
