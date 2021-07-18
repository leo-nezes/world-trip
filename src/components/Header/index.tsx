import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      as="header"
      w="100vw"
      maxWidth={1480}
      m="0 auto"
      py="6"
    >
      <Image 
        src="/images/logo.svg"
        alt="World Trip"
        w="184px"
        h="45px"
        mx="auto"
      />
    </Flex>
  );
}