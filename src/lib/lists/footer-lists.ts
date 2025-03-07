import { DSS_GITHUB_URL, DSS_INSTAGRAM_URL, DSS_LINKEDIN_URL } from "../env";

export const FOOTER_LISTS = [
  {
    id: 1,
    title: "Menu",
    subMenu: [
      {
        id: 1,
        name: "Home",
        route: "/",
      },
      {
        id: 2,
        name: "Events",
        route: "/events",
      },
      {
        id: 3,
        name: "About Us",
        route: "/about",
      },
    ],
  },
  {
    id: 2,
    title: "Social",
    subMenu: [
      {
        id: 1,
        name: "Instagram",
        route: DSS_INSTAGRAM_URL,
      },
      {
        id: 2,
        name: "LinkedIn",
        route: DSS_LINKEDIN_URL,
      },
      {
        id: 3,
        name: "Github",
        route: DSS_GITHUB_URL,
      },
    ],
  },
];
