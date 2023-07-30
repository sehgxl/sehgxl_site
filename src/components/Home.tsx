import { Link } from "react-router-dom"
import IconBtn from "./IconBtn"
import { motion } from "framer-motion"
const Home = () => {
  const links = [
    {
      title: "Go to my GitHub",
      siteLink: "https://github.com/sehgxl",
      imgPath: "/github.svg",
    },
    {
      title: "Send me a connection",
      siteLink: "https://www.linkedin.com/in/abhinav-sehgal-1a6994145/",
      imgPath: "/linkedin.svg",
    },
    {
      title: "Follow me on Twitter",
      siteLink: "https://twitter.com/sehgxl",
      imgPath: "/twitter.svg",
    },
    {
      title: "Wanna hire? Here is my resume",
      siteLink:
        "https://drive.google.com/file/d/1aERhl8ETDqInYLnqaHn6WYnEgEyO5Y8g/view",
      imgPath: "/resume.svg",
    },
    {
      title: "Shoot me a mail",
      siteLink: "mailto:abhinavsehgal802@gmail.com",
      imgPath: "/email.svg",
    },
  ]

  return (
    <section className="flex min-h-screen items-center justify-center bg-neutral-950 font-mono text-white ">
      <motion.div
        className="flex h-screen flex-col items-center justify-between py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
      >
        <Link to="/work">
          <button className="rounded-2xl bg-neutral-900 px-5 py-3 text-xl text-white transition duration-200 ease-out hover:scale-110  ">
            Work
          </button>
        </Link>
        <div className="flex flex-col  ">
          <div className="mt-4">
            <h1 className="text-7xl font-bold sm:text-9xl ">sehgxl</h1>
          </div>
          <div className="mt-2 flex flex-row justify-start gap-4 border-b-2 pb-1 text-xs sm:text-base">
            <h2 className="font-semibold italic">software</h2>
            <h2>/en-juh-neer/</h2>
          </div>
          <p className="mt-4 text-xs sm:text-base">1. Writes code for fun</p>
          <section className="mt-4 flex  flex-row items-start gap-4">
            <button className="hover:underline-offset-4font text-lg hover:underline"></button>
          </section>
        </div>
        <div className="flex  w-max flex-row items-end justify-center gap-9 rounded-2xl bg-neutral-950 p-6  shadow-inner shadow-neutral-500  transition duration-200 ease-out hover:scale-105">
          {links.map((link, idx) => {
            return (
              <IconBtn
                title={link.title}
                siteLink={link.siteLink}
                imageLink={link.imgPath}
                key={idx}
              />
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}

export default Home
