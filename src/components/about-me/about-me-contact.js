import {
  Button,
  Flex,
  SimpleGrid,
  Text,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import { MdAlternateEmail, MdOutlinePictureAsPdf } from "react-icons/md";

export default function AboutMeContact() {
  const [desktopQuery] = useMediaQuery("(min-width: 700px)");
  const [isMinWidth, setIsMinWidth] = useState(false);
  const { colorMode } = useColorMode();

  useEffect(() => {
    if (desktopQuery !== isMinWidth) {
      setIsMinWidth(desktopQuery);
    }
  }, [isMinWidth, desktopQuery]);

  return (
    <Flex direction="column" display={["block", "block", "block", "block"]}>
      <SimpleGrid columns={[2, 2, 2, 2]} spacing={5} mt={5}>
        <NextLink href="mailto: estherkimdev@gmail.com" passHref>
          <Button
            as="a"
            target="_blank"
            size="md"
            leftIcon={<MdAlternateEmail />}
            borderRadius="sm"
            borderWidth="1px"
            colorScheme="grey"
            variant="outline"
            fontWeight="bold"
            border="2px solid transparent"
            _hover={{
              background: "red.100",
              color: colorMode === "light" ? "black" : "black",
              border: "1px solid",
              borderColor: "transparent",
            }}
          >
            <Text fontSize="sm" fontWeight="bold">
              {"Send an email"}
            </Text>
          </Button>
        </NextLink>

        <NextLink href="https://www.linkedin.com/in/kimesther117/" passHref>
          <Button
            as="a"
            target="_blank"
            size="md"
            leftIcon={<FaLinkedinIn />}
            borderRadius="sm"
            borderWidth="1px"
            colorScheme="grey"
            variant="outline"
            fontWeight="bold"
            border="2px solid transparent"
            _hover={{
              background: "blue.100",
              color: colorMode === "light" ? "black" : "black",
              border: "1px solid",
              borderColor: "transparent",
            }}
          >
            <Text fontSize="sm" fontWeight="bold">
              {"View LinkedIn"}
            </Text>
          </Button>
        </NextLink>

        <NextLink href="https://www.github.com/est-kim" passHref>
          <Button
            as="a"
            target="_blank"
            size="md"
            leftIcon={<FaGithubAlt />}
            borderRadius="sm"
            borderWidth="1px"
            colorScheme="grey"
            variant="outline"
            fontWeight="bold"
            border="2px solid transparent"
            _hover={{
              background: "yellow.100",
              color: colorMode === "light" ? "black" : "black",
              border: "1px solid",
              borderColor: "transparent",
            }}
          >
            <Text fontSize="sm" fontWeight="bold">
              {"View GitHub"}
            </Text>
          </Button>
        </NextLink>

        <NextLink
          href={"/media/about-me/EstherKimResume.pdf"}
          passHref
        >
          <Button
            as="a"
            target="_blank"
            size="md"
            leftIcon={<MdOutlinePictureAsPdf />}
            borderRadius="sm"
            borderWidth="1px"
            colorScheme="grey"
            variant="outline"
            fontWeight="bold"
            border="2px solid transparent"
            _hover={{
              background: "purple.100",
              color: colorMode === "light" ? "black" : "black",
              border: "1px solid",
              borderColor: "transparent",
            }}
          >
            <Text fontSize="sm" fontWeight="bold">
              {"View resume"}
            </Text>
          </Button>
        </NextLink>
      </SimpleGrid>
    </Flex>
  );
}
