"use client"

import { signIn } from "@apis/auth"
import { useForm, SubmitHandler } from "react-hook-form"
import { useCookies } from "next-client-cookies"

interface Inputs {
    signInEmail: string
    signInPassword: string
}

const FormSignIn: React.FC = () => {
    const cookies = useCookies()

    const {
        register,
        handleSubmit,
        formState: { errors: errorForms },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            const { signInEmail: email, signInPassword: password } = data

            const { access_token, refresh_token } = await signIn({
                email,
                password,
            })

            // console.log(datas)
            cookies.set("access_token", access_token)

            cookies.set("refresh_token", refresh_token)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-y-2"
        >
            <label htmlFor="signInEmail">Email</label>
            <input
                type="text"
                {...register("signInEmail")}
                id="signInEmail"
                placeholder="Email"
            />
            {/* {errorForms.signInEmail && } */}
            <label htmlFor="signInPassword">Password</label>
            <input
                {...register("signInPassword")}
                id="signInPassword"
                className=""
                placeholder="Password"
            />

            <button type="submit">Sign In</button>
        </form>
    )
}

export default FormSignIn
