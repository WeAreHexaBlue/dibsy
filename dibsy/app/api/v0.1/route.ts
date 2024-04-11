import * as peersy from "peersy"
import { res, notAllowed } from "../../../utils"

export function GET() {
    const host = `${process.env.PROTOCOL}://${process.env.DOMAIN}/api/v0.1`

    return res(200, "Success.", {
        name: "dibsy - For Everything You: API",
        version: "0.1.0",
        description: "Handles the exchanges over [peersy](https://github.com/WeAreHexaBlue/peersy.js).",
        stats: {
            connectedPeers: peersy.connectedPeers.length
        },
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