export const getRaodNumber = (building: string) => {
  switch (building) {
    case "DRN":
      return "310.864.7441";
    case "DRS":
      return "310.864.7443";
    case "DES":
      return "310.864.7448";
    case "HTH":
      return "310.864.7471";
    case "LO":
      return "310.864.7491";
    case "L56":
      return "310.864.7500";
    case "MCC":
      return "310.864.7474";
    case "MCK":
      return "310.864.7549";
    case "PNHDOH":
      return "310.864.7462";
    case "PSA":
      return "310.493.6691";
    case "RAI":
      return "310.864.7483";
    case "ROS":
      return "310.864.7546";
    case "WHE":
      return "310.864.7446";
    default:
      return "";
  }
};

export const getBuildingName = (building: string) => {
  switch (building) {
    case "DRN":
      return "Del Rey North";
    case "DRS":
      return "Del Rey South";
    case "DES":
      return "Desmond";
    case "HTH":
      return "Hannon & Tenderich";
    case "LO":
      return "Leavey 4 & O'Malley";
    case "L56":
      return "Leavey 5/6";
    case "MCC":
      return "McCarthy";
    case "MCK":
      return "McKay";
    case "PNHDOH":
      return "Palm North/Doheny";
    case "PSA":
      return "Palm South Apartments";
    case "RAI":
      return "Rains";
    case "ROS":
      return "Rosecrans";
    case "WHE":
      return "Whelan";
    default:
      return "";
  }
};
