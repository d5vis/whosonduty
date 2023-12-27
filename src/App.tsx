import "./App.css";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Analytics } from "@vercel/analytics/react";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import BuildingSelect from "./components/buildingSelect";
import MainCard from "./components/mainCard";
import Title from "./components/title";
import Clock from "./components/clock";
import Ras from "./components/ras";
import Footer from "./components/footer";

import { dividerMargin } from "./utils/constants";

function App() {
  const navigate = useNavigate();
  const [building, setBuilding] = useState(
    window.location.pathname.replace("/", "")
  );
  if (building === "") {
    setBuilding("DES");
  }
  const [emoji, setEmoji] = useState("🦖");
  const [isDutyHours, setIsDutyHours] = useState(false);

  return (
    <Box
      className="App"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
    >
      <BuildingSelect building={building} setBuilding={setBuilding} />
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
        <p>Public Safety: (310)-338-2893</p>
        <p>Facilities Management: (310)-338-7779</p>
      </MainCard>
      <Footer />
      <Analytics />
    </Box>
  );
}

export default App;
