import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export default function middleware(req: NextRequest) {
    const cookies = req.cookies

    console.log(cookies)

    // console.log(new URL("/sign_in", req.url))
    // return NextResponse.redirect(new URL("/sign_in", req.url))
}

export const config = {
    matcher: ["/"],
}
