import internet from "/internet.svg"
import github from "/github.svg"
import { Suspense, lazy } from "react"

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
    <section
      onClick={(e) => {
        console.log(e.target)
      }}
      className="z-30 flex flex-col items-center "
    >
      <section className="relative h-[26rem] w-[47rem] scale-[0.5] 545px:scale-[0.9] 877px:scale-[0.8] 1155px:scale-[0.9] 1341px:scale-[1]">
        <img
          src="/macmock.png"
          className="transiton duration-190 pointer-events-none absolute  z-10  scale-[0.8] ease-out 545px:scale-[0.7] 877px:scale-[0.8] 1155px:scale-[0.9] 1341px:scale-[1]  "
          alt=""
        />
        <div
          className="transiton b ease-ou8 duration-159 absolute  left-0 
          right-0 top-[1.8rem] mx-auto h-[21.4rem]  w-[35rem] scale-[0.8] 545px:scale-[0.7] 877px:scale-[0.8] 1155px:scale-[0.9] 1341px:scale-[1] "
        >
          <img
            src={imageLink}
            className=" h-full w-full object-cover "
            alt=""
          />
        </div>
      </section>
      {/* <section className="relative h-[26rem] w-[47rem] ">
        <img
          src="/macmock.png"
          className="pointer-events-none absolute z-10"
          alt=""
        />
        <div
          className="absolute left-0 right-0 top-[1.8rem] mx-auto h-[21.4rem] 
        w-[35rem]  border-red-300 "
        >
          <img
            src={imageLink}
            className=" h-full w-full object-cover "
            alt=""
          />
        </div>
      </section> */}

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
