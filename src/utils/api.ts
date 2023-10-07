const corsProxy = "https://corsproxy.io/?";
const url = "http://d5vis.pythonanywhere.com/";

export const fetchRas = async (building: string) => {
  return fetch(corsProxy + url + building).then((response) => response.json());
};
