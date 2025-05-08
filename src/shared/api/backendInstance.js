import axios from "axios";

const backendInstance = axios.create({
    baseURL: "https://eshop-a0nb.onrender.com/api"
})

export default backendInstance;