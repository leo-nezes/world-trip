import { Box, Heading, Text } from "@chakra-ui/react";

export function Description() {
  return(
    <Box>
      <Heading
        mb="5"
        fontSize="36px"
        color="light.800"
        fontWeight="medium"
      >
        5 Continentes, <br /> infinitas possibilidades.
      </Heading>
      <Text
        fontSize="20px"
        color="light.600"
        fontWeight="normal"
      >
        Chegou a hora de tirar do papel a viagem que você <br />sempre sonhou.
      </Text>
    </Box>
  );
}