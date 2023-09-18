export const getRaodNumber = (building: string) => {
  switch (building) {
    case "DES":
      return "(310)-864-7448";
    case "DRS":
      return "(310)-864-7443";
    case "PNHDOH":
      return "(310)-864-7462";
    case "L56":
      return "(310)-864-7500";
    default:
      return "";
  }
};

export const getBuildingName = (building: string) => {
  switch (building) {
    case "DES":
      return "Desmond";
    case "DRS":
      return "Del Rey South";
    case "PNHDOH":
      return "Palm North/Doheny";
    case "L56":
      return "Leavey 5/6";
    default:
      return "";
  }
};
