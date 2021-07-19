import { Flex, Text, Divider } from '@chakra-ui/react';

import { Header } from '../components/Header';
import { HomeBanner } from '../components/HomeBanner';
import { TravelTypes } from '../components/TravelTypes';

export default function Home() {
  return (
    <Flex 
      direction="column"
      h="100%"
      pb="10px"
    >
      <Header />

      <HomeBanner />
      
      <Flex
        as="main"
        direction="column"
        w="100%"
        padding="100px"
      >
        <TravelTypes />

        <Divider 
          w="90px"
          mx="auto"
          border="2px solid #47585B"
        />
      
        <Text>Footer</Text>
        <Text>Footer</Text>
        <Text>Footer</Text>
        <Text>Footer</Text>
      </Flex>

    </Flex>
  )
}
