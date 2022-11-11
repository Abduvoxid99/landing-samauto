import { createTheme } from "@mui/material";
import { rem } from "utils/pxToRem";

const fontfamily =
  "'Montserrat', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif";

export default createTheme({
  typography: {
    fontFamily: [fontfamily].join(","),
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: `${rem(20)}`,
          paddingRight: `${rem(20)}`,
          "@media (min-width: 600px)": {
            paddingLeft: `${rem(15)}`,
            paddingRight: `${rem(15)}`,
          },
        },
        maxWidthLg: {
          "@media (min-width: 1280px)": {
            maxWidth: `${rem(1296)}`,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: `${rem(16)} ${rem(40)}`,
          fontWeight: 600,
          fontSize: rem(16),
          lineHeight: rem(20),
          borderRadius: rem(0),
          transition: "all 0.25s ease-in-out",
          textTransform: "none",
          "&:hover": {
            transform: "translateY(-1px)",
          },
        },
        textPrimary: {
          background: "var(--main-color)",
          color: "#fff",
          "&:hover": {
            background: "var(--main-color)",
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          margin: 0,
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: rem(0),
          boxShadow: "0px 1px 12px rgba(0, 0, 0, 0.08)",
        },
      },
    },
  },
});
