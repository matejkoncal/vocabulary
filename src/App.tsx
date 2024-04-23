import "./App.scss";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AppBar, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import { CardsPlayer } from "./carsPlayer/cardsPlayer";
import { useState } from "react";
import { CardSource, parseSourcedFile } from "./utils/utils";
import { SourceSelector } from "./sourceSelector/sourceSelector";
import { AsyncTextFileReader } from "./asyncTextFileReader/asyncTextFileReader";
import Snipet from "./assets/carbon.svg";
import SnipetLight from "./assets/carbonLight.svg";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [cardsSource, setCardsSource] = useState<CardSource[] | undefined>();
  const [theme, setTheme] = useState(getSystemTheme() === "light" ? darkTheme : lightTheme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "end" }}>
          <IconButton onClick={() => setTheme(theme.palette.mode === "dark" ? lightTheme : darkTheme)} color="inherit">
            {theme.palette.mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      {cardsSource ? (
        <CardsPlayer cardsSource={cardsSource} />
      ) : (
        <>
          <Stack marginBottom="50px" alignItems="center">
            <Typography sx={{ typography: { xs: "body1", sm: "h5" } }}>This is a simple app for aproaching vocabulary.</Typography>
            <Typography sx={{ typography: { xs: "body1", sm: "h5" } }}>Just upload a file with the following format:</Typography>
            <img src={theme.palette.mode === "dark" ? Snipet : SnipetLight} alt="carbon" />
            <Typography sx={{ typography: { xs: "body1", sm: "h5" } }}>and you can start learning.</Typography>
          </Stack>
          <SourceSelector
            onFileSelected={file => {
              const fileReader = new AsyncTextFileReader();
              fileReader.read(file).then(text => {
                const source = parseSourcedFile(text);
                setCardsSource(source);
              });
            }}
          />
        </>
      )}
    </ThemeProvider>
  );
}

function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default App;
