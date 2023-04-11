import {
  Box,
  Flex,
  Heading,
  Stack,
  useMediaQuery,
  ListIcon,
  ListItem,
  List
} from "@chakra-ui/react";
import { IoLogoJavascript, IoLogoPython, IoLogoHtml5, IoLogoCss3, IoLogoReact, IoInfinite } from "react-icons/io5";
import { SiDjango, SiFastapi, SiRabbitmq, SiPostgresql, SiMongodb, SiDocker, SiBootstrap,
  SiAmazons3 } from "react-icons/si";
import { useEffect, useState } from "react";
import ProjectCardItem from "../projects/project-card-template";

export default function HomeProjects() {
  const [desktopQuery] = useMediaQuery("(min-width: 700px)");
  const [isMinWidth, setIsMinWidth] = useState(false);

  useEffect(() => {
    if (desktopQuery !== isMinWidth) {
      setIsMinWidth(desktopQuery);
    }
  }, [isMinWidth, desktopQuery]);

  return (
    <Flex>
      <Stack>
        <Box my={0}>
          <Heading fontSize="3xl" fontWeight="bold">
            Recent Projects
          </Heading>
        </Box>

        <Stack
          direction={isMinWidth ? "column" : "column"}
          spacing={5}
          align="center"
        >
          <ProjectCardItem
            title="face-bark"
            desc={
              "A dog-based social media platform designed to allow users to interact with others as their dog's persona to post and share content, follow others, search for dogs, create events, and attend events with differing functionalities for registered and non-registered users."
            }
            icon="/media/home/projects-facebark-icon.png"
            tags={[
              <List>
                <ListItem>
                <ListIcon as={IoLogoReact} color="cyan.300" ml={0} mr={1} mb={0.5}/>
              React.js
                </ListItem>
              </List>,
              <List>
                <ListItem>
                <ListIcon as={SiBootstrap} color="purple.600" ml={0} mr={1} mb={0.5}/>
              Bootstrap
                </ListItem>
              </List>,
              <List>
                <ListItem>
                  <ListIcon as={IoLogoJavascript} color="yellow.400" ml={0} mr={1} mb={0.5}/>
                  JavaScript ES6
                </ListItem>
              </List>,
              <List>
                <ListItem>
                  <ListIcon as={IoLogoPython} color="blue.500" ml={0} mr={1} mb={0.5}/>
                  Python 3
                </ListItem>
              </List>,
              <List>
                <ListItem>
                  <ListIcon as={SiFastapi} color="teal.500" ml={0} mr={1} mb={0.5}/>
                  FastAPI
                </ListItem>
              </List>,
              <List>
                <ListItem>
                  <ListIcon as={SiPostgresql} color="blue.600" ml={0} mr={1} mb={0}/>
                  PostgreSQL
                </ListItem>
              </List>,
              <List>
                <ListItem>
                  <ListIcon as={SiAmazons3} color="red.400" ml={0} mr={1} mb={0.5}/>
                  Amazon S3
                </ListItem>
              </List>,
              <List>
                <ListItem>
                  <ListIcon as={IoInfinite} color="blue.700" ml={0} mr={1} mb={0.5}/>
                  CI/CD
                </ListItem>
              </List>,
              ]}
            gh_link={"https://gitlab.com/facebark/facebark"}
            video="https://www.youtube.com/embed/EHFCYvlv-Z4"
          ></ProjectCardItem>

          <ProjectCardItem
            title="CarTune"
            desc={
              "Collaborated with programming partner to build a full-stack application used to manage automobile sales and services. Users can enter automobile information, create salespersons or technicians, book servicing appointments, create sales records, view past sales records, and more.  "
            }
            icon="/media/home/projects-cartune-icon.png"
            tags={[
              <List>
                <ListItem>
                <ListIcon as={IoLogoReact} color="cyan.300" ml={0} mr={1} mb={0.5}/>
              React.js
                </ListItem>
              </List>,
              <List>
                <ListItem>
                <ListIcon as={SiDjango} color="green.800" ml={0} mr={1} mb={0}/>
              Django 4
                </ListItem>
              </List>,
              <List>
                <ListItem>
                  <ListIcon as={IoLogoJavascript} color="yellow.400" ml={0} mr={1} mb={0.5}/>
                  JavaScript ES6
                </ListItem>
              </List>,
              <List>
                <ListItem>
                  <ListIcon as={IoLogoPython} color="blue.500" ml={0} mr={1} mb={0.5}/>
                  Python 3
                </ListItem>
              </List>,
              <List>
                <ListItem>
                <ListIcon as={SiBootstrap} color="purple.600" ml={0} mr={1} mb={0.5}/>
              Bootstrap
                </ListItem>
              </List>,
              <List>
                <ListItem>
                  <ListIcon as={SiPostgresql} color="blue.600" ml={0} mr={1} mb={0}/>
                  PostgreSQL
                </ListItem>
              </List>,
              <List>
                <ListItem>
                <ListIcon as={SiDocker} color="blue.300" ml={0} mr={1} mb={0.5}/>
              Docker
                </ListItem>
              </List>
            ]}
            gh_link={"https://gitlab.com/est-kim/CarTune"}
            video="https://www.youtube.com/embed/X-VmpPVH-lA"
          ></ProjectCardItem>

          <ProjectCardItem
            title="Conference GO"
            desc="Developed and designed an application to manage conferences, locations, presentations, and attendees with user authentication, database integration, responsive design, built-in user system, and form handling using Python, Django, HTML, and CSS while implementing RESTful APIs. "
            icon="/media/home/projects-confgo-icon.png"
            tags={[
              <List>
                <ListItem>
                <ListIcon as={IoLogoReact} color="cyan.300" ml={0} mr={1} mb={0.5}/>
              React.js
                </ListItem>
              </List>,
              <List>
                <ListItem>
                <ListIcon as={SiDjango} color="green.800" ml={0} mr={1} mb={0}/>
              Django 4
                </ListItem>
              </List>,
              <List>
                <ListItem>
                  <ListIcon as={IoLogoJavascript} color="yellow.400" ml={0} mr={1} mb={0.5}/>
                  JavaScript ES6
                </ListItem>
              </List>,
              <List>
                <ListItem>
                  <ListIcon as={IoLogoPython} color="blue.500" ml={0} mr={1} mb={0.5}/>
                  Python 3
                </ListItem>
              </List>,
              <List>
                <ListItem>
                <ListIcon as={SiBootstrap} color="purple.600" ml={0} mr={1} mb={0.5}/>
              Bootstrap
                </ListItem>
              </List>,
              <List>
                <ListItem>
                <ListIcon as={IoLogoHtml5} color="red.500" ml={0} mr={1} mb={0.5}/>
              HTML5
                </ListItem>
              </List>,
              <List>
                <ListItem>
                <ListIcon as={IoLogoCss3} color="blue.600" ml={0} mr={1} mb={0.5}/>
              CSS
                </ListItem>
              </List>,
              <List>
                <ListItem>
                <ListIcon as={SiDocker} color="blue.300" ml={0} mr={1} mb={0.5}/>
              Docker
                </ListItem>
              </List>
            ]}
            gh_link={"https://gitlab.com/est-kim/conference-go-2"}
            video="https://www.youtube.com/embed/L0ChSs9DdTQ"
          ></ProjectCardItem>
        </Stack>


      </Stack>
    </Flex>
  );
}
