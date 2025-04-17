import { Link } from 'react-router'
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
      delayChildren: 0.25,
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
    <div className={`h-max-screen w-screen overflow-hidden`}>
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
            className="text-lg text-gray-600 tracking-wide text-center"
          >
            {currentPositions.map((position, idx) => (
              <span key={idx}>
                {position.url ? (
                  <a href={position.url} target="_blank">
                    {position.name}
                  </a>
                ) : (
                  <span>{position.name}</span>
                )}
                {idx < currentPositions.length - 1 ? ' | ' : null}
              </span>
            ))}
          </motion.h2>
          <motion.div
            className="flex justify-between gap-2 md:gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {socials.map((social, idx) => (
              <motion.a
                href={social.url}
                target="_blank"
                key={idx}
                variants={linkVariants}
                className="flex items-center gap-2 text-sm md:text-base hover:shadow-md transition-shadow duration-200 select-none text-gray-700 border-[1px] border-black/20 py-2 px-3 rounded-xl"
              >
                {social.type}
                <div className="md:w-6 md:h-6 w-5 h-5">
                  {social.iconComponent}
                </div>
              </motion.a>
            ))}
            <motion.div
              key={2}
              variants={linkVariants}
              className="flex justify-center items-center text-sm md:text-base hover:shadow-lg transition-shadow duration-200 hover:cursor-pointer text-white bg-black rounded-xl font-light"
            >
              <Link
                to="/work"
                className="h-full w-full text-center flex items-center px-3 py-2"
              >
                See my work →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default App
