import http from "./http";


export const fetchWeatherApi = async (city: string) => {
const apiKey = "e55a83cd82f14b7c96955744251811";
const res = await http.get(
`/current.json?key=${apiKey}&q=${city}&aqi=no`
);
return res.data;
};