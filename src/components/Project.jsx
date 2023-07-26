import { useEffect, useState } from "react";
import internet from "../assets/internet.svg";
import github from "../assets/github.svg";
// import chromExt from "../assets/chromeExt.png";

// eslint-disable-next-line react/prop-types
const Project = ({ description, imageLink, siteLink, gitLink }) => {
  const [img, setimg] = useState("");
  useEffect(() => {
    const getImage = async () => {
      let res = await import(imageLink);
      res = res.default;
      if (res.startsWith("/@fs")) {
        res = res.substring(4);
      }

      setimg(res);
    };
    getImage();
  }, [imageLink]);
  return (
    <section className="flex flex-col justify-between items-center gap-2 max-h-96 border-l-4 border-neutral-500 bg-neutral-900 pb-4 rounded-2xl">
      <img
        className="h-60 rounded-t-2xl w-full object-cover"
        src={img}
        alt="Image"
      />

      <p className="px-8 mt-4 text-base text-center font-semibold">
        {description}
      </p>

      <div className="flex flex-row gap-6">
        <a target="_blank" rel="noreferrer" href={siteLink}>
          <img
            className="   hover:border-white pt-2 border-t-2 border-transparent w-5 sm:w-5"
            src={internet}
            alt="siteLink"
          />
        </a>
        <a target="_blank" rel="noreferrer" href={gitLink}>
          <img
            className=" hover:border-white pt-2 border-t-2 border-transparent w-5 sm:w-6"
            src={github}
            alt="gitLink"
          />
        </a>
      </div>
    </section>
  );
};

export default Project;
