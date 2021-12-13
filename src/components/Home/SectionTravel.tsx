import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";

interface SectionTravelProps {
  isWideVersion: boolean;
}

export function SectionTravel({ isWideVersion }: SectionTravelProps) {
  return (
    <Grid
      templateRows={isWideVersion ? "1fr" : "repeat(3, 1fr)"}
      templateColumns={isWideVersion ? "repeat(5, 1fr)" : "repeat(2, 1fr)"}
      px="3.125rem"
      mt={["9", "9", "7.125rem"]}
      rowGap={!isWideVersion && "6"}
      colGap={4}
      justifyItems={isWideVersion && "center"}
    >
      <GridItem>
        <Flex flexDir={isWideVersion ? "column" : "row"} align="center">
          {isWideVersion ? (
            <Image size={85} src="/cocktail.svg" alt="Drink" />
          ) : (
            <Box w="8px" h="8px" mr="5" bg="yellow.500" borderRadius="full" />
          )}
          <Text
            fontWeight={["500", "500", "600"]}
            whiteSpace="nowrap"
            fontSize={["lg", "lg", "2xl"]}
            lineHeight={["27px", "36px"]}
            mt={isWideVersion ? 6 : 0}
          >
            vida noturna
          </Text>
        </Flex>
      </GridItem>

      <GridItem>
        <Flex
          flexDir={isWideVersion ? "column" : "row"}
          align="center"
          justify="flex-end"
        >
          {isWideVersion ? (
            <Image size={85} src="/surf.svg" alt="Surf" />
          ) : (
            <Box w="8px" h="8px" mr="5" bg="yellow.500" borderRadius="full" />
          )}
          <Text
            fontWeight={["500", "500", "600"]}
            fontSize={["lg", "lg", "2xl"]}
            lineHeight={["27px", "36px"]}
            mt={isWideVersion ? 6 : 0}
          >
            praia
          </Text>
        </Flex>
      </GridItem>

      <GridItem>
        <Flex flexDir={isWideVersion ? "column" : "row"} align="center">
          {isWideVersion ? (
            <Image size={85} src="/building.svg" alt="Edifício" />
          ) : (
            <Box w="8px" h="8px" mr="5" bg="yellow.500" borderRadius="full" />
          )}
          <Text
            fontWeight={["500", "500", "600"]}
            fontSize={["lg", "lg", "2xl"]}
            lineHeight={["27px", "36px"]}
            mt={isWideVersion ? 6 : 0}
          >
            moderno
          </Text>
        </Flex>
      </GridItem>

      <GridItem>
        <Flex
          flexDir={isWideVersion ? "column" : "row"}
          align="center"
          justify="flex-end"
        >
          {isWideVersion ? (
            <Image size={85} src="/museum.svg" alt="Museu" />
          ) : (
            <Box w="8px" h="8px" mr="5" bg="yellow.500" borderRadius="full" />
          )}
          <Text
            fontWeight={["500", "500", "600"]}
            fontSize={["lg", "lg", "2xl"]}
            lineHeight={["27px", "36px"]}
            mt={isWideVersion ? 6 : 0}
          >
            clássico
          </Text>
        </Flex>
      </GridItem>

      <GridItem colSpan={isWideVersion ? 1 : 2}>
        <Flex
          flexDir={isWideVersion ? "column" : "row"}
          align="center"
          justify="center"
        >
          {isWideVersion ? (
            <Image size={85} src="/earth.svg" alt="Terra" />
          ) : (
            <Box w="8px" h="8px" mr="5" bg="yellow.500" borderRadius="full" />
          )}
          <Text
            fontWeight={["500", "500", "600"]}
            fontSize={["lg", "lg", "2xl"]}
            lineHeight={["27px", "36px"]}
            mt={isWideVersion ? 6 : 0}
          >
            e mais...
          </Text>
        </Flex>
      </GridItem>
    </Grid>
  );
}
