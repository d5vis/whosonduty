const url = "http://d5vis.pythonanywhere.com/building/";

export const fetchRas = async (building: string) => {
  return fetch(url + building).then((response) => response.json());
};
