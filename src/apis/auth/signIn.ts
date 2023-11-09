import { authPost } from "./http"

interface signInResponse {
    access_token: string
    refresh_token: string
}

export default function signIn({
    email,
    password,
}: {
    email: string
    password: string
}) {
    return authPost("auth/sign_in", { email: email, password: password })
}
