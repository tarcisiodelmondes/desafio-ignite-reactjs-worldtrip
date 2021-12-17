import { Box, Flex, Image, Text } from "@chakra-ui/react";

type Countries = {
  name: string;
  flag: string;
  cities: City[];
};

type City = {
  name: string;
  image: string;
};

interface ContinentType {
  name: string;
  image: string;
  description: string;
  countries: Countries[];
}

interface CityProps {
  country: Omit<Countries, "cities">;
  city: City;
}

export function City({ city, country }: CityProps) {
  return (
    <Box maxW="256px" w="100%" bg="light.100" borderRadius="4px">
      <Image
        src={city.image}
        alt={city.name}
        w="100%"
        h="173px"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
      />
      <Box
        border="1px solid transparent"
        borderBottomColor="yellow.500"
        borderLeftColor="yellow.500"
        borderRightColor="yellow.500"
      >
        <Flex
          mt="1.125rem"
          px="6"
          pb="6"
          justifyContent="space-between"
          align="center"
        >
          <Box fontFamily="Barlow">
            <Text fontSize="xl" fontWeight="semibold">
              {city.name}
            </Text>

            <Text color="dark.50" fontWeight="medium" mt="3">
              Reino Unido
            </Text>
          </Box>

          <Image
            src={country.flag}
            alt={country.name}
            maxW="30px"
            maxH="30px"
          />
        </Flex>
      </Box>
    </Box>
  );
}
