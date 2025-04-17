import Works from './Works'
import { AnimatePresence } from 'motion/react'
import App from './App'
import { Route, Routes, useLocation } from 'react-router'

const AppRouter = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<App />} />
        <Route path="/work" element={<Works />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AppRouter
