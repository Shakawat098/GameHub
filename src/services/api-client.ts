import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"238c35e3ecb14c8fb2fa2f25e1ccf9e6"
    }
})