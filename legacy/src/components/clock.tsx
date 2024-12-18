import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";

interface ClockProps {
  setIsDutyHours: React.Dispatch<React.SetStateAction<boolean>>;
}

const Clock = (props: ClockProps) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
      if (time.getHours() >= 20 || time.getHours() <= 8) {
        props.setIsDutyHours(true);
      } else {
        props.setIsDutyHours(false);
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <Typography variant="h6" fontWeight={400}>
      {time.toLocaleString()}
    </Typography>
  );
};

export default Clock;
