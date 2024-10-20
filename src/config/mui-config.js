import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 300,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    h6: {
      fontWeight: 600,
      fontSize: "18px",
      color: "#274C5B",
    },
    h2: {
      fontSize: "36px",
      fontWeight: 400,
      color: "#68A47F",
    },
    products: {
      fontSize: "59px",
      fontWeight: 800,
      color: "#274C5B",
    },
    titles: {
      color: "#274C5B",
    },
    logo: {
      fontFamily: '"Yellowtail", cursive',
      fontSize: "36px",
      fontWeight: 400,
      color: "#7EB693",
    },
    logos: {
      fontFamily: '"Yellowtail", cursive',
      fontSize: "22px",
      fontWeight: 400,
      color: "#7EB693",
    },
    logo2: {
      fontFamily: '"Yellowtail", cursive',
      fontSize: "36px",
      fontWeight: 400,
      color: "#fff",
    },
  },
  palette: {
    primary: {
      main: "#618C78",
      50: "#F0F5F2",
      100: "#DEE8E3",
      200: "#C0D3CA",
      300: "#9FBCAE",
      400: "#7EA593",
      500: "#618C78",
      600: "#4D6F5F",
      700: "#3A5448",
      800: "#283931",
      900: "#131B17",
      950: "#0A0F0D",
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          width: "100%", // Ensures container takes full width
          boxSizing: "border-box", // Prevents overflow by including padding in width calculations
        },
        maxWidthXs: {
          maxWidth: "100%", // Make it full width for xs breakpoint
        },
        maxWidthSm: {
          maxWidth: "1300px", // Custom max width for sm breakpoint
        },
        maxWidthMd: {
          maxWidth: "1500px", // Custom max width for md breakpoint
        },
      },
    },
  },
});
