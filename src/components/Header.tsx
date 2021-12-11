import {
  Flex,
  Image,
  useBreakpointValue,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

export function Header() {
  const router = useRouter();
  const isHomePage = router.pathname;

  const comeBackButton = useBreakpointValue({
    base: "/mobile-chevron-left.svg",
    md: "/desktop-chevron-left.svg",
  });

  return (
    <Flex
      as="header"
      w="100%"
      h={["50px", "50px", "100px"]}
      py={[4, 4, "1.69rem"]}
      px="4"
    >
      <Flex w="100%" alignItems="center" maxW="1160px" mx="auto">
        {isHomePage !== "/" && (
          <Link href="/" passHref>
            <ChakraLink>
              <Image
                src={comeBackButton}
                alt="Voltar"
                maxH="100%"
                cursor="pointer"
              />
            </ChakraLink>
          </Link>
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
