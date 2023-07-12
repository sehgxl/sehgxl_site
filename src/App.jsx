import twitter from "./assets/twitter.svg";
import linkedin from "./assets/linkedin.svg";
import resume from "./assets/resume.svg";
import github from "./assets/github.svg";
import email from "./assets/email.svg";

function App() {
  return (
    <section
      className="min-h-screen font-mono bg-neutral-950 text-white flex justify-center 
    items-center"
    >
      <div className="flex flex-col ">
        <div className="flex flex-row gap-4 justify-end items-end">
          <a target="_blank" href="https://github.com/sehgxl" rel="noreferrer">
            <img className="w-4 sm:w-5" src={github} alt="git" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/abhinav-sehgal-1a6994145/"
            rel="noreferrer"
          >
            <img className="w-4 sm:w-5" src={linkedin} alt="" />
          </a>
          <a target="_blank" href="https://twitter.com/sehgxl" rel="noreferrer">
            <img className="w-4 sm:w-5" src={twitter} alt="" />
          </a>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1aERhl8ETDqInYLnqaHn6WYnEgEyO5Y8g/view?usp=sharing"
            rel="noreferrer"
          >
            <img className="w-3 sm:w-4" src={resume} alt="" />
          </a>

          <a href="mailto:abhinavsehgal802@gmail.com">
            <img className="w-4 sm:w-5" src={email} alt="" />
          </a>
        </div>

        <div className="mt-4">
          <h1 className="text-7xl sm:text-9xl font-bold ">sehgxl</h1>
        </div>

        <div className="mt-2 text-xs sm:text-base border-b-2 pb-1 flex flex-row justify-start gap-4">
          <h2 className="italic font-semibold">software</h2>
          <h2>/en-juh-neer/</h2>
        </div>

        <p className="text-xs sm:text-base mt-4">1. Writes code for sanity</p>
      </div>
    </section>
  );
}

export default App;
