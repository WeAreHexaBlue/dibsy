import * as peersy from "peersy"
import { NextRequest } from "next/server"
import { res, notAllowed } from "@/utils"
import * as crypto from "crypto"
import * as dibsy from "@/dibsy"
import * as api from "@/api"

export async function POST(req: NextRequest) {
    if (!req.body) {
        return res(400, "Request body is not present.")
    }

    let rdata: api.UsersPOST
    try {
        rdata = await req.json()
    } catch (e) {
        return res(400, "Request body does not follow the `UsersPOST` format OR required arguments were not passed. Check the documentation.")
    }

    let headerPeer = req.headers.get("peer")
    if (!headerPeer) {
        return res(401, "Request header `peer` is missing. Please include your public key.")
    }

    let peer = peersy.connectedPeers.find(peer => peer.publicKey === headerPeer)
    if (!peer) {
        return res(404, "Couldn't find you in the `peersy.connectedPeers` array.")
    }

    let salt = crypto.randomBytes(16).toString("hex")

    let user: dibsy.User = {
        username: rdata.username,
        password: crypto.scryptSync(rdata.password, salt, 64).toString("hex"),
        bot: false,
        profile: {
            name: rdata.username
            // unfinished
        }
    }
}

export { notAllowed as GET }
export { notAllowed as PUT }
export { notAllowed as PATCH }
export { notAllowed as DELETE }
export { notAllowed as HEAD }
export { notAllowed as OPTIONS }