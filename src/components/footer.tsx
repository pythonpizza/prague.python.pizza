/** @jsxRuntime classic */
/** @jsx jsx */

import { Box, Container, jsx } from "theme-ui";

import { Image } from "~/components/image";

import { Wave } from "./wave";

const SOCIALS = [
  {
    name: "linkedin",
    icon: "/socials/linkedin.png",
    link: "https://www.linkedin.com/company/98334563/",
  },
  {
    name: "mastodon",
    icon: "/socials/mastodon.png",
    link: "https://fosstodon.org/@pythonpizza/",
  },
  {
    name: "twitter",
    icon: "/socials/twitter.png",
    link: "https://twitter.com/pythonpizzaconf/",
  },
  {
    name: "facebook",
    icon: "/socials/facebook.png",
    link: "https://www.facebook.com/pythonpizza/",
  },
  {
    name: "instagram",
    icon: "/socials/instagram.png",
    link: "https://www.instagram.com/python.pizza/",
  },
];

export const Footer = () => (
  <Box
    sx={{
      backgroundColor: "primary",
    }}
  >
    <Wave invert />
    <Container>
      {SOCIALS.map((social) => (
        <a
          sx={{ mx: "secondary" }}
          target="_blank"
          rel="noopener noreferrer"
          href={social.link}
          key={social.name}
        >
          <Image
            width="3.5rem"
            height="3.5rem"
            src={social.icon}
            alt={social.name}
          />
        </a>
      ))}
    </Container>
  </Box>
);
