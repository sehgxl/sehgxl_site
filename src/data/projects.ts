export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "ReadMojo - Chrome Extension",
    techs: ["React", "Parcel", "Tailwind","Langchain","Express"],
    link: "https://github.com/sehgxl/readmojo-frontend",
  },
  {
    title: "Discord Landing Page Clone",
    techs: ["ReactJS", "Tailwind"],
    link: "https://github.com/sehgxl/Discord-UI-Clone",
  },
  {
    title: "Shape Clicker Game",
    techs: ["Vanilla JS"],
    link: "https://github.com/sehgxl/Shape-Clicker",
  },
];

export default projects;
