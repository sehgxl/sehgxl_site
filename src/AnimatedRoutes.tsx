import { Routes, Route, useLocation } from "react-router-dom"
import Home from "./components/Home"
import Work from "./components/Work"
import { AnimatePresence } from "framer-motion"
const AnimatedRoutes = () => {
  const location = useLocation()
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
