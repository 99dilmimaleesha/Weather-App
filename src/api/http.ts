import axios from "axios";


const http = axios.create({
baseURL: "https://api.weatherapi.com/v1",
timeout: 5000,
});


export default http;