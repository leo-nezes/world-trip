import { Box, Flex, HStack, Icon, SimpleGrid, Text, Tooltip, VStack } from "@chakra-ui/react";
import { FiAlertCircle } from 'react-icons/fi';

export function Information() {
  return (
    <Flex
      justify="space-between"
    >
      <Box
        w="600px"
        h="211px"
      >
        <Text
          as="p"
          fontSize="24"
          textAlign="justify"
        >
          A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
        </Text>
      </Box>
      <HStack
        alignItems="center"
        spacing="40px"
      >
        <VStack
          direction="column"
        >
          <Text
            as="span"
            fontWeight="600"
            fontSize="48px"
            lineHeight="72px"
            color="highlight.900"
          >
            50
          </Text>
          <Text
            as="span"
            fontWeight="600"
            fontSize="24px"
            lineHeight="36px"
            color="dark.700"
          >
            países
          </Text>
        </VStack>

        <VStack
          direction="column"
        >
          <Text
            as="span"
            fontWeight="600"
            fontSize="48px"
            lineHeight="72px"
            color="highlight.900"
          >
            60
          </Text>
          <Text
            as="span"
            fontWeight="600"
            fontSize="24px"
            lineHeight="36px"
            color="dark.700"
          >
            línguas
          </Text>
        </VStack>

        <VStack
          direction="column"
        >
          <Text
            as="span"
            fontWeight="600"
            fontSize="48px"
            lineHeight="72px"
            color="highlight.900"
          >
            27
          </Text>
          <Text
            as="span"
            fontWeight="600"
            fontSize="24px"
            lineHeight="36px"
            color="dark.700"
          >
            cidades +100 
            <Tooltip label="Information">
              <Icon 
                as={FiAlertCircle}
                fontSize="16px"
                pl="5px"
              />
            </Tooltip>
          </Text>
        </VStack>
      </HStack>
    </Flex>
  );
}