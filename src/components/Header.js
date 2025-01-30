import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: s.rekabtalaei@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/sararekab?tab=repositories",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/srekabtalaei/",
  },
];

const Header = () => {
  const headerRef = useRef(null);

  const handleClick = (anchor) => (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    let prevScrollPosition = window.scrollY;
    const handleScroll = () => {
      const currScrollPosition = window.scrollY;
      const currHeaderElement = headerRef.current;
      if (!currHeaderElement) {
        return;
      }
      if (prevScrollPosition > currScrollPosition) {
        currHeaderElement.style.transform = "translateY(0)";
      } else {
        currHeaderElement.style.transform = "translateY(-200px)";
      }
      prevScrollPosition = currScrollPosition;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      className="nav-bar"
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={headerRef}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={6}>
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a
                href="#projects-section"
                onClick={handleClick("projects-section")}
              >
                Projects
              </a>

              <a href="#skills-section" onClick={handleClick("skills-section")}>
                Skills
              </a>
              <a href="#contactme-section" onClick={handleClick("contactme-section")}>
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
