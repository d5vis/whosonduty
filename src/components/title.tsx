import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface TitleProps {
  building: string;
  emoji: string;
}

const Title = (props: TitleProps) => {
  return (
    <Box>
      <Typography variant="h4" fontWeight="bold">
        🦁 Who's On Duty?
      </Typography>
      <Typography variant="h5" fontWeight="bold">
        {props.building} {props.emoji}
      </Typography>
    </Box>
  );
};

export default Title;
