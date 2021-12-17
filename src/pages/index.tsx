import { Box, Text, useBreakpointValue, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Header } from "../components/Header";
import { Banner } from "../components/Home/Banner";
import { Divider } from "../components/Home/Divider";
import { SectionTravel } from "../components/Home/SectionTravel";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SwiperCore, { Pagination, Navigation } from "swiper";
import { useEffect, useState } from "react";
import { api } from "../services/api";
SwiperCore.use([Pagination, Navigation]);

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
          <Swiper
            pagination={{
              type: "bullets",
            }}
            loop={true}
            navigation={true}
          >
            {continents.map((continent) => (
              <SwiperSlide key={continent.name}>
                <Link href={`/continent?uid=${continent.uid}`}>
                  <a>
                    <Image
                      src={continent.image}
                      alt={continent.name}
                      style={{ filter: "brightness(.5)" }}
                      w="100%"
                      h="100%"
                      backgroundSize="cover"
                      backgroundRepeat="no-repeat"
                      position="absolute"
                      zIndex="hide"
                    />
                    <Box
                      position="absolute"
                      top="50%"
                      left="50%"
                      transform="auto"
                      translateX="-50%"
                      translateY="-50%"
                      zIndex="base"
                    >
                      <Text
                        color="light.100"
                        fontWeight="bold"
                        fontSize={["2xl", "2xl", "5xl"]}
                        as="span"
                      >
                        {continent.name}
                      </Text>
                      <Text
                        mt={[3, 3, 4]}
                        color="light.300"
                        fontWeight="bold"
                        fontSize={["sm", "sm", "2xl"]}
                      >
                        O continente mais antigo.
                      </Text>
                    </Box>
                  </a>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </>
  );
}
