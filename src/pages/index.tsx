import { Flex, Text, Divider } from '@chakra-ui/react';

import { Header } from '../components/Header';
import { HomeBanner } from '../components/HomeBanner';
import { Swiper } from '../components/Swiper';
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
      
        <Text
          fontSize="36px"
          fontWeight="normal"
          lineHeight="54px"
          textAlign="center"
          my="52px"
        >
          Vamos nessa? <br /> Então escolha seu continente
        </Text>

        <Swiper />
      </Flex>
    </Flex>
  )
}
