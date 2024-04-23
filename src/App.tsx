import "./App.scss";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Card } from "./card/card";
import { AppBar, Toolbar } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: getSystemTheme(),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar></Toolbar>
      </AppBar>
      <Card top="Top" bottom="Bottom" />
    </ThemeProvider>
  );
}

function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default App;
