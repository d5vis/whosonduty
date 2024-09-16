const corsProxy = "https://crossorigin.me/";
const url = "http://d5vis.pythonanywhere.com/building/";

export const fetchRas = async (building: string) => {
  return fetch(corsProxy + url + building).then((response) => response.json());
};
