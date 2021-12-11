import { Flex, Image, useBreakpointValue } from "@chakra-ui/react";
import { useRouter } from "next/router";

export function Header() {
  const router = useRouter();
  const isHomePage = router.pathname;

  const comeBackButton = useBreakpointValue({
    base: "/mobile-chevron-left.svg",
    md: "/desktop-chevron-left.svg",
  });

  function handleBackHome() {
    router.push("/");
  }

  return (
    <Flex
      as="header"
      w="100%"
      h={["50px", "50px", "100px"]}
      pt={["1rem", "1rem", "1.69rem"]}
      pb={["1rem", "1rem", "1.69rem"]}
      pl="1rem"
      pr="1rem"
    >
      <Flex w="100%" alignItems="center" maxW="1160px" mx="auto">
        {isHomePage !== "/" && (
          <Image
            onClick={handleBackHome}
            src={comeBackButton}
            alt="Voltar"
            maxH="100%"
            cursor="pointer"
          />
        )}

        <Image
          alignSelf="center"
          src="/logo.svg"
          alt="Logo"
          maxH="100%"
          w="100%"
        />
      </Flex>
    </Flex>
  );
}
