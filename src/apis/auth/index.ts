import axios from "axios"

export const setHeaderToken = (token?: string) => {
    axios.defaults.headers.common["Authorization"] = token
        ? `Bearer ${token}`
        : ""
}

export { default as signIn } from "./signIn"
