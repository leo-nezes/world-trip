import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    highlight: {
      "900": "#FFBA08",
    },
    light: {
      "900": "#FFFFFF",
      "800": "#F5F8FA",
      "600": "#DADADA"
    },
    dark: {
      "900": "#000000",
      "700": "#47585B",
      "400": "#999999",
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'light.800',
        color: 'dark.700',
      }
    }
  }
});