import axios from "axios"

interface authResponse {
    access_token: string
    refresh_token: string
    message: string
}

const controller = new AbortController()

const client = axios.create({
    baseURL: process.env.NEXT_PUBLIC_HOST_BE,
    timeout: 10000,
    headers: { "Content-Type": "application/json" },
    signal: controller.signal,
})

client.interceptors.response.use(
    (response) => {
        return response.data
    },
    function (error) {
        return Promise.reject(error)
    }
)

const authPost = (path: string, pars: Object): Promise<authResponse> => {
    return client.post(path, pars)
}

export { authPost }
