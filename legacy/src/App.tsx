import "./App.css";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Analytics } from "@vercel/analytics/react";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import BuildingSelect from "./components/buildingSelect";
import ThemeSwitcher from "./components/themeSwitcher";
import MainCard from "./components/mainCard";
import Title from "./components/title";
import Clock from "./components/clock";
import Ras from "./components/ras";
import Footer from "./components/footer";

import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./utils/themes";
import { CssBaseline, Typography } from "@mui/material";

import { dividerMargin } from "./utils/constants";

function App() {
  const navigate = useNavigate();
  const [building, setBuilding] = useState(
    window.location.pathname.replace("/", "")
  );
  if (building === "") {
    if (localStorage.getItem("building") !== null) {
      setBuilding(localStorage.getItem("building") as string);
    } else {
      setBuilding("DES");
    }
  }
  const [emoji, setEmoji] = useState("🦖");
  const [isDutyHours, setIsDutyHours] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box
        className="App"
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
      >
        <BuildingSelect building={building} setBuilding={setBuilding} />
        <ThemeSwitcher darkMode={darkMode} setDarkMode={setDarkMode} />
        <MainCard>
          <Title building={building} emoji={emoji} />
          <Divider variant="middle" sx={{ m: dividerMargin }} />
          <Clock setIsDutyHours={setIsDutyHours} />
          <Ras
            building={building}
            isDutyHours={isDutyHours}
            navigate={navigate}
            setEmoji={setEmoji}
          />
          <Typography>Public Safety: (310)-338-2893</Typography>
          <Typography>Facilities Management: (310)-338-7779</Typography>
        </MainCard>
        <Footer />
        <Analytics />
      </Box>
    </ThemeProvider>
  );
}

export default App;
