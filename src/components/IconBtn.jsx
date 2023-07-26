/* eslint-disable react/prop-types */
const IconBtn = ({ siteLink, imageLink }) => {
  return (
    <div className="hover:border-white pt-2 border-t-2 border-neutral-950">
      <a target="_blank" href={siteLink} rel="noreferrer">
        <img
          className={
            imageLink === "/resume.svg" ? "w-4 sm:w-5" : " w-5 sm:w-6  "
          }
          src={imageLink}
          alt="img"
        />
      </a>
    </div>
  );
};

export default IconBtn;
