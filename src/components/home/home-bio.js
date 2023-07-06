import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  IconButton,
  Stack,
  Text,
  useColorMode,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React, { useEffect, useState } from "react";

function TextLink2({ link, name }) {
  const { colorMode } = useColorMode("black", "white");
  return (
    <NextLink href={link} passHref>
      <IconButton
        as="a"
        // leftIcon={icon}
        target="_blank"
        fontWeight="normal"
        variant="link"
        color={colorMode === "dark" ? "white" : "dark"}
      >
        <Text color={colorMode === "dark" ? "white" : "dark"}>{name} </Text>
      </IconButton>
    </NextLink>
  );
}
export default function Bio() {
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
        {/* <Box my={1}>
          <Heading fontSize="3xl" fontWeight="bold">
            Bio
          </Heading>
        </Box> */}
        <VStack>
          <Box textAlign="left">
            <Text>
              {
                "Hi! I'm Esther - a software engineer with a passion for creating visually appealing websites that leave a lasting positive impression on users. I enjoy exploring new technologies to upgrade my skillset and enhance my abilities. My constant pursuit of self-improvement has fueled my drive to consistently strive for excellence, always pushing myself to achieve even the slightest bit of progress each day. Most importantly, I take pride in leveraging my expertise to assist and make a meaningful impact on others."
              }
            </Text>
          </Box>

          <Box textAlign="left">
            <Text>
              {
                "In my free time, I enjoy trying new restaurants, spending time with friends, traveling, playing pickleball, and going to music festivals! If you'd like to chat, you can reach me at "
              }
              <u>
                <TextLink2
                  link="mailto: estherkimdev@gmail.com"
                  name="estherkimdev@gmail.com"
                  icon={<ExternalLinkIcon />}
                ></TextLink2>
              </u>
              {"."}
            </Text>
          </Box>
        </VStack>
      </Stack>
    </Flex>
  );
}
