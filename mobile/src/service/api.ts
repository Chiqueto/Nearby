import axios from "axios"

export const api = axios.create({
    baseURL: "http://192.168.125.215:3333",
    timeout: 700,
})