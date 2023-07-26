import internet from "/internet.svg";
import github from "/github.svg";
// import chromExt from "/chromeExt.png";

// eslint-disable-next-line react/prop-types
const Project = ({ description, imageLink, siteLink, gitLink }) => {
  return (
    <section className="flex flex-col justify-between items-center gap-2 max-h-96 border-l-4 border-neutral-500 bg-neutral-900 pb-4 rounded-2xl">
      <img
        className="h-60 rounded-t-2xl w-full object-cover"
        src={imageLink}
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
