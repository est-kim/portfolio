import {
  Box,
  Button,
  HStack,
  Icon,
  Image,
  LinkBox,
  Center,
  Spacer,
  Stack,
  Tag,
  TagLabel,
  Text,
  useColorMode,
  useColorModeValue,
  useMediaQuery,
  VStack,
  AspectRatio
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import { IoLogoGitlab } from "react-icons/io5";

function ProjectCardItem({ title, desc, video, icon, tags, gh_link, ...rest }) {
  const { colorMode } = useColorMode();
  const [desktopQuery] = useMediaQuery("(min-width: 700px)");
  const [isMinWidth, setIsMinWidth] = useState(false);
  const gitlab_border_colors = useColorModeValue("black", "white");
  useEffect(() => {
    if (desktopQuery !== isMinWidth) {
      setIsMinWidth(desktopQuery);
    }
  }, [isMinWidth, desktopQuery]);

  return (
    <LinkBox
      as="article"
      {...rest}
      mt={3}
      bgColor={colorMode === "dark" ? "brand.800" : "brand.200"}
    >
      <Stack
        p={0}

        overflow={"hidden"}
        textAlign="left"
        spacing={0}
      >
        <Box
        // p={2}
        position="relative"
        overflow={"hidden"}>
          <HStack>
            <Box mb={3}>
            <HStack>
              <Image
              mt={-1}
              height="27px"
              width="27px"
              layout="fixed"
              src={icon}
              alt={title}
              ></Image>
                    <Text my={1} fontWeight="bold" fontSize="2xl">

                {title}
              </Text>
            </HStack>

            </Box>
            <Spacer></Spacer>
            {gh_link && (
            <Box>
              <VStack mt={-5}>
                <NextLink
                  href={gh_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    mb={-7}
                    variant="outline"
                    alignItems="center"
                    position={"relative"}
                    cursor="pointer"
                    // border={"1px solid"}
                    borderRadius={"3px"}
                    borderColor={gitlab_border_colors}
                    textTransform={"uppercase"}
                    padding={"0px 5px "}
                    transition={"all .2s ease"}
                    transition-timing-function="spring(4 100 10 10)"
                    _hover={{
                      transform: "translateY(-2px)",
                      shadow: "lg",
                    }}
                  >
                    <HStack>
                      <Icon as={IoLogoGitlab} align={"center"} boxSize={"18px"} />
                    </HStack>

                  </Button>
                </NextLink>
              </VStack>
            </Box>
          )}
          </HStack>
     <Stack isInline overflow={"hidden"} overflowWrap={false}>
                  <Box mb={4} mt={0}>
                    {tags.map((tag) => (
                      <Tag
                        key={tag}
                        borderRadius="sm"
                        variant="outline"
                        mr={2}
                        // mt={isMinWidth ? "0" : "3"}
                        mt="1"
                      >
                        <TagLabel>
                          <Text color={gitlab_border_colors} fontSize={"sm"}>
                            {tag}
                          </Text>
                        </TagLabel>
                      </Tag>
                    ))}
                  </Box>
                </Stack>
          <VStack align="start" justify="flex-start">

            <HStack>
              <Stack>
                <Text mt={isMinWidth ? "0" : "1"} fontSize="md">
                  {desc}
                </Text>
                <AspectRatio maxW="100%" ratio={21/9}>
                  <iframe
                    title="YouTube video player"
                    src={video}
                    allowFullScreen
                  />
                </AspectRatio>
              </Stack>
            </HStack>
          </VStack>
        </Box>
      </Stack>
      <Center mt={4} mb={3}>
        — ✽ —
      </Center>
    </LinkBox>
  );
}
ProjectCardItem.defaultProps = {
  gh_link: "",
  icon: "",
};

export default ProjectCardItem;
