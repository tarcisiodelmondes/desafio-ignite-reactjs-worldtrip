import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    light: {
      50: "#FFFFFF",
      100: "#F5F8FA",
      300: "#DADADA",
    },
    dark: {
      50: "#999999",
      700: "#47585B",
      900: "#000000",
    },
    yellow: {
      500: "#FFBA08",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "light.100",
        color: "dark.700",
      },
    },
  },
});
