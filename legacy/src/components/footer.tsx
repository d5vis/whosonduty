import Button from "@mui/material/Button";
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
    >
      <Typography fontWeight="bold">made with 🩵 by @d5vis</Typography>
    </Button>
  );
};

export default Footer;
