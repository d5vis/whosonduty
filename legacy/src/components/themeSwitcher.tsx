import Box from "@mui/material/Box";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Switch from "@mui/material/Switch";

import { margin } from "../utils/constants";

interface ThemeSwitcherProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const handleChange = () => {
    const newMode = !props.darkMode;
    props.setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());
  };

  return (
    <Box
      sx={{ position: "absolute", right: margin, top: margin }}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <DarkModeIcon />
      <Switch checked={props.darkMode} onChange={handleChange} />
    </Box>
  );
};

export default ThemeSwitcher;
