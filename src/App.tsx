import "./App.css";
import * as React from "react";
import { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Typography from "@mui/material/Typography";

function App() {
  const [date, setDate] = useState(new Date());
  const [building, setBuilding] = useState("DRS");
  const [ras, setRas] = useState(["none"]);

  const handleChange = (event: SelectChangeEvent) => {
    setBuilding(event.target.value as string);
  };

  useEffect(() => {
    setDate(new Date());
    const url = `http://d5vis.pythonanywhere.com/`;
    fetch(url + building)
      .then((r) => r.json())
      .then((r) => setRas(r))
      .catch((e) => console.log(e));
  }, [building]);

  return (
    <Box className="App">
      <Card sx={{ m: "8px" }} variant="outlined">
        <FormControl sx={{ m: "8px" }}>
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
        <Typography> RA(s) on duty for {date.toLocaleDateString()} </Typography>
        {ras.map((ra) => (
          <Typography>{ra}</Typography>
        ))}
      </Card>
    </Box>
  );
}

export default App;
