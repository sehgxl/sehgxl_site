/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const IconBtn = ({ siteLink, imageLink }) => {
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
    <div className="hover:border-white pt-2 border-t-2 border-neutral-950">
      <a target="_blank" href={siteLink} rel="noreferrer">
        <img
          className={
            imageLink === "../assets/resume.svg"
              ? "w-4 sm:w-5"
              : " w-5 sm:w-6  "
          }
          src={img}
          alt="img"
        />
      </a>
    </div>
  );
};

export default IconBtn;
