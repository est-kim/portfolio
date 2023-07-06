import { Heading,
  Flex,
  Box,
  useMediaQuery,
  Text,
  UnorderedList,
  ListItem,
  ListIcon
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { IoLogoJavascript, IoLogoPython, IoLogoHtml5, IoLogoCss3, IoLogoReact } from "react-icons/io5";
import { SiDjango, SiFastapi, SiRabbitmq, SiPostgresql, SiMongodb, SiDocker } from "react-icons/si";
import NextLink from "next/link";


export default function AboutMeEducation() {
  const [desktopQuery] = useMediaQuery("(min-width: 700px)");
  const [isMinWidth, setIsMinWidth] = useState(false);

  useEffect(() => {
    if (desktopQuery !== isMinWidth) {
      setIsMinWidth(desktopQuery);
    }
  }, [isMinWidth, desktopQuery]);

  return (
    <Flex direction="column">
      <Box my={4}>
        <Heading fontSize="3xl" fontWeight="bold">
          {"Education"}
        </Heading>
      </Box>

      <Box mt={0}>
        <Text fontSize="1.1rem" fontWeight="bold" textDecoration="underline">
          {"Hack Reactor"}
        </Text>
        <UnorderedList spacing={1} ml={3}>
          <ListItem>
          19-week full-time Software Engineering program focusing on building full-stack web applications
          </ListItem>
          <ListItem>
            Spent over 1000 hours of coding, deep diving into:
            <UnorderedList spacing={1} ml={3}>
            <ListItem>
              <Box as="span" fontWeight="bold">Programming Languages:</Box>
              <ListIcon as={IoLogoJavascript} color="yellow.400" ml={1} mr={0.5} mb={0.5}/>
              JavaScript ES6,
              <ListIcon as={IoLogoPython} color="blue.500" ml={1} mr={0.5} mb={0.5}/>
              Python 3
            </ListItem>
            <ListItem>
              <Box as="span" fontWeight="bold">Front-End:</Box>
              <ListIcon as={IoLogoReact} color="cyan.300" ml={1} mr={0.5} mb={0.5}/>
              React,
              <ListIcon as={IoLogoHtml5} color="red.500" ml={1} mr={0.5} mb={0.5}/>
              HTML5,
              <ListIcon as={IoLogoCss3} color="blue.600" ml={1} mr={0.5} mb={0.5}/>
              CSS, DOM Manipulation
            </ListItem>
            <ListItem>
              <Box as="span" fontWeight="bold">Back-End:</Box>
              <ListIcon as={SiDjango} color="green.800" ml={1} mr={0.5} mb={0}/>
              Django 4,
              <ListIcon as={SiFastapi} color="teal.500" ml={1} mr={0.5} mb={0.5}/>
              FastAPI,
              <ListIcon as={SiRabbitmq} color="#f66300" ml={1} mr={1} mb={0.5}/>
              RabbitMQ,
              <ListIcon as={SiPostgresql} color="blue.600" ml={1} mr={1} mb={0}/>
              PostgreSQL,
              <ListIcon as={SiMongodb} color="green.500" ml={1} mr={0} mb={0.5}/>
              MongoDB
            </ListItem>
            <ListItem>
              <Box as="span" fontWeight="bold">System Design:</Box>
              <ListIcon as={SiDocker} color="blue.300" ml={1} mr={0.5} mb={0.5}/>
              Docker, Monoliths, Microservices, Domain-Driven Design, Message Queues, Polling
            </ListItem>
            </UnorderedList>
          </ListItem>
        </UnorderedList>
      </Box>
      <Box mt={3}>
      <Text fontSize="1.1rem" fontWeight="bold">
        <Text
          textDecoration="underline"
          style={{ display: "inline" }}
        >
          {"Irvine Valley College"}
        </Text>
        {" - "}
        <Text
          fontSize="1.1rem"
          fontWeight="normal"
          textDecoration="none"
          style={{ display: "inline" }}
        >
          {"Computer Science"}
        </Text>
      </Text>
        <UnorderedList spacing={1} ml={3}>
          <ListItem>
            Courses taken: Introduction to Computer Systems, Introductions to Programming using Python, C++, Java Programming,
            Computer Organization and Assembly Language, Data Structure, C Programming, Visual Basic Programming
          </ListItem>
        </UnorderedList>
      </Box>

      <Box mt={3}>
      <Text fontSize="1.1rem" fontWeight="bold">
        <Text
          textDecoration="underline"
          style={{ display: "inline" }}
        >
          {"University of California, Davis"}
        </Text>
        {" - "}
        <Text
          fontSize="1.1rem"
          fontWeight="normal"
          textDecoration="none"
          style={{ display: "inline" }}
        >
          {"Animal Science"}
        </Text>
      </Text>
        <UnorderedList spacing={1} ml={3}>
          <ListItem>
            Bachelor of Science Degree in Animal Science
          </ListItem>
        </UnorderedList>
      </Box>

      <Box my={4}>
        <Heading fontSize="3xl" fontWeight="bold">
          {"Certifications"}
        </Heading>
      </Box>
      <Box mt={0}>
        <Box display="block">
          <NextLink
            href={"/media/about-me/HackReactorCert.pdf"}
            passHref
          >
          <Text
            fontSize="1rem"
            textDecoration="underline"
            className="hoverable"
            as="a"
            target="_blank"
            rel="noopener noreferrer"
          >
              {"Hack Reactor Certificate of Completion"}
          </Text>
          </NextLink>
        </Box>
        <Box display="block">
          <NextLink
            href={"/media/about-me/PythonOOPCert.pdf"}
            passHref
          >
          <Text
            fontSize="1rem"
            textDecoration="underline"
            className="hoverable"
            as="a"
            target="_blank"
            rel="noopener noreferrer"
          >
              {"Python OOP - Object Oriented Programming for Beginners"}
          </Text>
          </NextLink>
        </Box>
        <Text fontSize="1rem">
            {"JavaScript Algorithms and Data Structures Masterclass (In Progress)"}
        </Text>
        <Text fontSize="1rem">
            {"Ultimate AWS Certified Cloud Practitioner - 2023 (In Progress)"}
        </Text>
      </Box>

    </Flex>
  );
}
