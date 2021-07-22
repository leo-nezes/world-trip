import { Box, Flex } from "@chakra-ui/react";
import { Cities } from "./Cities";
import { Information } from "./Information";

export function ContinentInformation() {
  return (
    <Flex
      as="main"
      direction="column"
      px="140px"
      pt="20"
      pb="35px"
    >
      <Information />

      <Cities />
    </Flex>
  );
}