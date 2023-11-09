"use client"

import { ReactNode } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { CookiesProvider } from "next-client-cookies"
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies"

const queryClient = new QueryClient()

const Config: typeof CookiesProvider = (props: {
    children: ReactNode
    value: RequestCookie[]
}) => {
    return (
        <QueryClientProvider client={queryClient}>
            <CookiesProvider {...props} />
        </QueryClientProvider>
    )
}

export default Config
