"use client"

import { useForm, SubmitHandler } from "react-hook-form"

interface Inputs {
    signInEmail: string
    signInPassword: string
}

const FormSignIn: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors: errorForms },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-y-2"
        >
            <label htmlFor="signInEmail">Email</label>
            <input type="text" {...register("signInEmail")} id="signInEmail" />
            {/* {errorForms.signInEmail && } */}
            <label htmlFor="signInPassword">Password</label>
            <input
                {...register("signInPassword")}
                id="signInPassword"
                className=""
            />

            <button type="submit">Sign In</button>
        </form>
    )
}

export default FormSignIn
