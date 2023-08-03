import internet from "/internet.svg"
import github from "/github.svg"
import { Suspense, lazy } from "react"

const Mac = lazy(
  () =>
    // {
    // return new Promise((resolve) => setTimeout(resolve, 1000)).then(
    //   () =>
    // )
    import("./Mac")
  // }
)

function Loading() {
  console.log("Loading")
  return (
    <div className="relative flex h-[26rem] w-[47rem] scale-[0.5] animate-pulse items-center justify-center text-3xl 545px:scale-[0.9] 877px:scale-[0.8] 1155px:scale-[0.9] 1341px:scale-[1]">
      Loading...
    </div>
  )
}

// eslint-disable-next-line react/prop-types
const Project = ({
  description,
  imageLink,
  siteLink,
  gitLink,
}: {
  description: string
  imageLink: string
  siteLink: string
  gitLink: string
}) => {
  return (
    <section className="z-30 flex flex-col items-center ">
      <Suspense fallback={<Loading />}>
        <Mac imageLink={imageLink} />
      </Suspense>
      <div className="z-20 flex flex-row items-center gap-6 ">
        <a
          target="_blank"
          className="transiton duration-150 ease-out hover:mt-4 hover:-rotate-12 hover:scale-150"
          rel="noreferrer"
          href={siteLink}
        >
          <img
            className="w-5 border-t-2 border-transparent pt-2 sm:w-5"
            src={internet}
            alt="siteLink"
          />
        </a>

        <a
          target="_blank"
          className="transiton duration-150 ease-out hover:mt-4 hover:-rotate-12 hover:scale-150 "
          rel="noreferrer"
          href={gitLink}
        >
          <img
            className=" w-5 border-t-2 border-transparent pt-2 sm:w-6"
            src={github}
            alt="gitLink"
          />
        </a>
      </div>
      <p className="z-20 mt-4 px-2 text-center text-sm font-semibold sm:px-8 sm:text-base">
        {description}
      </p>
    </section>
  )
}

export default Project
