import { Heading, HStack, Image, Text, VStack,Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc,link }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return(
 <div >
 <HStack align={"right"} >
   <Box
          backgroundColor="#F2F2F2"
          textColor="black"
          rounded="3xl"
          paddingBottom={5}
        >
           <VStack spacing={3}>
  <Image src={imageSrc} alt={title} rounded="3xl" width={600} height={450}/>
   <Box paddingX={4}>
<Heading as="h1"  paddingY={3} size="md" >{title}</Heading>

  <Text >{description}</Text>
  <HStack spacing={2}>
  <Text fontWeight="bold"><a href={link} target="blank">See More
    </a></Text>
  </HStack>
</Box>
</VStack>

  </Box>
 </HStack>

  </div>
  )
};

export default Card;
