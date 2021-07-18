import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <Flex direction="column" h="100vh" w="100vw">
      <Header />

      <Flex
        as="section"
        w="100vw"
        h="368px"
        px="36"
        pt="20"
        pb="80px"
        bg="url('/images/banner-background.png')"
      >
        <Box>
          <Heading
            fontSize="36px"
            color="light.800"
            fontWeight="medium"
          >
            5 Continentes, infinitas possibilidades.
          </Heading>
          <Text>Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
        </Box>
        <Box>
          <Image 
            src="/images/airplane.svg"
            alt="Airplane on banner"
            w="417px"
            h="270px"
          />
        </Box>
      </Flex>
      <Box></Box>
    </Flex>
  )
}
