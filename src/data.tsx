import { JSX } from 'react'
import GitHub from './svg/GitHub'
import LinkedIn from './svg/LinkedIn'

export const fullName = 'Brendon Hablutzel'

export interface Position {
  name: string
  url?: string
}

export const currentPositions: Position[] = [
  {
    name: 'SWE @ Lucid',
    url: 'https://lucid.co',
  },
  {
    name: 'CS @ NC State',
    url: 'https://csc.ncsu.edu',
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
    url: 'https://github.com/Brendon-Hablutzel',
    iconComponent: <GitHub />,
  },
  {
    type: 'LinkedIn',
    url: 'https://linkedin.com/in/brendon-hablutzel',
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
  // projects:
  {
    name: 'NC State Library Busyness Tracker',
    url: 'https://lib-occupancy.brendonhab.com/',
    description:
      'Full stack web app for monitoring and predicting occupancy at the NC state libraries',
    type: 'project',
    tags: ['AWS', 'TypeScript', 'React', 'Python', 'Tailwindcss'],
  },
  {
    name: 'Seg UI',
    url: 'https://seg-ui.brendonhab.com/',
    description: 'Full stack web app for general asynchronous image processing',
    type: 'project',
    tags: [
      'AWS',
      'TypeScript',
      'React',
      'Python',
      'Next.js',
      'Tailwindcss',
      'Docker',
    ],
  },
  {
    name: 'Raspberry Pi E-Ink Dashboard',
    url: 'https://github.com/Brendon-Hablutzel/rpi-eink-dashboard',
    description:
      'Python application that fetches and aggregates data, then renders it on an E-Ink dashboard via a Raspberry Pi',
    type: 'project',
    tags: ['Python'],
  },
  {
    name: 'Argus',
    url: 'https://chromewebstore.google.com/detail/argus/cimaimabdfdmmmoncbjoolchanmmellc',
    description: 'A chrome extension for monitoring website usage',
    type: 'project',
    tags: ['Scala', 'React', 'TypeScript', 'Docker'],
  },
  {
    name: 'Hermes',
    url: 'https://github.com/Brendon-Hablutzel/hermes',
    description: 'Full stack web app for real-time infrastructure monitoring',
    type: 'project',
    tags: [
      'Go',
      'Docker',
      'Kubernetes',
      'TypeScript',
      'React',
      'Next.js',
      'Tailwindcss',
    ],
  },
  {
    name: 'NCSUGuessr',
    url: 'https://github.com/NCSU-App-Development-Club/ncsuguessr',
    description:
      'React Native-based, geoguessr-inspired mobile game for locations at NC State',
    type: 'project',
    tags: ['TypeScript', 'React Native', 'AWS'],
  },
  {
    name: 'Rust Crate for Sonos Speakers',
    url: 'https://crates.io/crates/rusty-sonos',
    description:
      'Rust crate that allows users to directly interact with Sonos speakers via the API they expose to the local network',
    type: 'project',
    tags: ['Rust'],
  },
  {
    name: 'Rust Crate for wit.ai',
    url: 'https://crates.io/crates/wit_ai_rs',
    description:
      'Rust crate that provides access to the API for wit.ai, a cloud-based NLP service by Meta',
    type: 'project',
    tags: ['Rust'],
  },
  {
    name: 'Python Library for NC State Courses',
    url: 'https://pypi.org/project/ncsu-courses/',
    description:
      "Python library that scrapes NC State's website to provide data about current and past course offerings",
    type: 'project',
    tags: ['Python'],
  },
  // experiences
  {
    name: 'Part-time SWE I @ Lucid',
    dateRange: 'August 2025 - Present',
    url: 'https://lucid.co',
    description: 'Cleaning up more tech debt on the backend',
    type: 'experience',
    tags: ['Scala'],
  },
  {
    name: 'SWE Intern @ Lucid',
    dateRange: 'May 2025 - August 2025',
    url: 'https://lucid.co',
    description: 'Worked on cleaning up tech debt on the backend',
    type: 'experience',
    tags: ['Scala'],
  },
  {
    name: 'Fullstack Software Engineering Intern @ Epic Hire',
    dateRange: 'Jan 2025 - Apr 2025',
    url: 'https://epichire.com',
    description: 'Worked across the stack to develop user-facing features',
    type: 'experience',
    tags: ['TypeScript', 'React', 'Next.js', 'Java', 'Spring Boot'],
  },
  {
    name: 'Backend Software Engineering Intern @ Carpool.School',
    dateRange: 'May 2024 - Aug 2024',
    url: 'https://carpool.school',
    description:
      'Worked with AWS backend infrastructure to build out analytics and billing features',
    type: 'experience',
    tags: ['AWS', 'TypeScript'],
  },
  {
    name: 'Software Development Researcher @ NC State ArgLab',
    dateRange: 'Jan 2024 - Dec 2024',
    url: 'https://research.csc.ncsu.edu/arglab/',
    description:
      'Worked on improving performance for the Python backend for a real-time system',
    type: 'experience',
    tags: ['Python'],
  },
  // others
  {
    name: 'President of NC State App Development Club',
    url: 'https://appdevncsu.notion.site/',
    description:
      'Plan meetings, perform administrative tasks, faciliate deployment of apps by setting up and maintaining infrastructure',
    type: 'other',
    tags: ['TypeScript', 'React Native'],
  },
]

export const tags = [
  'TypeScript',
  'React',
  'Python',
  'AWS',
  'Go',
  'Rust',
  'Scala',
  'React Native',
  'Next.js',
  'Tailwindcss',
  'Kubernetes',
  'Docker',
  'Java',
  'Spring Boot',
]
