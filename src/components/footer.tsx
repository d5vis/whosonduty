import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";

import { dividerMargin } from "../utils/constants";

const Footer = () => {
  return (
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
  );
};

export default Footer;
