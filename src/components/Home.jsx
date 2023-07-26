import { Link } from "react-router-dom";
import IconBtn from "./IconBtn";

const Home = () => {
  const links = [
    {
      siteLink: "https://github.com/sehgxl",
      imgPath: "../assets/github.svg",
    },
    {
      siteLink: "https://www.linkedin.com/in/abhinav-sehgal-1a6994145/",
      imgPath: "../assets/linkedin.svg",
    },
    {
      siteLink: "https://twitter.com/sehgxl",
      imgPath: "../assets/twitter.svg",
    },
    {
      siteLink:
        "https://drive.google.com/file/d/1aERhl8ETDqInYLnqaHn6WYnEgEyO5Y8g/view",
      imgPath: "../assets/resume.svg",
    },
    {
      siteLink: "mailto:abhinavsehgal802@gmail.com",
      imgPath: "../assets/email.svg",
    },
  ];

  return (
    <section
      className="min-h-screen font-mono bg-neutral-950 text-white flex justify-center 
items-center"
    >
      <div className="flex flex-col ">
        <div className="flex  flex-row gap-4 justify-end items-start">
          {links.map((link, idx) => {
            return (
              <IconBtn
                siteLink={link.siteLink}
                imageLink={link.imgPath}
                key={idx}
              />
            );
          })}
        </div>
        <div className="mt-4">
          <h1 className="text-7xl sm:text-9xl font-bold ">sehgxl</h1>
        </div>
        <div className="mt-2 text-xs sm:text-base border-b-2 pb-1 flex flex-row justify-start gap-4">
          <h2 className="italic font-semibold">software</h2>
          <h2>/en-juh-neer/</h2>
        </div>
        <p className="text-xs sm:text-base mt-4">1. Writes code for fun</p>
        <section className="flex mt-4 gap-4 flex-row items-start">
          <Link to="/work">
            <button className="text-xl hover:underline hover:underline-offset-4">
              Work
            </button>
          </Link>
          <button className="text-lg hover:underline hover:underline-offset-4font"></button>
        </section>
      </div>
    </section>
  );
};

export default Home;
