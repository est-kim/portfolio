import {
  Stack,
  Heading,
  Flex,
  Box,
  Text,
  Image,
  useMediaQuery,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import React from "react";

export default function HomeProfile() {
  const { colorMode } = useColorMode();
  const [desktopQuery] = useMediaQuery("(min-width: 700px)");
  const [isMinWidth, setIsMinWidth] = useState(false);

  useEffect(() => {
    if (desktopQuery !== isMinWidth) {
      setIsMinWidth(desktopQuery);
    }
  }, [isMinWidth, desktopQuery]);

  return (
    <Stack>
      <Flex direction={isMinWidth ? "row" : "column"} mt={isMinWidth ? 15 : 0}>
        <Image
          src={
            colorMode === "dark"
            ? "/media/home/girldarkmode.svg"
            : "/media/home/girllightmode.svg"
          }
          alt="Profile Picture"
          borderRadius="full"
          backgroundColor="transparent"
          boxShadow="none"
          width="200px"
          height="160px"
          mt="3"
          display={isMinWidth ? "none" : "block"}
        />
        {/* <Image
          src="/media/home/metransparent.svg"
          alt="Profile Picture"
          borderRadius="full"
          backgroundColor="transparent"
          boxShadow="none"
          width="100px"
          height="160px"
          mt="3"
          display={isMinWidth ? "none" : "block"}
        /> */}

        <Box my={isMinWidth ? 20 : 3}>
          <Heading fontSize="4xl" fontWeight="bold">
            {"Esther Kim"}
          </Heading>
          <Text my={2} fontWeight={"500"} >
            {"Fullstack Software Engineer"}
          </Text>
          <Text my={1} fontWeight={"500"} >
            {"Striving to be 1% better every day"}
          </Text>

          <Text my={2} color={colorMode === "dark" ? "gray.300" : "gray.700"}>
            {"Irvine, California"}
          </Text>
        </Box>

        <Spacer />
        <Image
          src={
            colorMode === "dark"
            ? "/media/home/girldarkmode.svg"
            : "/media/home/girllightmode.svg"
          }
          alt="Profile Picture"
          backgroundColor="transparent"
          boxShadow="none"
          height="285px"
          mt="0px"
          // mx="100px"
          display={isMinWidth ? "block" : "none"}
        />
      </Flex>
    </Stack>
  );
}
