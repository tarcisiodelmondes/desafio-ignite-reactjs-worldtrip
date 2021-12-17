import { Flex, Image, Text } from "@chakra-ui/react";

type Country = {
  name: string;
  flag: string;
  cities: [
    {
      name: string;
      image: string;
    }
  ];
};

interface ContinentType {
  name: string;
  image: string;
  country: Country[];
}

interface BannerProps {
  isWideVersion: boolean;
  continent: ContinentType;
}

export function Banner({ continent, isWideVersion }: BannerProps) {
  return (
    <Flex maxH="500px" position="relative">
      <Image
        src={continent.image}
        alt={continent.name}
        style={{ filter: "brightness(.5)" }}
        maxW="100%"
        maxH="100%"
        backgroundSize="contain"
        backgroundRepeat="no-repeat"
      />
      <Flex position="absolute" w="100%" h="100%" px="4">
        <Flex
          w="1160px"
          h="100%"
          mx="auto"
          align="center"
          justify={isWideVersion ? "flex-start" : "center"}
        >
          <Text
            color="light.300"
            fontWeight="semibold"
            fontSize={["1.75rem", "1.75rem", "5xl"]}
            alignSelf={isWideVersion ? "flex-end" : "center"}
            pb={isWideVersion ? "3.68rem" : "0"}
          >
            {continent.name}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
