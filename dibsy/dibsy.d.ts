export interface Content {
    id: number,
    signature: string
}

export interface Media extends Content {
    bytes: string,
    format: string,

    alt: string,
    ai: boolean
}

export interface Comment extends Content {
    content: string,

    attachments?: Media[],

    replies: Comment[]
}

export interface Post extends Content {
    type: PostType,

    title?: string,
    content?: string,

    attachments?: Media[]

    tags?: string[],

    comments: Comment[]

    author: User
}

export interface Profile extends Content {
    name: string,

    avatar: Media,
    banner?: Media,

    bio?: string,
    pronouns?: string[],
    url?: string,

    user: User
}

export interface User extends Content {
    username: string,
    password: string,
    signature: string,

    bot: boolean

    profile: Profile,
    posts: Post[],
    comments: Comment[]
}

export enum PostType {
    TEXT,
    IMAGE,
    VIDEO,
    AUDIO
}