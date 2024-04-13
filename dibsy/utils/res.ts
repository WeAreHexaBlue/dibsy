
import { NextResponse } from "next/server"

export const status: {[key: number]: string} = {
    200: "OK",
    201: "Created",
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not Found",
    405: "Method Not Allowed",
    418: "I'm a teapot!"
}

export function res(code: number, info: string, data?: any) {
    return NextResponse.json({
        ...data,
        res: {
            code: code,
            status: `${code} ${status[code]}`,
            info: info
        }
    }, {status: code})
}

export function notAllowed() {
    return res(405, "This endpoint does not support this request method.")
}