import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    dark: {
      "900": "#000000", //Black
      "800": "#47585B", //Dark Headings and text
      "700": "#999999" //Dark Info
    },
    light: {
      "500": "#F5F8FA", //Light Headings and Text
      "300": "#DADADA", //Light Info
      "100": "#fff" //White
    },
    highlight: {
      "400": "#FFBA08", //Highlight
    }
  },
  styles: {
    global: {
      body: {
        bg: "light.500",
        color: "dark.800"
      }
    }
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins"
  }
});