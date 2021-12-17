import { Image, Text, Box, Link as ChakraLink } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import SwiperCore, { Pagination, Navigation } from "swiper";

SwiperCore.use([Pagination, Navigation]);

interface HomeSwiperProps {
  continents: {
    uid: string;
    name: string;
    image: string;
  }[];
}

export function HomeSwiper({ continents }: HomeSwiperProps) {
  return (
    <Swiper
      pagination={{
        type: "bullets",
      }}
      loop={true}
      navigation={true}
    >
      {continents.map((continent) => (
        <SwiperSlide key={continent.name}>
          <Link href={`/continent/${continent.uid}`} passHref>
            <ChakraLink
              w="100%"
              h="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Image
                src={continent.image}
                alt={continent.name}
                style={{ filter: "brightness(.5)" }}
                w="100%"
                h="100%"
                backgroundSize="cover"
                backgroundRepeat="no-repeat"
              />
              <Box position="absolute">
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
            </ChakraLink>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
