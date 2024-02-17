interface WebRTCPacket {
    id: string,
    last_shared: Date,
    created_at: Date
    edited_at: Date
}

interface EncryptedWebRTCPacket extends WebRTCPacket {
    data: string,
    signature: string
}


interface Media {}

interface Post {
    title?: string,
    content?: string,
    attachments?: Media[],
    comments?: Comment[],
    author: User
}

interface Profile {
    display: string,
    avatar?: Media,
    banner?: Media,
    bio?: string,
    pronouns?: string[],
    user: User
}

interface User {
    username: string
}