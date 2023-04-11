import { Flex,
  Stack,
  ListIcon,
  ListItem,
  List
} from "@chakra-ui/react";
import { useState } from "react";
import ProjectCardItem from "./project-card-template";
import { IoLogoJavascript, IoLogoPython, IoLogoHtml5, IoLogoCss3, IoLogoReact, IoInfinite, IoLogoInstagram } from "react-icons/io5";
import { SiDjango, SiFastapi, SiRabbitmq, SiPostgresql, SiShopify, SiDocker, SiBootstrap, SiAmazons3, SiGoogleanalytics, SiFacebook, SiMinutemailer } from "react-icons/si";
import { CgWebsite } from "react-icons/cg"

function ProjectList() {
  const [isMinWidth] = useState(false);

  return (
    <Flex>
      <Stack>
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
            <List key={24}>
              <ListItem>
              <ListIcon as={IoLogoReact} color="cyan.300" ml={0} mr={1} mb={0.5}/>
            React.js
              </ListItem>
            </List>,
            <List key={25}>
              <ListItem>
              <ListIcon as={SiBootstrap} color="purple.600" ml={0} mr={1} mb={0.5}/>
            Bootstrap
              </ListItem>
            </List>,
            <List key={26}>
              <ListItem>
                <ListIcon as={IoLogoJavascript} color="yellow.400" ml={0} mr={1} mb={0.5}/>
                JavaScript ES6
              </ListItem>
            </List>,
            <List key={27}>
              <ListItem>
                <ListIcon as={IoLogoPython} color="blue.500" ml={0} mr={1} mb={0.5}/>
                Python 3
              </ListItem>
            </List>,
            <List key={28}>
              <ListItem>
                <ListIcon as={SiFastapi} color="teal.500" ml={0} mr={1} mb={0.5}/>
                FastAPI
              </ListItem>
            </List>,
            <List key={29}>
              <ListItem>
                <ListIcon as={SiPostgresql} color="blue.600" ml={0} mr={1} mb={0}/>
                PostgreSQL
              </ListItem>
            </List>,
            <List key={30}>
              <ListItem>
                <ListIcon as={SiAmazons3} color="red.400" ml={0} mr={1} mb={0.5}/>
                Amazon S3
              </ListItem>
            </List>,
            <List key={31}>
              <ListItem>
                <ListIcon as={IoInfinite} color="blue.700" ml={0} mr={1} mb={0.5}/>
                CI/CD
              </ListItem>
            </List>]}
            gh_link={"https://gitlab.com/facebark/facebark"}
            video="https://www.youtube.com/embed/EHFCYvlv-Z4"
          ></ProjectCardItem>
          <ProjectCardItem
            title="CarTune"
            desc={
              "Collaborated with programming partner to build a full-stack application used to manage automobile sales and services. Users can enter automobile information, create salespersons or technicians, book servicing appointments, create sales records, view past sales records, and more. "
            }
            icon="/media/home/projects-cartune-icon.png"
            tags={[
              <List key={32}>
                <ListItem>
                <ListIcon as={IoLogoReact} color="cyan.300" ml={0} mr={1} mb={0.5}/>
              React.js
                </ListItem>
              </List>,
              <List key={33}>
                <ListItem>
                <ListIcon as={SiDjango} color="green.800" ml={0} mr={1} mb={0}/>
              Django 4
                </ListItem>
              </List>,
              <List key={34}>
                <ListItem>
                  <ListIcon as={IoLogoJavascript} color="yellow.400" ml={0} mr={1} mb={0.5}/>
                  JavaScript ES6
                </ListItem>
              </List>,
              <List key={35}>
                <ListItem>
                  <ListIcon as={IoLogoPython} color="blue.500" ml={0} mr={1} mb={0.5}/>
                  Python 3
                </ListItem>
              </List>,
              <List key={36}>
                <ListItem>
                <ListIcon as={SiBootstrap} color="purple.600" ml={0} mr={1} mb={0.5}/>
              Bootstrap
                </ListItem>
              </List>,
              <List key={37}>
                <ListItem>
                  <ListIcon as={SiPostgresql} color="blue.600" ml={0} mr={1} mb={0}/>
                  PostgreSQL
                </ListItem>
              </List>,
              <List key={38}>
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
            title="Wardrobify"
            desc={
              "Collaborated with another engineer to build a full-stack application used to keep track of shoes and hats. Users can enter locations and bins for respective hats and shoes to keep their closet storage organized. "
            }
            icon="/media/home/projects-wardrobify-icon.png"
            tags={[
              <List key={39}>
                <ListItem>
                <ListIcon as={IoLogoReact} color="cyan.300" ml={0} mr={1} mb={0.5}/>
              React.js
                </ListItem>
              </List>,
              <List key={40}>
                <ListItem>
                <ListIcon as={SiDjango} color="green.800" ml={0} mr={1} mb={0}/>
              Django 4
                </ListItem>
              </List>,
              <List key={41}>
                <ListItem>
                  <ListIcon as={IoLogoJavascript} color="yellow.400" ml={0} mr={1} mb={0.5}/>
                  JavaScript ES6
                </ListItem>
              </List>,
              <List key={42}>
                <ListItem>
                  <ListIcon as={IoLogoPython} color="blue.500" ml={0} mr={1} mb={0.5}/>
                  Python 3
                </ListItem>
              </List>,
              <List key={43}>
                <ListItem>
                <ListIcon as={SiBootstrap} color="purple.600" ml={0} mr={1} mb={0.5}/>
              Bootstrap
                </ListItem>
              </List>,
              <List key={44}>
              <ListItem>
                <ListIcon as={SiPostgresql} color="blue.600" ml={0} mr={1} mb={0}/>
                PostgreSQL
              </ListItem>
              </List>,
              <List key={45}>
              <ListItem>
                <ListIcon as={SiRabbitmq} color="#f66300" ml={0} mr={1} mb={0.5}/>
                RabbitMQ
              </ListItem>
              </List>,
              <List key={46}>
                <ListItem>
                <ListIcon as={SiDocker} color="blue.300" ml={0} mr={1} mb={0.5}/>
              Docker
                </ListItem>
              </List>
            ]}
            gh_link={"https://gitlab.com/est-kim/wardrobify"}
            video="https://www.youtube.com/embed/9hsmgO7WXVs"
          ></ProjectCardItem>

          <ProjectCardItem
            title="Conference GO"
            desc="Developed and designed an application to manage conferences, locations, presentations, and attendees with user authentication, database integration, responsive design, built-in user system, and form handling using Python, Django, HTML, and CSS while implementing RESTful APIs. "
            icon="/media/home/projects-confgo-icon.png"
            tags={[
              <List key={47}>
                <ListItem>
                <ListIcon as={IoLogoReact} color="cyan.300" ml={0} mr={1} mb={0.5}/>
              React.js
                </ListItem>
              </List>,
              <List key={48}>
                <ListItem>
                <ListIcon as={SiDjango} color="green.800" ml={0} mr={1} mb={0}/>
              Django 4
                </ListItem>
              </List>,
              <List key={49}>
                <ListItem>
                  <ListIcon as={IoLogoJavascript} color="yellow.400" ml={0} mr={1} mb={0.5}/>
                  JavaScript ES6
                </ListItem>
              </List>,
              <List key={50}>
                <ListItem>
                  <ListIcon as={IoLogoPython} color="blue.500" ml={0} mr={1} mb={0.5}/>
                  Python 3
                </ListItem>
              </List>,
              <List key={51}>
                <ListItem>
                <ListIcon as={SiBootstrap} color="purple.600" ml={0} mr={1} mb={0.5}/>
              Bootstrap
                </ListItem>
              </List>,
              <List key={52}>
                <ListItem>
                <ListIcon as={IoLogoHtml5} color="red.500" ml={0} mr={1} mb={0.5}/>
              HTML5
                </ListItem>
              </List>,
              <List key={53}>
                <ListItem>
                <ListIcon as={IoLogoCss3} color="blue.600" ml={0} mr={1} mb={0.5}/>
              CSS
                </ListItem>
              </List>,
              <List key={54}>
                <ListItem>
                <ListIcon as={SiDocker} color="blue.300" ml={0} mr={1} mb={0.5}/>
              Docker
                </ListItem>
              </List>
            ]}
            gh_link={"https://gitlab.com/est-kim/conference-go-2"}
            video="https://www.youtube.com/embed/L0ChSs9DdTQ"
          ></ProjectCardItem>
          <ProjectCardItem
            title="Pibu"
            desc="Pibu is an e-commerce website that I founded. While I did not personally write the code for this website, I take pride in having built this business from the ground up. Working closely with a team of 3 UI/UX researchers and designers, I provided guidance on branding and sourced products after rigorous testing. Additionally, I managed the website, shipping and logistics myself, outsourced a Shopify web developer, and executed my own marketing strategy. "
            icon="/media/home/projects-pibu-icon.png"
            tags={[
              <List key={55}>
                <ListItem>
                <ListIcon as={SiShopify} color="#7bba27" ml={0} mr={1} mb={0.5}/>
              Shopify
                </ListItem>
              </List>,
              <List key={56}>
                <ListItem>
                <ListIcon as={CgWebsite} color="grat.400" ml={0} mr={1} mb={0.5}/>
              UI/UX
                </ListItem>
              </List>,
              <List key={57}>
                <ListItem>
                  <ListIcon as={SiGoogleanalytics} color="orange.400" ml={0} mr={1} mb={0.5}/>
                  Google Analytics
                </ListItem>
              </List>,
              <List key={58}>
                <ListItem>
                  <ListIcon as={IoLogoInstagram} color="pink.600" ml={0} mr={1} mb={0.5}/>
                  Instagram Marketing
                </ListItem>
              </List>,
              <List key={59}>
                <ListItem>
                  <ListIcon as={SiFacebook} color="blue.600" ml={0} mr={1} mb={0.5}/>
                  Facebook Marketing
                </ListItem>
              </List>,
              <List key={60}>
                <ListItem>
                <ListIcon as={SiMinutemailer} color="green.200" ml={0} mr={1} mb={0.5}/>
              Klaviyo
                </ListItem>
              </List>
            ]}
            video="https://www.youtube.com/embed/rqDAr_NAk_8"
          ></ProjectCardItem>
        </Stack>
      </Stack>
    </Flex>
  );
}

export default ProjectList;
