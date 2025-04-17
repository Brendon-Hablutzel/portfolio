import { currentPositions, fullName, socials } from '../data'

import { motion } from 'motion/react'

const nameVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.75, ease: 'easeInOut' } },
}

const subtitleVariants = {
  hidden: { opacity: 0, y: 5 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: 0.2 },
  },
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const linkVariants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25 },
  },
}

const App = () => {
  return (
    <div className={`w-screen overflow-hidden`}>
      <div className="p-2 flex flex-col items-center h-[100vh]">
        <div className="flex flex-col items-center gap-6 mt-[30vh]">
          <motion.h1
            variants={nameVariants}
            initial="hidden"
            animate="show"
            className="text-center text-4xl font-medium"
          >
            {fullName}
          </motion.h1>
          <motion.h2
            variants={subtitleVariants}
            initial="hidden"
            animate="show"
            className="text-lg text-gray-600 tracking-wide"
          >
            {currentPositions.map((position, idx) => (
              <>
                {position.url ? (
                  <a href={position.url} target="_blank">
                    {position.name}
                  </a>
                ) : (
                  <span>{position.name}</span>
                )}
                {idx < currentPositions.length - 1 ? ' | ' : null}
              </>
            ))}
          </motion.h2>
          <motion.div
            className="flex justify-between gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {socials.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.url}
                variants={linkVariants}
                target="_blank"
                className="hover:shadow-md transition-shadow duration-200 select-none text-gray-700 flex items-center gap-2 border-[1px] border-black/20 py-2 px-3 rounded-xl"
              >
                {social.type}
                <div className="w-6 h-6">{social.iconComponent}</div>
              </motion.a>
            ))}
            <motion.a
              key={2}
              variants={linkVariants}
              href="/work"
              className="hover:shadow-lg transition-shadow duration-200 hover:cursor-pointer text-white bg-black px-3 py-2 rounded-xl font-light"
            >
              See my work →
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default App
