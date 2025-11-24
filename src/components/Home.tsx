import { currentPositions, fullName, socials } from '../data'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

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

const Home = () => {
  const [isReady, setIsReady] = useState(false)

  // ensure the page is loaded before initiating animations
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true)
    }, 250) // TODO: may need to tweak this value

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-screen overflow-hidden">
      <div className="mt-[30vh] p-5 flex flex-col items-center h-[100%]">
        <div className="flex flex-col items-center gap-6">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={
              isReady
                ? {
                    opacity: 1,
                    transition: { duration: 0.75, ease: 'easeInOut' },
                  }
                : { opacity: 0 }
            }
            className="text-center text-4xl font-medium"
          >
            {fullName}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 5 }}
            animate={
              isReady
                ? {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.35, delay: 0.2 },
                  }
                : { opacity: 0, y: 5 }
            }
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
            animate={isReady ? 'show' : 'hidden'}
          >
            {socials.map((social, idx) => (
              <motion.a
                href={social.url}
                target="_blank"
                key={idx}
                variants={linkVariants}
                className="flex items-center gap-2 hover:shadow-md transition-shadow duration-200 select-none text-gray-700 border-[1px] border-black/20 py-2 px-3 rounded-xl"
              >
                <span className="hidden sm:inline">{social.type}</span>
                <div className="md:w-6 md:h-6 w-5 h-5">
                  {social.iconComponent}
                </div>
              </motion.a>
            ))}
            <motion.div
              key={2}
              variants={linkVariants}
              className="flex justify-center items-center hover:shadow-lg transition-shadow duration-200 hover:cursor-pointer text-white bg-black rounded-xl font-light"
            >
              <a
                href="/work"
                className="h-full w-full text-center flex items-center px-3 py-2"
              >
                See my work →
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Home
