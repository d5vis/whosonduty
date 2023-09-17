import "./App.css";
import * as React from "react";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

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
        setIsDutyHours(false);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    navigate(`/${building}`);
    building === "DES" ? setEmoji("🦖") : setEmoji("");
    if (isDutyHours) {
      setLoading(true);
      const url = `https://corsproxy.io/?http://d5vis.pythonanywhere.com/`;
      fetch(url + building)
        .then((r) => r.json())
        .then((r) => setRas(r))
        .catch((e) => console.log(e))
        .finally(() => setLoading(false));
    }
  }, [building, isDutyHours]);

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
          <MenuItem value={"DRS"}>Del Rey South</MenuItem>
          <MenuItem value={"DES"}>Desmond</MenuItem>
          <MenuItem value={"PNHDOH"}>Palm North/Doheny</MenuItem>
          <MenuItem value={"L56"}>Leavey 5/6</MenuItem>
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
              <Typography variant="h4"> RAs on duty</Typography>
            ) : (
              <Typography variant="h4"> RA on duty</Typography>
            )}
            {/* <Typography variant="h6">(310)-864-7448</Typography> */}
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
    </Box>
  );
}

export default App;
