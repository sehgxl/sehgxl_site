import { Link, useNavigate } from "react-router-dom"
import IconBtn from "./IconBtn"
import { motion } from "framer-motion"
import { socials } from "../ProjectLinks"
import { useCallback, useEffect } from "react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip"
const Home = () => {
  const Navigate = useNavigate()
  const onKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.altKey && event.key === "w") {
      event.preventDefault()
      Navigate("/work")
    }
  }, [])

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown, false)

    return () => {
      document.removeEventListener("keydown", onKeyDown, false)
    }
  }, [onKeyDown])
  return (
    <section className="flex min-h-screen items-center justify-center bg-neutral-950 font-mono text-neutral-200 ">
      <div className="flex h-screen flex-col items-center justify-between py-8">
        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <Link to="/work">
                <button className="rounded-xl border-2 border-neutral-800 bg-neutral-950 px-4 py-2 text-center text-xl transition duration-200 ease-out hover:scale-110  ">
                  Work
                </button>
              </Link>
            </TooltipTrigger>
            <TooltipContent
              className="TooltipContentDown"
              side="bottom"
              sideOffset={10}
            >
              <p className=" rounded-lg bg-neutral-900 px-3 py-1 text-center text-xl shadow-inner shadow-neutral-600">
                ⌥+w
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.1 } }}
          className="flex flex-col  "
        >
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
        </motion.div>
        <div className="flex  w-max flex-row items-end justify-center gap-9 rounded-2xl bg-neutral-950 p-6  shadow-inner shadow-neutral-500  transition duration-200 ease-out hover:scale-105">
          {socials.map((link, idx) => {
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
      </div>
    </section>
  )
}

export default Home
