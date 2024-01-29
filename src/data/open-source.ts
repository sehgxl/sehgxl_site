export type OpenSourceLinks = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const opensource: OpenSourceLinks[] = [
  {
    title: "Centerofci/Mathesar",
    techs: [`Fixed the issue of a cell loosing focus when clicked on a hyperlink inside it. This was because of the discrepancy in the returning of span and a tags while being in inactive and active states.`],
    link: "https://github.com/mathesar-foundation/mathesar/pull/3012",
  },
];

export default opensource;
