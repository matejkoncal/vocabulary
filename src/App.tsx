import "./App.scss";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AppBar, Box, Fade, IconButton, Stack, Toolbar } from "@mui/material";
import { CardsPlayer } from "./carsPlayer/cardsPlayer";
import { useState } from "react";
import { CardSource } from "./utils/utils";
import { SourceSelector } from "./sourceSelector/sourceSelector";
import Snipet from "./assets/carbon.svg";
import SnipetLight from "./assets/carbonLight.svg";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { TypeAnimation } from "react-type-animation";
import useMediaQuery from "@mui/material/useMediaQuery";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

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
  const [theme, setTheme] = useState(getSystemTheme() === "light" ? lightTheme : darkTheme);
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const [secondTextVisible, setSecondTextVisible] = useState(false);
  const [sourceSelectorVisible, setSourceSelectorVisible] = useState(false);
  const [navigatedFromCards, setNavigatedFromCards] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: cardsSource ? "space-between" : "end" }}>
          {cardsSource && (
            <IconButton
              sx={{
                "&:focus": {
                  outline: "none",
                },
              }}
              onClick={() => setCardsSource(undefined)}
              color="inherit"
            >
              <ArrowBackIcon />
            </IconButton>
          )}
          <IconButton
            sx={{
              "&:focus": {
                outline: "none",
              },
            }}
            onClick={() => setTheme(theme.palette.mode === "dark" ? lightTheme : darkTheme)}
            color="inherit"
          >
            {theme.palette.mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      {cardsSource ? (
        <CardsPlayer cardsSource={cardsSource} />
      ) : (
        <>
          <Stack marginBottom="50px" alignItems="center">
            <Box height="48px" width="600px" display="flex" justifyContent="center" alignItems="center">
              <TypeAnimation
                preRenderFirstString={navigatedFromCards}
                sequence={[
                  `This is a simple app for aproaching vocabulary.\nJust upload a file with the following format:`, // Types 'One'
                  () => setSecondTextVisible(true),
                ]}
                wrapper="div"
                cursor={false}
                style={{
                  height: "48px",
                  whiteSpace: "pre-line",
                  fontSize: matches ? "1rem" : "1.5rem",
                  textAlign: "center",
                  display: "block",
                  width: "100%",
                }}
              />
            </Box>
            <Fade in={secondTextVisible}>
              <Box height="223px">
                <img hidden={!secondTextVisible} src={theme.palette.mode === "dark" ? Snipet : SnipetLight} alt="carbon" />
              </Box>
            </Fade>
            <Box height="48px" width="600px" display="flex" justifyContent="center" alignItems="center">
              {secondTextVisible && (
                <TypeAnimation
                  preRenderFirstString={navigatedFromCards}
                  sequence={[
                    "and you can start learning. Or try AI...", // Types 'One'
                    () => setSourceSelectorVisible(true),
                  ]}
                  wrapper="div"
                  cursor={true}
                  style={{ whiteSpace: "pre-line", fontSize: matches ? "1rem" : "1.5rem", textAlign: "center", display: "block", width: "100%" }}
                />
              )}
            </Box>
          </Stack>
          <Box height="36.5px">
            <Fade in={sourceSelectorVisible}>
              <div>
                <SourceSelector
                  onFileSelected={source => {
                    setNavigatedFromCards(true);
                    setCardsSource(source);
                  }}
                />
              </div>
            </Fade>
          </Box>
        </>
      )}
    </ThemeProvider>
  );
}

function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default App;
