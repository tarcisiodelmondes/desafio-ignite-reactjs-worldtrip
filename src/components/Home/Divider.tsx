import { Divider as ChakraDivider } from "@chakra-ui/react";

export function Divider() {
  return (
    <ChakraDivider
      mt="9"
      w={["60px", "90px"]}
      h="2px"
      mx="auto"
      bg="dark.700"
      orientation="horizontal"
    />
  );
}
