import "./App.scss";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AppBar, Stack, Toolbar, Typography } from "@mui/material";
import { CardsPlayer } from "./carsPlayer/cardsPlayer";
import { useState } from "react";
import { CardSource, parseSourcedFile } from "./utils/utils";
import { SourceSelector } from "./sourceSelector/sourceSelector";
import { AsyncTextFileReader } from "./asyncTextFileReader/asyncTextFileReader";
import Snipet from "./assets/carbon.svg";

const theme = createTheme({
  palette: {
    mode: getSystemTheme(),
  },
});

function App() {
  const [cardsSource, setCardsSource] = useState<CardSource[] | undefined>();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar></Toolbar>
      </AppBar>
      {cardsSource ? (
        <CardsPlayer cardsSource={cardsSource} />
      ) : (
        <>
          <Stack marginBottom="50px" alignItems="center">
            <Typography sx={{ typography: { xs: "body1", sm: "h5" } }}>This is a simple app for aproaching vocabulary.</Typography>
            <Typography sx={{ typography: { xs: "body1", sm: "h5" } }}>Just upload a file with the following format:</Typography>
            <img src={Snipet} alt="carbon" />
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
