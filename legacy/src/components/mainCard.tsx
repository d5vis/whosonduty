import Card from "@mui/material/Card";

import { margin } from "../utils/constants";

interface MainCardProps {
  children: React.ReactNode;
}

const MainCard = (props: MainCardProps) => {
  return (
    <Card sx={{ m: margin, p: margin }} variant="outlined">
      {props.children}
    </Card>
  );
};

export default MainCard;
