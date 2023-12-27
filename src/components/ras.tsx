import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { CircularProgress } from "@mui/material";
import { getRaodNumber } from "../utils/utils";
import { fetchRas } from "../utils/api";

import React, { useState, useEffect } from "react";

interface RasProps {
  building: string;
  isDutyHours: boolean;
  navigate: any;
  setEmoji: React.Dispatch<React.SetStateAction<string>>;
}

const Ras = (props: RasProps) => {
  const [ras, setRas] = useState(["No RA(s) are on duty"]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getRas = async () => {
      const data = await fetchRas(props.building);
      setRas(data.ras);
    };
    props.navigate(`/${props.building}`);
    props.building === "DES" ? props.setEmoji("🦖") : props.setEmoji("");
    if (props.isDutyHours) {
      setLoading(true);
      getRas()
        .catch((e) => console.log(e))
        .finally(() => setLoading(false));
    }
  }, [props.building, props.isDutyHours, props.navigate]);

  return props.isDutyHours ? (
    <Box>
      {ras != null && ras.length > 1 ? (
        <Typography variant="h4">RAs on duty:</Typography>
      ) : (
        <Typography variant="h4">RA on duty:</Typography>
      )}
      <Typography variant="h6">{getRaodNumber(props.building)}</Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        ras?.map((ra) => <Typography variant="h4">{ra}</Typography>)
      )}
    </Box>
  ) : (
    <Box>
      <Typography variant="h5">Duty will begin at 8:00pm</Typography>
      <p>Locked out? Try heading to the Area Office first</p>
    </Box>
  );
};

export default Ras;
