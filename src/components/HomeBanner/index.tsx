import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Description } from "./Description";

export function HomeBanner() {
  return(
    <Flex
      as="section"
      w="100%"
      h="368px"
      px="36"
      pt="20"
      pb="80px"
      bg="url('/images/banner-background.png')"
      bgRepeat="no-repeat"
      justify="space-between"
    >
      <Description />

      <Box>
        <Image 
          src="/images/airplane.svg"
          alt="Airplane on banner"
          w="417px"
          h="270px"
          transform="rotate(3deg)"
        />
      </Box>
    </Flex>
  );
}