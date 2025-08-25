import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "eanpraha",
  EMAIL: "eanpraha@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_WORKS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 5,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Nano is a minimal and lightweight blog and portfolio.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/eanp"
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/eanp",
  }
];
