import { Flex, Text } from "@chakra-ui/react";

export function ContinentBanner() {
  return (
    <Flex
      bg="url(https://images.unsplash.com/photo-1473905008190-69b1a3dc6dd7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmlnJTIwYmVuJTIwd2F0Y2h8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60) no-repeat"
      bgSize="cover"
      bgPosition="center"
      w="100%"
      h="500px"
    >
      <Text>Europa</Text>
    </Flex>
  );
}