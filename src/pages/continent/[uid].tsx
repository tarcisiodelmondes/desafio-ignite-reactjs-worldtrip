import {
  Box,
  Flex,
  HStack,
  Grid,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { Header } from "../../components/Header";
import { Banner } from "../../components/Continent/Banner";
import { Info } from "../../components/Continent/Info";
import { api } from "../../services/api";
import { City } from "../../components/Continent/City";

type Countries = {
  name: string;
  flag: string;
  cities: Cities[];
};

type Cities = {
  name: string;
  image: string;
};

interface ContinentType {
  name: string;
  image: string;
  description: string;
  countries: Countries[];
}

interface ContinentProps {
  continent: ContinentType;
}

export default function Continent({ continent }: ContinentProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <>
      <Header />

      <Banner continent={continent} isWideVersion={isWideVersion} />

      <Flex
        flexDirection={isWideVersion ? "row" : "column"}
        justify="space-between"
        align="center"
        maxW="1160px"
        mx="auto"
        mt={[6, 6, 20]}
        px="4"
      >
        <Text maxW="600px" fontSize={["sm", "sm", "2xl"]}>
          {continent.description}
        </Text>

        <HStack
          mt={!isWideVersion ? 4 : 0}
          spacing={["2.43rem", "2.43rem", "2.625rem"]}
          align={isWideVersion ? "baseline" : "center"}
          alignSelf={isWideVersion ? "center" : "flex-start"}
          justify={isWideVersion ? "flex-end" : "normal"}
          maxW="600px"
          w="100%"
          mx="auto"
        >
          <Info number="50" text="países" />
          <Info number="60" text="línguas" />
          <Info number="27" text="cidades +100" icon={true} />
        </HStack>
      </Flex>

      <Box maxW="1160px" mx="auto" mt={["8", "8", "20"]} px="4" mb="4">
        <Text
          fontSize={["2xl", "2xl", "4xl"]}
          lineHeight={["9", "9", "3.375rem"]}
          fontWeight="medium"
        >
          Cidades +100
        </Text>

        <Box w="100%" mt={["5", "5", "10"]}>
          <Flex
            gap="4"
            justifyContent={isWideVersion ? "space-between" : "center"}
            flexWrap="wrap"
          >
            {continent.countries.map((country) => {
              return country.cities.map((city) => {
                return <City key={city.name} city={city} country={country} />;
              });
            })}
          </Flex>
        </Box>
      </Box>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { uid } = params;

  const { data } = await api.get<ContinentType>(`/${uid}`);

  return {
    props: { continent: data },
    revalidate: 60 * 60 * 60,
  };
};
