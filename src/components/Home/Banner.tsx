import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

interface BannerProps {
  isWideVersion: boolean;
}

export function Banner({ isWideVersion }: BannerProps) {
  return (
    <Box px="1rem" py="1.75rem" backgroundImage="/background.png">
      <Flex maxW="1160px" mx="auto" align="center" justify="space-between">
        <Stack maxW="524px">
          <Heading
            color="light.100"
            fontWeight="500"
            fontSize={["xl", "xl", "4xl"]}
            lineHeight={["30px", "30px", "54px"]}
            mb={[2, 2, 5]}
          >
            5 Continentes,
            <br /> infinitas possibilidades.
          </Heading>
          <Text color="light.300" fontSize={["sm", "sm", "xl"]}>
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Stack>

        {isWideVersion && (
          <Image
            transform="auto"
            translateY="4.75rem"
            src="/airplane.svg"
            alt="Avião"
          />
        )}
      </Flex>
    </Box>
  );
}
