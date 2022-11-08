import axios from 'axios'

export const BaseApi = axios.create({
    baseURL: "http://localhost:3000/api",
    headers: {
        "Access-Control-Allow-Methods": "*",
        "Content-Type": "application/json"
    },
})

const Api = function () {
    return BaseApi
}

export default Api