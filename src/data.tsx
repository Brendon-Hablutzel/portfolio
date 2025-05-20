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
    name: 'CS @ NC State',
    url: 'https://csc.ncsu.edu',
  },
  {
    name: 'SWE Intern @ Lucid',
    url: 'https://lucid.co',
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
      'An AWS serverless-based system that captures real-time occupancy data for the libraries at NC State, uses that to predict future occupancy, and displays all this data with a React frontend',
    type: 'project',
    tags: ['AWS', 'TypeScript', 'React', 'Python', 'Tailwindcss'],
  },
  {
    name: 'Seg UI',
    url: 'https://seg-ui.brendonhab.com/',
    description:
      'A full-stack web app that allows users to upload images and have them processed using one of several transformation or analysis modules',
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
      'Used Python to create an application that fetches data from various sources, generates images to summarize that data, and displays it on an E-ink display via a Raspberry Pi',
    type: 'project',
    tags: ['Python'],
  },
  {
    name: 'Argus',
    url: 'https://chromewebstore.google.com/detail/argus/cimaimabdfdmmmoncbjoolchanmmellc',
    description:
      "An event-driven system that ingests data about the user's online habits via a Chrome extension, processes that data with Kafka, stores it in Timescale, and allows the user to view insights about their screen time at a website level via a frontend dashboard",
    type: 'project',
    tags: ['Scala', 'React', 'TypeScript', 'Docker'],
  },
  {
    name: 'Hermes',
    url: 'https://github.com/Brendon-Hablutzel/hermes',
    description:
      'A system for real-time infrastructure resource monitoring that includes a live dashboard and integration with Prometheus and Grafana—deployed on Kubernetes',
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
      'Helped lead a team of 15 to build a geoguessr-inspired mobile game for locations at NC State',
    type: 'project',
    tags: ['TypeScript', 'React Native', 'AWS'],
  },
  {
    name: 'Rust Crate for Sonos Speakers',
    url: 'https://crates.io/crates/rusty-sonos',
    description:
      'Created and published a Rust crate that allows users to directly interact with Sonos speakers via the API they expose to the local network',
    type: 'project',
    tags: ['Rust'],
  },
  {
    name: 'Rust Crate for wit.ai',
    url: 'https://crates.io/crates/wit_ai_rs',
    description:
      'Created and published a Rust crate that provides access to the API for wit.ai, a cloud-based NLP service by Meta',
    type: 'project',
    tags: ['Rust'],
  },
  {
    name: 'Python Library for NC State Courses',
    url: 'https://pypi.org/project/ncsu-courses/',
    description:
      "Created and published a Python library that parses NC State's website to provide data about current and past course offerings",
    type: 'project',
    tags: ['Python'],
  },
  // experiences
  {
    name: 'SWE Intern @ Lucid',
    dateRange: 'May 2025 - Present',
    url: 'https://lucid.co',
    description:
      'Will be working as a software engineering intern at Lucid Software during Summer 2025',
    type: 'experience',
    tags: [],
  },
  {
    name: 'Fullstack Software Engineering Intern @ Epic Hire',
    dateRange: 'Jan 2025 - Apr 2025',
    url: 'https://epichire.com',
    description:
      'Used a variety of frontend and backend technologies to build user-facing features for 10,000+ students and employers',
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
      'Contributed to an ongoing education-related research project by using Python to analyze student data, and improved the efficiency of the streaming-based Python backend',
    type: 'experience',
    tags: ['Python'],
  },
  // others
  {
    name: 'President of NC State App Development Club',
    url: 'https://appdevncsu.notion.site/',
    description:
      'Currently the president of the mobile app development club at NC State',
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
