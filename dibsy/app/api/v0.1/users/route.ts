import * as peersy from "peersy"
import { res, notAllowed } from "@/utils"
import { NextRequest } from "next/server"
import type { UsersPOST } from "../api"

export async function POST(req: NextRequest) {
    if (!req.body) {
        return res(400, "Request body is not present.")
    }

    let rdata: UsersPOST
    try {
        rdata = await req.json()
    } catch (e) {
        return res(400, "Request body does not follow the `UsersPOST` format OR required arguments were not passed. Check the documentation.")
    }

    let self: peersy.Peer
    // UNFINISHED
}

export { notAllowed as GET }
export { notAllowed as PUT }
export { notAllowed as PATCH }
export { notAllowed as DELETE }
export { notAllowed as HEAD }
export { notAllowed as OPTIONS }