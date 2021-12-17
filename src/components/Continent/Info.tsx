import {
  Box,
  Flex,
  Text,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
} from "@chakra-ui/react";

interface InfoProps {
  number: string;
  text: string;
  icon?: boolean;
}

export function Info({ text, number, icon = false }: InfoProps) {
  return (
    <Box>
      <Text
        fontSize={["2xl", "2xl", "5xl"]}
        fontWeight="semibold"
        color="yellow.500"
        as="span"
      >
        {number}
      </Text>
      <Flex>
        <Text
          fontSize={["lg", "lg", "2xl"]}
          fontWeight={["regular", "regular", "semibold"]}
        >
          {text}
        </Text>

        {icon && (
          <Popover>
            <PopoverTrigger>
              <Image cursor="pointer" ml="5px" src="/info.svg" alt="Info" />
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Confirmation!</PopoverHeader>
              <PopoverBody>
                Are you sure you want to have that milkshake?
              </PopoverBody>
            </PopoverContent>
          </Popover>
        )}
      </Flex>
    </Box>
  );
}
