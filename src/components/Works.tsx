import { useMemo, useState } from 'react'
import { motion } from 'motion/react'
import { fullName, socials, tags, Work, works, WorkType } from '../data'

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3 } },
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
      <div className="flex justify-start gap-2">
        {work.tags.map((tag) => (
          <div className="text-xs text-green-900 bg-green-200 w-fit py-1 px-2 rounded-xl">
            {tag}
          </div>
        ))}
      </div>
    </div>
  )
}

const WorksComponent = () => {
  const [selectedTags, setSelectedTags] = useState(
    Object.fromEntries(tags.map((tag) => [tag, false]))
  )

  // TODO: push queries and other filters into the url as query params
  const [searchQuery, setSearchQuery] = useState('')

  const [selectedType, setSelectedType] = useState<WorkType | ''>('')

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

    if (searchQuery) {
      const normalizedSearchQuery = searchQuery.toLowerCase()
      selectedWorks = selectedWorks.filter(
        (work) =>
          work.name.toLowerCase().includes(normalizedSearchQuery) ||
          work.description.toLowerCase().includes(normalizedSearchQuery)
      )
    }

    return selectedWorks
  }, [selectedTagsSet, searchQuery, selectedType])

  return (
    <motion.div
      className={`flex flex-col items-center min-h-screen w-screen`}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="sticky top-0 p-2 flex justify-between w-full">
        <div>
          {/* <a href="/" className="group transition duration-300"> */}
          <a href="/">
            <h2 className="font-medium">{fullName}</h2>
            {/* <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span> */}
          </a>
        </div>
        <div className="flex justify-between gap-2">
          {socials.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              className="text-sm hover:shadow-sm transition-shadow duration-200 select-none text-gray-700 flex items-center gap-2 border-[1px] border-black/20 py-1 px-2 rounded-xl"
            >
              {social.type}
              <div className="w-4 h-4">{social.iconComponent}</div>
            </a>
          ))}
        </div>
      </div>
      <div className="w-[90%] max-w-[800px]">
        <div className="mb-3 bg-white py-4">
          <div className="flex justify-between gap-2 mb-3">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 text-lg py-1 px-2 rounded-xl border-[1px] border-black/20"
            />
            <select
              className="text-lg border-[1px] border-black/20 rounded-xl py-1 px-2"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value as WorkType | '')}
            >
              <option value="">All</option>
              <option value="project">Projects</option>
              <option value="experience">Experience</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="flex justify-start gap-2 overflow-x-scroll pb-5">
            {Object.entries(selectedTags).map((tagEntry, idx) => {
              const [tagId, tagSelected] = tagEntry

              return (
                <label
                  key={idx}
                  className={`whitespace-nowrap transition duration-150 ease-in-out ${tagSelected ? 'bg-gray-200  ' : ''} hover:cursor-pointer select-none border-[1px] border-black/20 py-0.5 px-2 rounded-xl`}
                >
                  <input
                    type="checkbox"
                    className="sr-only"
                    onChange={() => {
                      setSelectedTags({
                        ...selectedTags,
                        [tagId]:
                          !selectedTags[tagId as keyof typeof selectedTags],
                      })
                    }}
                  />
                  {tagId}
                </label>
              )
            })}
          </div>
        </div>
        {selectedWorks.map((work, idx) => (
          <div key={idx}>
            <WorkComponent work={work} />
            <hr className="mb-10 text-gray-300 my-10" />
          </div>
        ))}
      </div>
      <div className="mb-20"></div>
    </motion.div>
  )
}

export default WorksComponent
