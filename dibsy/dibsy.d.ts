export interface Content {
    id: number,
    type: ContentType,
    signed: string
}

export interface Media {
    bytes: string,
    format: string,

    alt: string,
    ai: boolean
}

export interface Comment {
    content: string,

    attachments?: Media[],

    replies: Comment[],

    author: User
}

export interface Repost {
    origin: Post,
    quote?: string,

    author: User
}

export interface Post {
    type: PostType,

    title?: string,
    content?: string,

    attachments?: Media[]

    tags?: string[],

    comments: Comment[],

    author: User
}

export interface Profile {
    name: string,

    avatar: Media | "default",
    banner?: Media,

    bio?: string,
    pronouns?: string[],
    url?: string,

    user: User
}

export interface User {
    username: string,
    password: string,

    bot: boolean,

    profile?: Profile,
    posts: Post[],
    comments: Comment[]
}

export enum ContentType {
    USER,
    PROFILE,
    POST,
    REPOST,
    COMMENT,
    MEDIA
}

export enum PostType {
    TEXT,
    IMAGE,
    VIDEO,
    AUDIO
}