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

    let storageSelf = localStorage.getItem("peer")
    if (!storageSelf) {
        return res(401, "No Peer data in localStorage.")
    }

    let self: peersy.Peer
    try {
        self = JSON.parse(storageSelf)
    } catch (e) {
        return res(500, "localStorage Peer data is not compatible with `peersy.Peer` type, somehow.")
    }
}

export { notAllowed as GET }
export { notAllowed as PUT }
export { notAllowed as PATCH }
export { notAllowed as DELETE }
export { notAllowed as HEAD }
export { notAllowed as OPTIONS }