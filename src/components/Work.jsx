import Project from "./Project";
import { ProjectLinks } from "../ProjectLinks";

const Work = () => {
  return (
    <section className="min-h-screen font-mono bg-neutral-950 text-white  gap-10 px-8 sm:px-24 py-20">
      <h1 className="text-5xl font-bold text-center">Work</h1>
      <section className="grid mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {ProjectLinks.map((project, idx) => {
          const { title, description, imageLink, siteLink, gitLink } = project;
          return (
            <Project
              key={idx}
              title={title}
              description={description}
              imageLink={imageLink}
              siteLink={siteLink}
              gitLink={gitLink}
            />
          );
        })}
      </section>
    </section>
  );
};

export default Work;
