import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { buildings } from "../utils/constants";
import { getBuildingName } from "../utils/utils";

import { margin } from "../utils/constants";

import React from "react";

interface BuildingSelectProps {
  building: string;
  setBuilding: React.Dispatch<React.SetStateAction<string>>;
}

const BuildingSelect = (props: BuildingSelectProps) => {
  const handleChange = (event: SelectChangeEvent) => {
    const newBuilding = event.target.value as string;
    props.setBuilding(newBuilding);
    localStorage.setItem("building", newBuilding);
  };

  return (
    <FormControl sx={{ position: "absolute", left: margin, top: margin }}>
      <InputLabel id="building-select-label">Building</InputLabel>
      <Select
        labelId="building-select-label"
        id="building-select"
        value={props.building}
        label="Building"
        onChange={handleChange}
      >
        {buildings.map((building) => (
          <MenuItem key={building} value={building}>
            {getBuildingName(building)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default BuildingSelect;
