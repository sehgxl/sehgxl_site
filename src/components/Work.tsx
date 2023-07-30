import Project from "./Project"
import { ProjectLinks } from "../ProjectLinks"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
const Work = () => {
  return (
    <div className="flex min-h-screen flex-col items-center  gap-8 bg-neutral-950 px-8 py-8">
      <Link to="/">
        <button className="rounded-2xl bg-neutral-900 px-5 py-3 text-xl text-white transition duration-200 ease-out hover:scale-110  ">
          Home
        </button>
      </Link>
      <section className=" gap-10 font-mono text-white sm:px-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.1 } }}
          transition={{ duration: 0.8 }}
        >
          <section className="mt-4 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {ProjectLinks.map((project, idx) => {
              const { description, imageLink, siteLink, gitLink } = project
              return (
                <Project
                  key={idx}
                  description={description}
                  imageLink={imageLink}
                  siteLink={siteLink}
                  gitLink={gitLink}
                />
              )
            })}
          </section>
        </motion.div>
      </section>
    </div>
  )
}

export default Work
