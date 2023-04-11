import {
  Box, Flex, Heading, ListItem, Text, UnorderedList, useMediaQuery
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import TextLink from "./text-link";

export default function PastDoings() {
  const [desktopQuery] = useMediaQuery("(min-width: 700px)");
  const [isMinWidth, setIsMinWidth] = useState(false);

  useEffect(() => {
    if (desktopQuery !== isMinWidth) {
      setIsMinWidth(desktopQuery);
    }
  }, [isMinWidth, desktopQuery]);

  return (
    <Flex direction="column">
      <Box mb={3}>
        <Heading fontSize="3xl" fontWeight="bold">
          {/* Past experiences 🚌 */}
          Previously...
        </Heading>
      </Box>

      <UnorderedList>

        {/* <Divider my={1.5} /> */}
        <ListItem>
          <Box textAlign="left" my={1}>
            <Text>
              <strong>{"Fullstack Software Engineering Bootcamp Graduate"}</strong>
              {" from "}
              <TextLink
                link="https://www.hackreactor.com/"
                name="Hack Reactor"
                // icon={<ExternalLinkIcon />}
              ></TextLink>
              {
                ", an intensive 19-week full-time coding bootcamp with over 1000 hours spent learning Python, JavaScript, React, Docker, Git, Django, FastAPI, and state-of-the-art practices such as microservices, CI/CD, network security, and domain-driven design."
              }
            </Text>
          </Box>
        </ListItem>

        {/* <Divider my={1.5} /> */}
        <ListItem>
          <Box textAlign="left" my={1}>
            <Text>
              <strong>Purchasing & Exporting Agent</strong> {""}{" "}
              {" for "}
              <strong>{"Pantree Enterprises"}</strong>{" "}
              {
                " - while concurrently self studying web development, I worked as a Purchasing and Exporting Agent to further develop valuable soft skills such as problem solving, as I was responsible for sourcing and purchasing goods and materials for customers by finding the best solutions for each customer's needs. My experience liaising with manufacturers, coordinating with external customers, and managing relationships with key suppliers strengthened my communication skills. This experience also required a high level of organization as I was responsible for authorizing payments, maintaining receipts, records, inventories, and creating various documents such as quotations, purchase orders, commercial invoices, and packing lists."
              }
            </Text>
          </Box>
        </ListItem>

        {/* <Divider my={1.5} /> */}
        <ListItem>
          <Box textAlign="left" my={1}>
            <Text>
              <strong>{"Founder of Pibu"}</strong>

              {
                " - founding and launching my own e-commerce skincare product platform was the pivotal moment in what deepened and solidified my passion for software engineering. As I had built almost every aspect of the business from scratch, the technical skill to code my own website was the one skill I yearned to be able to do myself one day. It was through building my own online business that I found myself fully immersed and amazed by the complexity and possibilities of what a website and business entails which drove me to fully commit to becoming a great software engineer."
              }
            </Text>
          </Box>
        </ListItem>

        {/* <Divider my={1.5} /> */}
        <ListItem>
          <Box textAlign="left" my={1}>
            <Text>
              <strong>{"Microsoft Dynamics 365/CRM Recruitment Consultant"}</strong>
              {" at "}
              <TextLink
                link="https://www.nigelfrank.com/"
                name="Nigel Frank International"
                // icon={<ExternalLinkIcon />}
              />
              {
                " - specialized in the recruitment and delivery of Microsoft Dynamics CRM and AWS Security professionals throughout California. This experience taught me how to understand the technical skills and requirements needed for different positions as I sourced and qualified 20+ candidates weekly through the use of job marketing campaigns, ATS, referrals, and online platforms such as LinkedIn, Dice, Monster, GitHub, AdCourier, and BroadBean. This position required a high level of attention to detail, as I was responsible for reviewing resumes, job applications, and screening candidates. "
              }
            </Text>
          </Box>
        </ListItem>
        <ListItem>
          <Box textAlign="left" my={1}>
            <Text>
              <strong>{"Head Server/Assistant Manager"}</strong>
              {" at "}
              <TextLink
                link="https://www.yelp.com/biz/house-of-shabu-shabu-irvine"
                name="House of Shabu Shabu"
                // icon={<ExternalLinkIcon />}
              />
              {
                " - while taking Computer Science courses at Irvine Valley College, I concurrently served as the head server and assistant manager, an experience that significantly fortified my interpersonal skills and abilities. I was promoted from server to lead server within the first month based on exemplary job performance and work ethic. I am also proud of receiving the highest number of 5-star Yelp reviews with my name during my time there."
              }
            </Text>
          </Box>
        </ListItem>

        {/* <Divider my={1.5} /> */}
      </UnorderedList>
    </Flex>
  );
}
