import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "dibsy",
    description: "A serverless social For Everything You.",
    authors: {
        name: "HexaBlue",
        url: "https://hexa.blue"
    },
    keywords: ["social", "p2p", "peer to peer", "serverless", "privacy"]
    // add OpenGraph and Twitter later
}

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}