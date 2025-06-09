import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default:
        "linear-gradient(135deg, rgb(39, 44, 44) 0%, rgb(4, 13, 27) 100%)",
      paper: "#272c2c",
    },
    text: {
      primary: "#F5F5F5",
      secondary: "#bbb",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h2: {
      fontWeight: 700,
      color: "#F5F5F5",
    },
    h5: {
      color: "#bbb",
    },
    h6: {
      fontWeight: "bold",
      color: "#F5F5F5",
    },
    body1: {
      fontWeight: 400,
      color: "#F5F5F5",
      lineHeight: 1.7,
      textAlign: "justify",
    },
    body2: {
      textAlign: "justify",
      color: "#bbb",
      paddingBottom: 6,
      lineHeight: 1.7,
    },
  },
  spacing: 4,
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          fontSize: "0.75rem",
          backgroundColor: "#2a2a2a",
          color: "lightgray",
          borderRadius: 4,
        },
      },
    },
  },
});
