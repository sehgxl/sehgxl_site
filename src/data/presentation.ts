type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "abhinavsehgal802@gmail.com",
  title: "Hi, I’m Abhinav 👋",
  // profile: "/profile.webp",
  description: "Frontend Dev, Tinkerer, Student of the Game",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/sehgxl",
    },
    {
      label: "Github",
      link: "https://github.com/sehgxl",
    },
  ],
};

export default presentation;
