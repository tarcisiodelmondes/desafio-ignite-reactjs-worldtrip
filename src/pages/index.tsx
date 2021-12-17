import { Box, Text, useBreakpointValue } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { Banner } from "../components/Home/Banner";
import { Divider } from "../components/Home/Divider";
import { HomeSwiper } from "../components/Home/HomeSwiper";
import { SectionTravel } from "../components/Home/SectionTravel";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useEffect, useState } from "react";
import { api } from "../services/api";

interface ContinentProps {
  uid: string;
  name: string;
  image: string;
}

export default function Home() {
  const [continents, setContinents] = useState<ContinentProps[]>([]);

  useEffect(() => {
    async function getContinents() {
      const { data } = await api.get<ContinentProps[]>("/continents");

      setContinents(data);
    }

    getContinents();
  }, []);

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <>
      <Header />

      <Banner isWideVersion={isWideVersion} />

      <Box as="main" maxW="1160px" mx="auto">
        <SectionTravel isWideVersion={isWideVersion} />
        <Divider />

        <Text
          mt={["6", "6", "3.25rem"]}
          textAlign="center"
          fontWeight="500"
          fontSize={["xl", "xl", "4xl"]}
          lineHeight={["1.875rem", "1.875rem", "3.375rem"]}
        >
          Vamos nessa?
          <br /> Então escolha seu continente
        </Text>

        <Box h="450px" mt={[5, 5, "3.25rem"]} mb={[6, 6, 10]}>
          <HomeSwiper continents={continents} />
        </Box>
      </Box>
    </>
  );
}
