import { Flex, Link, Text } from "@chakra-ui/react";

interface SwiperLinkProps {
  name: string;
  description: string;
}

export function SwiperLink({ name, description }: SwiperLinkProps) {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      w="100%"
      h="100%"
      py="auto"
    >
      <Link
        href="#"
        display="flex"
        flexDirection="column"
        w="100%"
        h="100%"
        justifyContent="center"
        alignItems="center"
        textDecoration="none"
        textStyle=""
        fontWeight="bold"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          color="light.800"
          fontSize="48px"
        >
          {name}
        </Text>
        <Text
          color="light.600"
          fontSize="24px"
        >
          {description}
        </Text>
      </Link>
    </Flex>
  );
}