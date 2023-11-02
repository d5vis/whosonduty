import "./App.css";
import * as React from "react";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { buildings } from "./utils/constants";
import { getRaodNumber, getBuildingName } from "./utils/utils";
import { fetchRas } from "./utils/api";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { CircularProgress } from "@mui/material";

const margin = "24px";
const dividerMargin = "12px";

function App() {
  const navigate = useNavigate();
  const [time, setTime] = useState(new Date());
  const [building, setBuilding] = useState(
    window.location.pathname.replace("/", "")
  );
  if (building === "") {
    setBuilding("DES");
  }
  const [emoji, setEmoji] = useState("🦖");
  const [ras, setRas] = useState(["none"]);
  const [isDutyHours, setIsDutyHours] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    setBuilding(event.target.value as string);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
      if (time.getHours() >= 20 || time.getHours() <= 8) {
        setIsDutyHours(true);
      } else {
        setIsDutyHours(true);
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    const getRas = async () => {
      const data = await fetchRas(building);
      setRas(data);
    };
    navigate(`/${building}`);
    building === "DES" ? setEmoji("🦖") : setEmoji("");
    if (isDutyHours) {
      setLoading(true);
      getRas()
        .catch((e) => console.log(e))
        .finally(() => setLoading(false));
    }
  }, [building, isDutyHours, navigate]);

  return (
    <Box
      className="App"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
    >
      <FormControl sx={{ position: "absolute", left: margin, top: margin }}>
        <InputLabel id="building-select-label">Building</InputLabel>
        <Select
          labelId="building-select-label"
          id="building-select"
          value={building}
          label="Building"
          onChange={handleChange}
          // disabled={true}
        >
          {buildings.map((building) => (
            <MenuItem key={building} value={building}>
              {getBuildingName(building)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Card sx={{ m: margin, p: margin }} variant="outlined">
        <Typography variant="h4">🦁 Who's On Duty?</Typography>
        <Typography variant="h5">
          {building} {emoji}
        </Typography>
        <Divider variant="middle" sx={{ m: dividerMargin }} />
        <Typography variant="h6">{time.toLocaleString()}</Typography>
        {isDutyHours ? (
          <Box>
            {ras.length > 1 ? (
              <Typography variant="h4">RAs on duty:</Typography>
            ) : (
              <Typography variant="h4">RA on duty:</Typography>
            )}
            <Typography variant="h6">{getRaodNumber(building)}</Typography>
            {loading ? (
              <CircularProgress />
            ) : (
              ras?.map((ra) => <Typography variant="h4">{ra}</Typography>)
            )}
          </Box>
        ) : (
          <Box>
            <Typography variant="h5">Duty will begin at 8:00pm</Typography>
            <p>Locked out? Try heading to the Area Office first</p>
          </Box>
        )}
        <p>Public Safety: (310)-338-2893</p>
        <p>Facilities Management: (310)-338-7779</p>
      </Card>
      <Button
        sx={{
          position: "absolute",
          bottom: dividerMargin,
          color: "grey",
        }}
        href="https://github.com/d5vis"
        target="_blank"
        disabled
      >
        <GitHubIcon></GitHubIcon>
        @d5vis
      </Button>
      {/* Presentation */}
      <Button
        sx={{
          position: "absolute",
          right: dividerMargin,
          bottom: dividerMargin,
          color: "grey",
          fontSize: "8px",
        }}
        href="https://github.com/d5vis"
        target="_blank"
        disabled
      >
        presentation version
      </Button>
    </Box>
  );
}

export default App;
