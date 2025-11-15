import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import {
  fullName,
  socials,
  tags,
  Work,
  works,
  WorkType,
  workTypes,
} from '../data'
import { Link } from 'react-router'
import useWindowSize from '../hooks/useWindowSize'
import useScrollPosition from '../hooks/useScrollPosition'
import { useDebounce } from 'use-debounce'
import { useSearchParams } from 'react-router'

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { delay: 0.1, duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

const WorkComponent = ({ work }: { work: Work }) => {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <h2 className={`font-medium text-2xl ${work.dateRange ? 'mb-1' : ''}`}>
          <a href={work.url} target="_blank" className="hover:underline">
            {work.name}
          </a>
        </h2>
        {work.dateRange ? (
          <h3 className="text-sm text-gray-500">{work.dateRange}</h3>
        ) : null}
      </div>
      {/* TODO: perhaps tracking-wide */}
      <h3 className="text-gray-600">{work.description}</h3>
      <div className="flex justify-start gap-2 overflow-x-scroll max-w-full pb-2">
        {work.tags.map((tag, idx) => (
          <div
            key={idx}
            className="whitespace-nowrap text-xs text-green-900 bg-green-200 w-fit py-1 px-2 rounded-xl"
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  )
}

const SEARCH_QUERY_PARAM = 'search'
const TYPE_QUERY_PARAM = 'type'
const TAG_QUERY_PARAM = 'tag'

const WorksComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const updateParams = (updater: (params: URLSearchParams) => void) => {
    const newParams = new URLSearchParams(searchParams)
    updater(newParams)
    newParams.sort()
    setSearchParams(newParams)
  }

  const updateSearchParams = (key: string, value: string) =>
    updateParams((params) => {
      if (value !== '') {
        params.set(key, value)
      } else {
        params.delete(key)
      }
    })

  const setSearchQueryParam = (value: string) =>
    updateSearchParams(SEARCH_QUERY_PARAM, value)

  const setTypeQueryParam = (value: string) =>
    updateSearchParams(TYPE_QUERY_PARAM, value)

  const removeTagQueryParam = (valueToRemove: string) => {
    updateParams((params) => {
      const newTags = params
        .getAll(TAG_QUERY_PARAM)
        .filter((value) => value !== valueToRemove)

      params.delete(TAG_QUERY_PARAM)
      newTags.forEach((tag) => params.append(TAG_QUERY_PARAM, tag))
    })
  }

  const addTagQueryParam = (valueToAdd: string) => {
    updateParams((params) => {
      const existingTags = params.getAll(TAG_QUERY_PARAM)

      if (!existingTags.includes(valueToAdd)) {
        params.append(TAG_QUERY_PARAM, valueToAdd)
      }
    })
  }

  const [searchQuery, setSearchQuery] = useState(
    searchParams.get(SEARCH_QUERY_PARAM) ?? ''
  )
  const [debouncedSearchQuery] = useDebounce(searchQuery, 200)

  const [selectedType, setSelectedType] = useState<WorkType | ''>(() => {
    const typeParam = searchParams.get(TYPE_QUERY_PARAM)
    return typeParam && workTypes.includes(typeParam as WorkType)
      ? (typeParam as WorkType)
      : ''
  })

  const [selectedTags, setSelectedTags] = useState(() => {
    const paramTags = searchParams.getAll(TAG_QUERY_PARAM)
    return Object.fromEntries(tags.map((tag) => [tag, paramTags.includes(tag)]))
  })

  useEffect(() => {
    setSearchQuery(searchParams.get(SEARCH_QUERY_PARAM) ?? '')

    const typeParam = searchParams.get(TYPE_QUERY_PARAM)
    setSelectedType(
      typeParam && workTypes.includes(typeParam as WorkType)
        ? (typeParam as WorkType)
        : ''
    )

    const paramTags = searchParams.getAll(TAG_QUERY_PARAM)
    setSelectedTags(
      Object.fromEntries(tags.map((tag) => [tag, paramTags.includes(tag)]))
    )
  }, [searchParams])

  const selectedTagsSet = useMemo(
    () =>
      new Set(
        Object.entries(selectedTags)
          .filter((entry) => entry[1])
          .map((entry) => entry[0])
      ),
    [selectedTags]
  )

  const selectedWorks = useMemo(() => {
    let selectedWorks = works

    if (selectedType) {
      selectedWorks = selectedWorks.filter((work) => work.type === selectedType)
    }

    // TODO: should selected tags be 'and' or 'or'
    if (selectedTagsSet.size > 0) {
      selectedWorks = selectedWorks.filter(
        (work) => work.tags.filter((tag) => selectedTagsSet.has(tag)).length > 0
      )
    }

    if (debouncedSearchQuery) {
      const normalizedSearchQuery = debouncedSearchQuery.toLowerCase().trim()
      selectedWorks = selectedWorks.filter(
        (work) =>
          work.name.toLowerCase().includes(normalizedSearchQuery) ||
          work.description.toLowerCase().includes(normalizedSearchQuery)
      )
    }

    return selectedWorks
  }, [selectedTagsSet, debouncedSearchQuery, selectedType])

  const { width } = useWindowSize()

  const scrollPositionY = useScrollPosition()

  return (
    <motion.div
      className={`flex flex-col items-center min-h-screen w-full`}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div
        className={`sticky top-0 p-2 px-4 flex justify-between w-full bg-white transition-shadow duration-200 ${scrollPositionY > 0 ? 'shadow-md' : ''}`}
      >
        <div className="flex items-center">
          {/* <a href="/" className="group transition duration-300"> */}
          <Link to="/">
            <h2 className="text-lg font-medium">{fullName}</h2>
            {/* <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span> */}
          </Link>
        </div>
        <div className="flex justify-between gap-2">
          {socials.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              className="text-sm sm:text-base hover:shadow-sm transition-shadow duration-200 select-none text-gray-700 flex items-center gap-2 border-[1px] border-black/20 py-1 px-2 rounded-xl"
            >
              {width > 400 ? social.type : null}
              <div className="w-5 h-5">{social.iconComponent}</div>
            </a>
          ))}
        </div>
      </div>
      <div className="w-[90%] max-w-[800px] mt-5 sm:mt-10">
        <div className="mb-3 bg-white py-4">
          <div className="flex justify-between gap-2 mb-3">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => {
                setSearchQueryParam(e.target.value)
              }}
              className="flex-1 text-base sm:text-lg py-1 px-2 rounded-xl border-[1px] border-black/20 min-w-20"
            />
            <select
              className="text-base sm:text-lg border-[1px] border-black/20 rounded-xl py-1 px-2"
              value={selectedType}
              onChange={(e) => {
                setTypeQueryParam(e.target.value)
              }}
            >
              <option value="">All</option>
              <option value="project">Projects</option>
              <option value="experience">Experience</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="flex justify-start gap-2 overflow-x-scroll pb-5 max-w-full">
            {Object.entries(selectedTags).map((tagEntry, idx) => {
              const [tagId, tagSelected] = tagEntry

              return (
                <label
                  key={idx}
                  className={`text-sm sm:text-base whitespace-nowrap transition duration-150 ease-in-out ${tagSelected ? 'bg-gray-200  ' : ''} hover:cursor-pointer select-none border-[1px] border-black/20 py-0.5 px-2 rounded-xl`}
                >
                  <input
                    type="checkbox"
                    className="hidden"
                    onChange={() => {
                      const currentlySelected =
                        selectedTags[tagId as keyof typeof selectedTags]

                      if (currentlySelected) {
                        removeTagQueryParam(tagId)
                      } else {
                        addTagQueryParam(tagId)
                      }
                    }}
                  />
                  {tagId}
                </label>
              )
            })}
          </div>
        </div>
        <div>
          <AnimatePresence>
            {selectedWorks.map((work) => (
              <motion.div
                key={work.name}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
                transition={{ duration: 0.3 }}
              >
                <WorkComponent work={work} />
                <hr className="mb-10 text-gray-300 my-10" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <div className="mb-20"></div>
    </motion.div>
  )
}

export default WorksComponent
