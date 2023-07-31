import Project from "./Project"
import { ProjectLinks } from "../ProjectLinks"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import { socials } from "../ProjectLinks"
import IconBtn from "./IconBtn"
import { useRef } from "react"
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  FreeMode,
} from "swiper/modules"
import "swiper/css"
import { useEffect, useState } from "react"
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowDimensions
}
const Work = () => {
  const slidesPerView = useRef(2)
  const spaceBetween = useRef(100)

  const { height, width } = useWindowDimensions()
  if (width < 877) {
    slidesPerView.current = 1
    spaceBetween.current = 0
  } else {
    slidesPerView.current = 2
    spaceBetween.current = 100
  }

  return (
    <div
      className={`flex min-h-screen flex-col items-center  justify-between overflow-hidden  bg-neutral-950 py-8  text-neutral-200 sm:gap-8`}
    >
      <Link to="/">
        <button className="rounded-xl border-2 border-neutral-800 bg-neutral-950 px-4 py-2 text-center text-xl transition duration-200 ease-out hover:scale-110  ">
          Home
        </button>
      </Link>
      {/* border-2 border-red-500  */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
        transition={{ duration: 0.5 }}
        className=" w-screen font-mono"
      >
        {/* <section className="mt-4 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"> */}

        <Swiper
          modules={[Navigation, FreeMode]}
          spaceBetween={spaceBetween.current}
          slidesPerView={slidesPerView.current}
          navigation
          direction="horizontal"
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
          centeredSlides={true}
          freeMode={true}
          grabCursor={true}
        >
          {ProjectLinks.map((project, idx) => {
            const { description, imageLink, siteLink, gitLink } = project
            return (
              <SwiperSlide key={idx}>
                <Project
                  description={description}
                  imageLink={imageLink}
                  siteLink={siteLink}
                  gitLink={gitLink}
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </motion.div>
      <div className="flex flex-row items-end justify-center gap-9 rounded-2xl bg-neutral-950 p-6  shadow-inner shadow-neutral-500  transition duration-200 ease-out hover:scale-105">
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
  )
}

export default Work
