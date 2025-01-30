
import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import FullScreenSection from "./FullScreenSction";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";
import "bootstrap/dist/css/bootstrap.min.css";

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment: "",
    },
    onSubmit: (values) => {
      submit("", values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      type: Yup.string(),
      comment: Yup.string()
        .required("Required")
        .min(25, "Must be at least 25 characters"),
    }),
  });

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);

      if (response.type === "success") {
        formik.resetForm();
      }
    }
  }, [response]);

  return (
    <FullScreenSection isDarkBackground backgroundColor="#512DA8" py={16} spacing={8}>
      <Box
        maxW={{ base: "100%", md: "1200px" }}
        mx={{ base: "4", md: "auto" }}
        display="flex"
        flexDir={{ base: "column", md: "row" }}
        justify="space-between"
      >
        <VStack spacing={8} align="flex-start" w={{ base: "100%", md: "88%" }}>
          <Heading as="h1" id="contactme-section" fontSize={{ base: "xl", md: "2xl" }}>
            Contact me
          </Heading>
          <Box w="100%">
            <form onSubmit={formik.handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                  <FormLabel htmlFor="firstName">Name</FormLabel>
                  <Input id="firstName" name="firstName" {...formik.getFieldProps("firstName")} />
                  <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    {...formik.getFieldProps("email")}
                  />
                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={false}>
                  <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                  <Select id="type" name="type" {...formik.getFieldProps("type")}>
                    <option value="hireMe">Freelance project proposal</option>
                    <option value="openSource">Open source consultancy session</option>
                    <option value="other">Other</option>
                  </Select>
                </FormControl>
                <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                  <FormLabel htmlFor="comment">Your message</FormLabel>
                  <Textarea
                    id="comment"
                    name="comment"
                    height={250}
                    {...formik.getFieldProps("comment")}
                  />
                  <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
                </FormControl>
                <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}>
                  Submit
                </Button>
              </VStack>
            </form>
          </Box>
        </VStack>

        {/* <Box w={{ base: "100%", md: "48%" }}>
          <img src={handshake} alt="picture" style={{ width: "100%", height: "auto" }} />
        </Box> */}
      </Box>
    </FullScreenSection>
  );
};

export default LandingSection;
