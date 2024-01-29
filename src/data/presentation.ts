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
  title: "Hi, I’m Abhinav",
  // profile: "/profile.webp",
  description: "Tinkerer, Randomness Embracer, Chai Enjoyer, Software Developer",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/sehgxl",
    },
    {
      label: "Github",
      link: "https://github.com/sehgxl",
    },
    {
      label : "Resume",
      link : "https://drive.google.com/drive/folders/1d2ymq4-b40MADZdrJkk4VtQdPZzsLr0Y?usp=drive_link"
    }
  ],
};

export default presentation;
