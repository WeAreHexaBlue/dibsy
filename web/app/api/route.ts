import { res, notAllowed } from "@/utils"

export function GET() {
    const host = `${process.env.PROTOCOL}://${process.env.DOMAIN}/api`

    return res(200, "Success.", {
        name: "dibsy API",
        version: "0.1.0",
        description: "Handles content encryption and decryption for peer-to-peer sharing.",
        routes: [
            {
                url: `${host}`,
                description: "Shows information about the API.",
                methods: ["GET"]
            }
        ]
    })
}

export { notAllowed as POST }
export { notAllowed as PUT }
export { notAllowed as PATCH }
export { notAllowed as DELETE }
export { notAllowed as HEAD }
export { notAllowed as OPTIONS }