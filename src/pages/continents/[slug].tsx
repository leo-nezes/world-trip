import { Flex } from "@chakra-ui/react";
import { ContinentBanner } from "../../components/ContinentBanner";
import { ContinentInformation } from "../../components/ContinentInformation";
import { Header } from "../../components/Header";

export default function Continent() {
  return (
    <Flex
      direction="column"
    >
      <Header />

      <ContinentBanner />

      <ContinentInformation />

    </Flex>
  );
}