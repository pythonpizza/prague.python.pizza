import { MouseEvent, useCallback } from "react";
import { Box, Container, Flex, NavLink } from "theme-ui";

import { Logo } from "./logo";

const MenuLink: React.FC<{ href: string }> = ({ href, children }) => {
  const goToSection = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();

      const destinationEl: HTMLElement | null =
        window.document.querySelector(href);

      if (!destinationEl) {
        return;
      }

      window.scrollTo({
        top: destinationEl.offsetTop,
        behavior: "smooth",
      });
    },
    [href]
  );

  return (
    <NavLink
      sx={{
        background: `linear-gradient(0deg, #fff .2rem,transparent 0) no-repeat 50%`,
        transition: "background-size .3s cubic-bezier(.165,.84,.44,1)",
        backgroundSize: "0 100%",
        p: ".4rem",
        "&:hover": {
          backgroundSize: "100% 100%",
        },
      }}
      mt={["secondary", 0]}
      ml={[0, "secondary"]}
      onClick={goToSection}
      href={href}
    >
      {children}
    </NavLink>
  );
};

const MenuButton: React.FC<{ href: string }> = ({ children, href }) => (
  <Box
    sx={{
      perspective: "24rem",
      p: ".4rem",
    }}
    mt={["secondary", 0]}
    ml={[0, "secondary"]}
  >
    <NavLink
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        padding: "1rem 2.4rem",
        border: "1px solid white",
        borderRadius: "10rem",
        background: "white",
        color: "primary",
        transition: `transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
          box-shadow 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)`,
        "&:hover": {
          transform: "translateZ(2.6rem) rotateX(-12deg) rotateY(-10deg)",
          boxShadow: "0.6rem 0.4rem 2.4rem -0.8rem rgba(25, 0, 0, 0.5)",
          color: "primary",
        },
      }}
    >
      {children}
    </NavLink>
  </Box>
);

export const ContentButton: React.FC<{ href: string }> = ({ children, href }) => (
  <Box
    sx={{
      perspective: "24rem",
      p: ".4rem",
    }}
    mt={["secondary", 0]}
    ml={[0, "secondary"]}
  >
    <NavLink
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        padding: "1rem 2.4rem",
        border: "1px solid white",
        borderRadius: "10rem",
        background: "primary",
        color: "white",
        transition: `transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
          box-shadow 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)`,
        "&:hover": {
          transform: "translateZ(2.6rem) rotateX(-12deg) rotateY(-10deg)",
          boxShadow: "0.6rem 0.4rem 2.4rem -0.8rem rgba(25, 0, 0, 0.5)",
          color: "white",
        },
      }}
    >
      {children}
    </NavLink>
  </Box>
);

export const Header = () => (
  <Box
    sx={{
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 1,

      width: "100%",
    }}
  >
    <Container
      sx={{
        width: "100%",

        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: ["column", null, "row"],

        color: "white",
        p: "secondary",
      }}
    >
      <Logo />
      <Flex
        sx={{
          alignItems: "center",
          flexDirection: ["column", "row"],
        }}
        as="nav"
      >
        <MenuLink href="#about">About 🍕</MenuLink>
        <MenuLink href="#schedule">Schedule 📅</MenuLink>
        <MenuLink href="#organizers">Organizers 👩🏻</MenuLink>
        <MenuLink href="#venue">Venue 🏰</MenuLink>
        <MenuLink href="#sponsors">Sponsors 💛</MenuLink>
        <MenuLink href="#coc">CoC 💂</MenuLink>
        <MenuButton href="https://pretix.eu/pyconcz/prague.pizza/">Tickets 🎫</MenuButton>
      </Flex>
    </Container>
  </Box>
);
