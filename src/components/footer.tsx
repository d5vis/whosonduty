import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import Typography from "@mui/material/Typography";

import { dividerMargin } from "../utils/constants";

const Footer = () => {
  return (
    <Button
      size="small"
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
      <Typography fontWeight="bold">@d5vis</Typography>
    </Button>
  );
};

export default Footer;
