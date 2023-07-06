import {
  Box,
  Flex,
  ListItem,
  Text,
  UnorderedList,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export default function CurrentDoings() {
  const [desktopQuery] = useMediaQuery("(min-width: 700px)");
  const [isMinWidth, setIsMinWidth] = useState(false);

  useEffect(() => {
    if (desktopQuery !== isMinWidth) {
      setIsMinWidth(desktopQuery);
    }
  }, [isMinWidth, desktopQuery]);

  return (
    <Flex direction="column">
      <Box mt={0} mb={3}></Box>

      <UnorderedList>
        <ListItem>
          <Box textAlign="left" my={1}>
            <Text>
              <strong>{"Software Developer Intern at RadicalX"}</strong>
              {
                " - immersed in a broad array of projects, utilizing technologies like React, Stripe, Node.js, Material UI, and Firebase"
              }
            </Text>
          </Box>
        </ListItem>

        <ListItem>
          <Box textAlign="left" my={1}>
            <Text>
              <strong>{"Currently improving my skills in"}</strong>
              {" - React.js, JavaScript, Data Structures, and Algorithms"}
            </Text>
          </Box>
        </ListItem>
      </UnorderedList>
    </Flex>
  );
}
