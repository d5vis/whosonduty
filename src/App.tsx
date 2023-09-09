import "./App.css";
import * as React from "react";
import { useState, useEffect } from "react";

import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { CircularProgress } from "@mui/material";

const margin = "8px";

function App() {
  // const [date, setDate] = useState(new Date());
  const [building, setBuilding] = useState("DES");
  const [ras, setRas] = useState(["none"]);
  const [loading, setLoading] = useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    setBuilding(event.target.value as string);
  };

  useEffect(() => {
    setLoading(true);
    // setDate(new Date());
    const url = `https://corsproxy.io/?http://d5vis.pythonanywhere.com/`;
    fetch(url + building)
      .then((r) => r.json())
      .then((r) => setRas(r))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, [building]);

  return (
    <Box className="App" margin={margin}>
      {/* <Card sx={{ m: margin }} variant="outlined"> */}
      <Typography variant="h4">who's on duty 🦁</Typography>
      <Divider variant="middle" sx={{ m: margin }} />
      <FormControl sx={{ m: margin }}>
        <InputLabel id="building-select-label">Building</InputLabel>
        <Select
          labelId="building-select-label"
          id="building-select"
          value={building}
          label="Building"
          onChange={handleChange}
        >
          <MenuItem value={"DRS"}>Del Rey South</MenuItem>
          <MenuItem value={"DES"}>Desmond</MenuItem>
          <MenuItem value={"PNHDOH"}>Palm North/Doheny</MenuItem>
          <MenuItem value={"L56"}>Leavey 5/6</MenuItem>
        </Select>
      </FormControl>
      <Typography variant="h6"> RA(s) on duty</Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        ras.map((ra) => <Typography>{ra}</Typography>)
      )}
      {/* </Card> */}
    </Box>
  );
}

export default App;
