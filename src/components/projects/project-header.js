import { Box, Heading, Image, Stack, useMediaQuery, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ProjectList from "./projects";

export default function ProjectHeader() {
  const [desktopQuery] = useMediaQuery("(min-width: 700px)");
  const [isMinWidth, setIsMinWidth] = useState(false);
  const { colorMode } = useColorMode();

  useEffect(() => {
    if (desktopQuery !== isMinWidth) {
      setIsMinWidth(desktopQuery);
    }
  }, [isMinWidth, desktopQuery]);

  return (
    <Stack>
      <Stack mt={isMinWidth ? 15 : 0}>
        <Box align={"center"}>
          <Image
            src={
              colorMode === "dark"
                ? "/media/projects/corgiwhitetransparent.svg"
                : "/media/projects/corgiblacktransparent.svg"
            }
            alt="Project Header Picture"
            backgroundColor="transparent"
            boxShadow="none"
            height="100px"
            mt="0"
            display={isMinWidth ? "none" : "block"}
          />
        </Box>
        <Box>
          <Image
            src={
              colorMode === "dark"
                ? "/media/projects/corgiwhitetransparent.svg"
                : "/media/projects/corgiblacktransparent.svg"
            }
            alt="Profile Picture"
            backgroundColor="transparent"
            boxShadow="none"
            height="185px"
            mt="-5"
            mx="auto"
            display={isMinWidth ? "block" : "none"}
          />
        </Box>

        <Box my={isMinWidth ? 10 : 3}>
          <Heading my={"2"} fontSize="3xl" fontWeight="bold">
            {"Featured Projects"}
          </Heading>
        </Box>
      </Stack>
      <Box>
        <ProjectList></ProjectList>
      </Box>
    </Stack>
  );
}
