import axios from "axios";

export default axios.create({
    baseURL: `https://api.rawg.io/api/`,
    params:{
        key: "f4a73ba7d48843b4a6baff306ab46e50"
    }
})