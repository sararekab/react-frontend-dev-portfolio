import React from "react";
import FullScreenSection from "./FullScreenSction";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";


const projects = [
  {
    title: "Dashboard Management for smart-lock",
    description:
      "Developed a management system to control users, keys, and locks, enabling the opening and closing of locks at specific locations using Remix, Nest.js, MySQL,Prisma and Ant Design.",
    getImageSrc: () => require("./sl.tanserlock.com.png"),
    link:"https://sl.tanserlock.com/"
  },
 {
    title:"Mobile app to manage smart_keys",
    description:
    "Developed a mobile app for users to control keys and locks, utilizing Remix, React Native, MySQL, and Prisma.",
    getImageSrc: () => require("./sl.tanserlock.rns.png"),
    // link:"https://ai-resume-builder-himl.onrender.com/"
  },
   {
    title: "Car Repair Loan Website",
    description:
      "Developed a car repair loan website using WordPress, providing users with a seamless platform to apply for loans and manage repair expenses.",
    getImageSrc: () => require("./fix4_1.png"),
    link:"https://fix4.com/"
  },
  {
    title: "Get Loan Quote",
    description:
      "Developed a widget app for users to get loan quotes, utilizing React, Firebase, MongoDB, Bootstrap, and CoreUI for a seamless user experience.",
    getImageSrc: () => require("./fix4_2.png"),
    link:"https://widget.fix4.com//"
  },
  {
    title:"Service Center Website",
    description:
      "Developed a service center website to guide users in obtaining loans through garages, leveraging React, Firebase, MongoDB, Bootstrap, and CoreUI for functionality and design.",
    getImageSrc: () => require("./fix4_3.png"),
    link:"https://service-new.fix4.com/login"
  },
];

const ProjectsSection = () => {
  return (
    <>
    <FullScreenSection
      backgroundColor="white"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
<Heading as="h1" id="projects-section" style={{color:"black"}}>
  Featured Projects
</Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
         {projects.map((project) => {
          return(
           <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            link={project.link}
          />
          )
                 })}
      </Box>
    </FullScreenSection>
    </>
  );
};

export default ProjectsSection;
