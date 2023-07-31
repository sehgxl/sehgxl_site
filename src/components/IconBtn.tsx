import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip"

const IconBtn = ({
  siteLink,
  imageLink,
  title,
}: {
  title: string
  siteLink: string
  imageLink: string
}) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <a target="_blank" href={siteLink} rel="noreferrer">
            <div className=" transiton duration-150 ease-out hover:-rotate-12 hover:scale-150  ">
              <img
                className={
                  imageLink === "/resume.svg" ? "w-4 sm:w-7" : " w-5 sm:w-8  "
                }
                src={imageLink}
                alt="img"
              />
            </div>
          </a>
        </TooltipTrigger>
        <TooltipContent className="TooltipContent" sideOffset={35}>
          <p className="rounded-lg bg-neutral-900 px-3 py-1 text-sm shadow-inner shadow-neutral-600">
            {title}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default IconBtn
